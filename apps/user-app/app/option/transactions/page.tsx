import TransactionsHistory from "../../../components/TransactionsHistory";
import MenuBar from "../../../components/menubar";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";

async function getOnRampTransactions() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return [];
  }
  const txns = await prisma.onRampTrasactions.findMany({
    where: {
      UserId: Number(session?.user?.id)
    }
  });
  return txns.map(t => ({
    time: t.startTimestamp,
    amount: t.amount,
    status: t.status,
    provider: t.provider
  }))
}

export default async function Transactions() {
  const transactions = await getOnRampTransactions();

  return (
    <div className="grid grid-cols-3 ">
      <div className="col-span-1 h-screen mt-20">
        <MenuBar />
      </div>
      <div className="flex mt-40 pl-40 flex-col col-span-2 gap-20 " >
        <div className="gap-4 ">
          <div className="text-6xl font-extrabold">Transactions</div>
          <div className="font-bold text-2xl mt-2">Here are your transactions</div>
        </div>
        <div className="flex flex-col  gap-4">
          <TransactionsHistory transactions={transactions} />
        </div>
      </div>
    </div>
  )
}

