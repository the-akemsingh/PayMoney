"use server";
import prisma from "@repo/db/client";
import bcrypt from "bcrypt";
import { UserSignupSchema } from "@repo/validationschemas/config";

export async function signup({
  name,
  email,
  phonenumber,
  password,
}: {
  name: string;
  email: string;
  phonenumber: string;
  password: string;
}) {
  const body = { name, email, phonenumber, password };
  const success = UserSignupSchema.safeParse(body);
  if (!success) {
    return {
      message: "invalid credentials",
    };
  }
  const isexisting = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (isexisting) {
    return {
      message: "user already exists",
    };
  }
  try {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        phonenumber: body.phonenumber,
        password: hashedPassword,
      },
    });
    return {
      message: "user signed up successfully",
      status: 201,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "error in signing up",
    };
  }
}
