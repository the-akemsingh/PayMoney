"use client";
import { useState } from "react";
import { InputBar } from "./inputbar";
import Button from "./button";
import { Select } from "./select";
import { transfer } from "../app/actions/OnRampTransactions";
export default function AddMoneyCard() {
    const [provider, setProvider] = useState("");
    const [amount, setAmount] = useState(0);
    const [redirectUrl, setRedirectUrl] = useState("");
    const options = [
        { value: "1", name: "Axis Bank", redirectUrl: "wehbw" },
        { value: "2", name: "HDFC", redirectUrl: "rkfhiruw" },
    ]
    async function Transfer() {
        try {
            //generate random token
            const token = Math.floor(1000 + Math.random() * 9000);
            transfer({ amount, provider, startTimestamp: new Date(), token: token });
        } catch (e) {
            console.log(e);
        }
    }
    return (

        <div className="flex mt-40 pl-40 flex-col col-span-2 gap-20 " >
            <div className=" ">
                <div className="text-6xl font-extrabold">AddMoney</div>
                <div className="font-bold text-2xl mt-2">Transfer money to wallet from your bank account</div>
            </div>
            <div className="flex flex-col max-w-28 gap-4">
                <InputBar label="Amount" placeholder="Value of amount" type="number" onChange={(e) => {
                    setAmount(Number(e.target.value));
                }} ></InputBar>

                <Select label="Providers" onChange={(e) => {
                    const selectedProvider = options.find(option => option.name === e.target.value);
                    setProvider(selectedProvider?.name || "");
                    setRedirectUrl(selectedProvider?.redirectUrl || "");
                }} options={options} ></Select>

                <Button name="Transfer" onClick={() => {
                    Transfer();
                    { console.log(provider); }
                    { console.log(redirectUrl); }
                    { console.log("sdkjdbivyrh"); }
                }} ></Button>
            </div>
        </div>
    )
}