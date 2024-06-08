import BalanceCard from "../../../components/balanceCard";
import MenuBar from "../../../components/menubar";
import { getServerSession } from "next-auth";

export default async function Balance() {
  const session = await getServerSession();
  return (
    <div className="grid grid-cols-3 ">
      <div className="col-span-1 h-screen mt-20">
        <MenuBar></MenuBar>
      </div>
      <div className="flex mt-40 pl-40 flex-col col-span-2 gap-20 " >
        <div className="text-4xl font-bold max-w-72">
          <BalanceCard></BalanceCard>
        </div>
      </div>
    </div>
  )
}