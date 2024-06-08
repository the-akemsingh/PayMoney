"use client";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Button from "./button";


export default function InOutButton() {
    const session = useSession();
    return (
        <div className="flex flex-row gap-4  mr-2">
            <Button
                name={session.status === "authenticated" ? "LOGOUT" : "LOGIN"}
                onClick={session.status === "authenticated" ? () => signOut() : () => {
                    signIn()
                }}
            ></Button>
        </div>
    );
}

