export default function MenuBar() {
    return (
        <div className=" pt-11  pl-5 h-full">

            <div className="w-full p-4 bg-white border border-gray-200  rounded-lg dark:bg-purple-700 dark:border-gray-700 ">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-5xl leading-none text-gray-900 dark:text-white">Things to do here</h5>
                </div>
                <div className="flow-root ">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <a href="/option/addMoney" className="flex-1 min-w-0 ms-4  p-4 hover:bg-purple-800  rounded-lg transition-colors duration-200">
                                    <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                                        Add Money
                                    </p>
                                    <p className="text-xl text-gray-500 truncate dark:text-gray-400">
                                        Add money to your Paymoney wallet
                                    </p>
                                </a>

                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <a href="/option/balance" className="flex items-center  p-4 hover:bg-purple-800  rounded-lg transition-colors duration-200">
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                                        Balance
                                    </p>
                                    <p className="text-xl text-gray-500 truncate dark:text-gray-400">
                                        Check your balance
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li className="py-3 sm:py-4">
                            <a href="/option/p2p" className="flex items-center  p-4 hover:bg-purple-800  rounded-lg transition-colors duration-200">
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                                        P2P Transfer
                                    </p>
                                    <p className="text-xl text-gray-500 truncate dark:text-gray-400">
                                        Send money to phone number
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li className="py-3 sm:py-4">
                            <a href="/option/transactions" className="flex items-center  p-4 hover:bg-purple-800   rounded-lg transition-colors duration-200">
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                                        Transactions
                                    </p>
                                    <p className="text-xl text-gray-500 truncate dark:text-gray-400">
                                        Transaction history
                                    </p>
                                </div>
                            </a>
                        </li>


                    </ul>
                </div>
            </div>

        </div>
    )
}