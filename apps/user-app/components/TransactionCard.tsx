export default function TransactionCard({
    time,
    amount,
    status
}: {
    time: Date,
    amount: number,
    status: string,
}) {
    return (
        <div className="flex justify-around p-2 max-w-xl rounded-xl border border-neutral-300 border-opacity-70">
            <div>
                <div className="Amount text-black text-lg font-extrabold leading-normal">{amount}</div>
                <div className="Title  text-zinc-500 text-sm font-normal leading-tight">Received INR</div>
            </div>
            <div className="flex flex-col gap-1 pt-1">
                <div className=" text-black text font-bold leading-tight">{time.toString()}</div>
                <div className="  text-zinc-500 text-xs font-medium leading-none">Date of transaction</div>
            </div>
            <div>
                <div className="Amount text-black text-lg font-extrabold leading-normal">{status}</div>
            </div>
        </div>
    )
}