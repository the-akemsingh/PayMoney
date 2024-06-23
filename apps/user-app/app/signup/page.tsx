"use client";
import { useState } from "react";
import { InputBar } from "../../components/inputbar";
import Button from "../../components/button";
import { useRouter } from "next/navigation";
import { signup } from "../actions/user";

export default function Signin(): JSX.Element {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phonenumber, setPhone] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const router = useRouter();

    const handleSignUp = async () => {
        try {
            const response =await signup({ name, email,phonenumber, password });
            if (response?.status === 201) {
                router.push("/signin");
            }
            // console.log("Signup")
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="min-h-screen bg-slate-200">
            <div className="flex justify-center pt-36 ">
                <div className="flex flex-col gap-4 shadow-lg shadow-black p-6 bg-white rounded-2xl min-w-96 ">
                    <div className="text-7xl font-bold">SIGN UP</div>

                    <InputBar label="Name" type="text" placeholder="Jon Snow" onChange={(e) => {
                        setName(e.target.value)
                    }}   />

                    <InputBar label="Email" type="text" placeholder="Email@provider.com" onChange={(e) => {
                        setEmail(e.target.value)
                    }}   />

                    <InputBar label="PhoneNumber" type="number" placeholder="98765-43210" onChange={(e) => {
                        setPhone(e.target.value)
                    }}  />

                    <InputBar label="Password" type="text" placeholder="*********" onChange={(e) => {
                        setPassword(e.target.value)
                    }}  />

                    <hr />
                    <div className="flex justify-center">
                        <Button name="Signup" onClick={handleSignUp} />
                    </div>
                    <div>
                        Already have an account? <a href="/signin" className="text-blue-500">Sign In</a>
                    </div>
                </div>
            </div>
        </div>
    )
}