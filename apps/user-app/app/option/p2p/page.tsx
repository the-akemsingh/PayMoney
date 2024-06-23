import MenuBar from "../../../components/menubar";
import P2PTranfer from "../../../components/p2p";

export default function P2P() {
  
  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="col-span-1 mt-20">
        <MenuBar />
      </div>
      <div className="flex pl-40  flex-col justify-center col-span-2 px-16">
        <P2PTranfer />
      </div>
    </div>
  );
}
