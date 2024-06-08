import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/auth";
import prisma from "@repo/db/client";

export default async function BalanceCard() {
    const session = await getServerSession(authOptions);
    const UserId= session?.user?.id;
    const balance= await prisma.balance.findUnique({
        where: {
            UserId: Number(UserId),
        },
    });
    const balanceAmount = (balance?.amount ?? 0) / 100;

    return (
        <div className="flex flex-col bg-white rounded-3xl">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                    <div>
                        <div
                            className="text-4xl font-bold  text-gray-600 "
                        >
                            Current Balance
                        </div>
                    </div>
                    <div className="mt-6">
                        <p>
                            <span className="text-5xl font-light tracking-tight text-black">
                                ₹ {balanceAmount}/-
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex px-6 pb-8 sm:px-8">
                <a
                    className="flex items-center  justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-xl focus-visible:ring-black"
                    href="/option/addMoney"
                >
                    Add money into wallet
                </a>
            </div>
        </div>

    )
}