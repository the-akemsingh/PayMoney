import TransactionCard from "./TransactionCard"

export default function TransactionsHistory({ transactions }: {
    transactions: {
        time: Date,
        amount: number,
        status: string,
        provider: string
    }[]
}) {
    if (!transactions.length) {
        return <div>
            <div className="Bg w-96 h-16 p-3 rounded-xl border border-neutral-300 border-opacity-70 flex justify-between">
                <div>
                    <div className="Amount text-black text-lg font-extrabold leading-normal">NO TRANSACTIONS</div>
                    <div className="Title  text-zinc-500 text-sm font-normal leading-tight">Received INR</div>
                </div>
                <div className="flex flex-col gap-1 pt-1">
                    <div className="AmountL  text-black text font-bold leading-tight"> -- </div>
                    <div className="SubtitleL  text-zinc-500 text-xs font-medium leading-none">Date of transaction</div>
                </div>
            </div>
        </div>
    }

    return (
        transactions.map(t => {
            return <TransactionCard time={t.time} amount={t.amount} status={t.status} />
        })
    )
}