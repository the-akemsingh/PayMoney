import InOutButton from "./InOutButton";
import {getServerSession} from "next-auth"
export default async function Appbar() {
    const session=await getServerSession()
    return (
        <div className="fixed w-full bg-white">
            <div className="flex flex-row relative p-4 border-b justify-between">
                <a href="/" className="text-3xl px-3 ">PAYMONEY</a>
                <div className="flex flex-row gap-4  mr-2">  
                    <InOutButton></InOutButton>
                </div>
            </div>
        </div>
    )
}