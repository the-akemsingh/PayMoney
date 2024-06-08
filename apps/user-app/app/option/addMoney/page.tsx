import AddMoneyCard from "../../../components/addMoneyCard";
import MenuBar from "../../../components/menubar";

export default  function AddMoney(): JSX.Element {
 
  return (
    <div className="grid grid-cols-3 ">
      <div className="col-span-1 h-screen mt-20">
        <MenuBar></MenuBar>
      </div>
      <AddMoneyCard></AddMoneyCard>
    </div>
  )
}