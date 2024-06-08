"use client";   
import { useState } from "react";
import { InputBar } from "./inputbar";
import Button from "./button";
import P2P_Action from "../app/actions/P2P_Action";

export default function P2PTranfer() {
    const [amount, setAmount] = useState(0);
  const [phonenumber, setPhonenumber] = useState('');
    return (
        <div>
            <div className="mb-12">
                <div className="text-6xl font-extrabold mb-1">P2P</div>
                <div className="font-bold text-2xl mt-2">Transfer money to phone number</div>
            </div>
            <div className="flex flex-col gap-4 max-w-28">
                <InputBar
                    label="Amount"
                    placeholder="Value of amount"
                    type="number"
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
                <InputBar
                    label="Phone Number"
                    placeholder="Receiver's phone number"
                    type="number"
                    onChange={(e) => setPhonenumber(e.target.value)}
                />
                <Button
                    name="Transfer"
                    onClick={async() =>{
                        const res=await P2P_Action({amount, phonenumber})
                        alert(res.message);
                    } }
                />
            </div>
        </div>
    )
}