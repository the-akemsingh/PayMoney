import InOutButton from "../components/InOutButton";

import MenuBar from "../components/menubar";

export default function Home(): JSX.Element {
  return (
    <div className="grid grid-cols-3 ">
      <div className="col-span-1 h-screen mt-20">
        <MenuBar />
      </div>
      <div className="flex justify-center col-span-2" >
        <div className="gap-4  mt-52">
          <div className="text-9xl font-extrabold">PAYMONEY</div>
          <div className="font-bold text-4xl text-zinc-700">Transfer money effortlessly</div>
          <div className="mt-4">
            <InOutButton />
          
          </div>
        </div>
      </div>
    </div>
  )
}