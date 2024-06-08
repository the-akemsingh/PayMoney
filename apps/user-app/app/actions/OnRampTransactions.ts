"use server";
import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";
import { authOptions } from "../lib/auth";

export async function transfer({
  amount,
  provider,
  startTimestamp,
  token,
}: {
  amount: number;
  provider: string;
  startTimestamp: Date;
  token: number;
}) {

  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return {
      message: "Please login or sign up to continue",
    };
  }
  const UserId = Number(session.user.id);
  const body = { amount, provider, startTimestamp, token };

  try {
    const transfer = await prisma.onRampTrasactions.create({
      data: {
        status: "Processing",
        provider: body.provider,
        amount: body.amount * 100,
        startTimestamp: body.startTimestamp,
        token: body.token,
        user: {
          connect: { id: UserId }
        }
      },
    });
    
    return {
      message: "Transfer request initiated.",
      status: 201,
    };
  } catch (e) {
    console.log(e);
    return {
      message: "Error in initiating transfer",
    };
  }
}
