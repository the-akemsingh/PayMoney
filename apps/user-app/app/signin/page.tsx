"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import {InputBar} from "../../components/inputbar";
import Button from "../../components/button";
import { useRouter } from "next/navigation";

export default function Signin(): JSX.Element {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const router = useRouter();

    const handleSignIn=async()=>{
        try {
            const res =await signIn("credentials", {
                email: email,
                password: password,
                redirect: false
            })
            console.log(res)
            router.push("/")
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="min-h-screen bg-slate-200">
            <div className="flex justify-center pt-36 ">
                <div className="flex flex-col gap-4 shadow-lg shadow-black p-6 bg-white rounded-2xl min-w-96 ">
                    <div className="text-7xl font-bold">SIGN IN</div>

                    <InputBar label="Email" type="text" placeholder="Email@provider.com" onChange={(e) => {
                        setEmail(e.target.value)
                    }}  ></InputBar>

                    <InputBar label="Password" type="password" placeholder="*********" onChange={(e) => {
                        setPassword(e.target.value)
                    }} ></InputBar>
                    
                    <hr />
                    <div className="flex justify-center">
                        <Button name="LogIn" onClick={handleSignIn}></Button>
                    </div>
                    <div>
                        Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}