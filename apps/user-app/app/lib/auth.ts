import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@repo/db/client";
import { UserLoginSchema, LoginInput } from "@repo/validationschemas/config";
import bcrypt from "bcrypt";

type Credentials = {
  email: string;
  phonenumber: string;
  password: string;
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your Email",
        },
        phonenumber: {
          label: "Phone Number",
          type: "number",
          placeholder: "Enter your Phone Number",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your Password",
        },
      },
      async authorize(credentials: any) {
        const { success } = UserLoginSchema.safeParse(credentials);
        if (!success) {
          throw new Error("Invalid credentials");
        }
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
              phonenumber: credentials.phonenumber,
            },
          });
          if (!user) {
            throw new Error("User Not Found");
          }
          const passwordValidation = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!passwordValidation) {
            throw new Error("Incorrect Password");
          }
          const str_id = user.id.toString();
          return {
            id: str_id,
            email: user.email,
            name: user.name,
            phonenumber: user.phonenumber,
          };
        } catch (error) {
          throw new Error("Error signing in");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async session({session, token}: any) {
      session.user.id = token.sub;
      return session;
    },
  },
};
