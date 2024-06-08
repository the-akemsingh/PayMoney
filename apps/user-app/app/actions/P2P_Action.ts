"use server";

import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

export default async function P2P_Action({
  amount,
  phonenumber,
}: {
  amount: number;
  phonenumber: string;
}) {
  const session = await getServerSession(authOptions);
  amount = amount * 100;
  const sender = session?.user;
  if (!sender) {
    return {
      message: "Error while sending",
    };
  }
  const senderId = Number(sender?.id);
  const receiver = await prisma.user.findFirst({
    where: {
      phonenumber: phonenumber,
    },
  });
  if (!receiver) {
    return {
      message: "Receiver not found",
      status: 404,
    };
  }

  await prisma.$transaction(async (tx) => {
    let fromBalance = await tx.balance.findUnique({
      where: { UserId: senderId },
    });
    if (!fromBalance) {
      fromBalance = await tx.balance.create({
        data: { UserId: senderId, amount: 0, locked: 0 },
      });
    }

    let toBalance = await tx.balance.findUnique({
      where: { UserId: receiver.id },
    });
    if (!toBalance) {
      toBalance = await tx.balance.create({
        data: { UserId: receiver.id, amount: 0, locked: 0 },
      });
    }

    if (fromBalance.amount < amount) {
      throw new Error("Insufficient funds");
    }

    await tx.balance.update({
      where: { UserId: senderId },
      data: { amount: { decrement: amount } },
    });

    await tx.balance.update({
      where: { UserId: receiver.id },
      data: { amount: { increment: amount } },
    });

    await tx.p2pTransfer.create({
      data: {
        fromUserId: senderId,
        toUserId: receiver.id,
        amount,
        timestamp: new Date(),
      },
    });
  });
  return {
    message: "Transfer successful",
    status: 200,
  };
}
