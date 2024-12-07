
import SubNavbar from "../Components/SubNavbar";
import { useState } from "react";
import { FaCoins, FaExclamationTriangle, FaPiggyBank } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";


const MFSToMFSPayment = () => {
    const [selectedTab, setSelectedTab] = useState('ownAccount')

    const handleTabClick = (tab) => {
        setSelectedTab(tab)
    }
    return (
        <div>
            <SubNavbar></SubNavbar>
            <div className="mx-3 mt-4">
                <div className="flex items-center justify-between gap-2">
                    <button onClick={() => handleTabClick('ownAccount')}
                        className={`  w-full text-white rounded p-[7px] font-semibold ${selectedTab === 'ownAccount' ? 'primaryBgColor' : 'bg-[#adadad]'}`}
                    >
                        Own Account
                    </button>
                    <button onClick={() => handleTabClick('beneficiaryAccount')}
                        className={`  w-full text-white rounded p-[7px] font-semibold ${selectedTab === 'beneficiaryAccount' ? 'primaryBgColor' : 'bg-[#adadad]'}`}
                    >
                        Beneficiary Account
                    </button>
                </div>
                <div>
                    {selectedTab === 'ownAccount' && <div>

                        <div className="p-2 my-4 bg-white border rounded shadow-lg">
                            <div className="flex items-center justify-between">
                                <img className="w-[60px]" src="https://happybanking.org/backend/uploads/mobileWalletImage/thumbnail/1700046026.png" alt="" />
                                <div>
                                    <h2>BKash</h2>
                                    <p className="text-[14px]">Bank: BKash</p>
                                </div>
                            </div>
                            <hr className=" border-[#6f6f6fde] my-2" />
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="mb-2 text-[#a9a6a6] font-medium text-[14px]">Balance</h2>
                                    <p className="text-[14px]">22300 BDT</p>
                                </div>
                                <div>
                                    <h2 className="mb-2 text-[#a9a6a6] font-medium text-[14px]">A/C Number:</h2>
                                    <p className="text-[14px]">01774444000</p>
                                </div>

                            </div>
                            <hr className=" border-[#6f6f6fde] my-2" />
                        </div>
                        <div className="p-2 my-4 bg-white border rounded shadow-lg">
                            <form className="space-y-6">

                                <div className="space-y-2">
                                    <label htmlFor="wallet" className="block text-sm font-medium text-gray-700">
                                        Mobile Wallet <span className="text-red-500">(required)</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-0 -translate-y-1/2 pointer-events-none h-full top-5 rounded-l bg-[#ececec] flex items-center justify-center px-2 border-r-2">
                                            <FaPiggyBank className="w-5 h-5 text-[#666666] " />
                                        </div>
                                        <select
                                            id="wallet"
                                            className="w-full pl-10 pr-8 h-[42px] bg-white border border-gray-200 rounded focus:outline-none cursor-pointer"
                                            required
                                        >
                                            <option value="" disabled selected>Select Mobile Wallet</option>
                                            <option value="bkash">bKash</option>
                                            <option value="nagad">Nagad</option>
                                            <option value="rocket">Rocket</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="account" className="block text-sm font-medium text-gray-700">
                                        Account <span className="text-red-500">(required)</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-0 -translate-y-1/2 pointer-events-none h-full top-5 rounded-l bg-[#ececec] flex items-center justify-center px-2 border-r-2">
                                            <FaCoins className="w-5 h-5 text-[#666666]" />
                                        </div>
                                        <select
                                            id="account"
                                            className="w-full pl-10 pr-8 h-[42px] bg-white border border-gray-200 rounded focus:outline-none"
                                            required
                                        >
                                            <option value="" disabled selected>Select Account</option>
                                            <option value="account1">Account 1</option>
                                            <option value="account2">Account 2</option>
                                            <option value="account3">Account 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="pace-y-2 ">
                                    <label htmlFor="processing-fee" className="block text-sm font-medium text-gray-700">
                                        Amount<span className="text-red-500"> (required)</span>
                                    </label>

                                    <div className="relative">
                                        <div className="absolute left-0 -translate-y-1/2 pointer-events-none h-full top-5 rounded-l bg-[#ececec] flex items-center justify-center px-2 border-r-2">
                                            <FaBangladeshiTakaSign className="w-5 h-5 text-[#666666] " />
                                        </div>
                                        <input
                                            id="amount"
                                            type="number"
                                            min="0.01"
                                            step="0.01"
                                            placeholder="Enter Amount"
                                            required
                                            className="w-full h-[42px] bg-white border border-gray-200 rounded pl-10 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="processing-fee" className="block text-sm font-medium text-gray-700">
                                        Processing Fee (In Taka) <span className="text-red-500">(required)</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-0 -translate-y-1/2 pointer-events-none h-full top-5 rounded-l bg-[#ececec] flex items-center justify-center px-2 border-r-2">
                                            <FaBangladeshiTakaSign className="w-5 h-5 text-[#666666] " />
                                        </div>
                                        <input
                                            id="processing-fee"
                                            type="number"
                                            min="0.01"
                                            step="0.01"
                                            placeholder="Processing Fee"
                                            required
                                            className="w-full h-[42px] bg-white border border-gray-200 rounded pl-10 focus:outline-none"
                                        />
                                    </div>
                                </div>


                                <div className="space-y-2">
                                    <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                                        Note <span className="text-red-500">(required)</span>
                                    </label>
                                    <textarea
                                        id="note"
                                        placeholder="Write Note"
                                        required
                                        className="w-full min-h-[100px] bg-white border border-gray-200 rounded pl-3 pt-2 focus:outline-none"
                                    ></textarea>
                                </div>

                                <div className="flex items-start p-4 space-x-2 border rounded bg-[#e5f1ff]">
                                    <FaExclamationTriangle className="text-2xl font-semibold primaryColor" />
                                    <div className="font-medium">
                                        <p>* No Transaction Fee</p>
                                        <p>* Each Transaction 30,000.00 BDT (Max) 100.00 BDT (Min)</p>
                                        <p>* Each Total Amount 500,000.00 BDT (Max) Single Day Transaction</p>
                                    </div>
                                </div>
                                <button type="submit" className="primaryBtn">Transfer Money</button>
                            </form>
                        </div>


                    </div>}
                    {selectedTab === 'beneficiaryAccount' && <div>

                        <div className="p-2 my-4 bg-white border rounded shadow-lg">
                            <div className="flex items-center justify-between">
                                <img className="w-[60px]" src="https://happybanking.org/backend/uploads/mobileWalletImage/thumbnail/1700046026.png" alt="" />
                                <div>
                                    <h2>BKash</h2>
                                    <p className="text-[14px]">Bank: BKash</p>
                                </div>
                            </div>
                            <hr className=" border-[#6f6f6fde] my-2" />
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="mb-2 text-[#a9a6a6] font-medium text-[14px]">Balance</h2>
                                    <p className="text-[14px]">22300 BDT</p>
                                </div>
                                <div>
                                    <h2 className="mb-2 text-[#a9a6a6] font-medium text-[14px]">A/C Number:</h2>
                                    <p className="text-[14px]">01774444000</p>
                                </div>

                            </div>
                            <hr className=" border-[#6f6f6fde] my-2" />
                        </div>
                        <div className="p-2 my-4 bg-white border rounded shadow-lg">
                            <form className="space-y-6">

                                <div className="space-y-2">
                                    <label htmlFor="wallet" className="block text-sm font-medium text-gray-700">
                                        Mobile Wallet <span className="text-red-500">(required)</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-0 -translate-y-1/2 pointer-events-none h-full top-5 rounded-l bg-[#ececec] flex items-center justify-center px-2 border-r-2">
                                            <FaPiggyBank className="w-5 h-5 text-[#666666] " />
                                        </div>
                                        <select
                                            id="wallet"
                                            className="w-full pl-10 pr-8 h-[42px] bg-white border border-gray-200 rounded focus:outline-none cursor-pointer"
                                            required
                                        >
                                            <option value="" disabled selected>Select Mobile Wallet</option>
                                            <option value="bkash">bKash</option>
                                            <option value="nagad">Nagad</option>
                                            <option value="rocket">Rocket</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="account" className="block text-sm font-medium text-gray-700">
                                        Account <span className="text-red-500">(required)</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-0 -translate-y-1/2 pointer-events-none h-full top-5 rounded-l bg-[#ececec] flex items-center justify-center px-2 border-r-2">
                                            <FaCoins className="w-5 h-5 text-[#666666]" />
                                        </div>
                                        <select
                                            id="account"
                                            className="w-full pl-10 pr-8 h-[42px] bg-white border border-gray-200 rounded focus:outline-none"
                                            required
                                        >
                                            <option value="" disabled selected>Select Account</option>
                                            <option value="account1">Account 1</option>
                                            <option value="account2">Account 2</option>
                                            <option value="account3">Account 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="pace-y-2 ">
                                    <label htmlFor="processing-fee" className="block text-sm font-medium text-gray-700">
                                        Amount<span className="text-red-500"> (required)</span>
                                    </label>

                                    <div className="relative">
                                        <div className="absolute left-0 -translate-y-1/2 pointer-events-none h-full top-5 rounded-l bg-[#ececec] flex items-center justify-center px-2 border-r-2">
                                            <FaBangladeshiTakaSign className="w-5 h-5 text-[#666666] " />
                                        </div>
                                        <input
                                            id="amount"
                                            type="number"
                                            min="0.01"
                                            step="0.01"
                                            placeholder="Enter Amount"
                                            required
                                            className="w-full h-[42px] bg-white border border-gray-200 rounded pl-10 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="processing-fee" className="block text-sm font-medium text-gray-700">
                                        Processing Fee (In Taka) <span className="text-red-500">(required)</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-0 -translate-y-1/2 pointer-events-none h-full top-5 rounded-l bg-[#ececec] flex items-center justify-center px-2 border-r-2">
                                            <FaBangladeshiTakaSign className="w-5 h-5 text-[#666666] " />
                                        </div>
                                        <input
                                            id="processing-fee"
                                            type="number"
                                            min="0.01"
                                            step="0.01"
                                            placeholder="Processing Fee"
                                            required
                                            className="w-full h-[42px] bg-white border border-gray-200 rounded pl-10 focus:outline-none"
                                        />
                                    </div>
                                </div>


                                <div className="space-y-2">
                                    <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                                        Note <span className="text-red-500">(required)</span>
                                    </label>
                                    <textarea
                                        id="note"
                                        placeholder="Write Note"
                                        required
                                        className="w-full min-h-[100px] bg-white border border-gray-200 rounded pl-3 pt-2 focus:outline-none"
                                    ></textarea>
                                </div>

                                <div className="flex items-start p-4 space-x-2 border rounded bg-[#e5f1ff]">
                                    <FaExclamationTriangle className="text-2xl font-semibold primaryColor" />
                                    <div className="font-medium">
                                        <p>* No Transaction Fee</p>
                                        <p>* Each Transaction 30,000.00 BDT (Max) 100.00 BDT (Min)</p>
                                        <p>* Each Total Amount 500,000.00 BDT (Max) Single Day Transaction</p>
                                    </div>
                                </div>
                                <button type="submit" className="primaryBtn">Transfer Money</button>
                            </form>
                        </div>


                    </div>}
                </div>
            </div>
        </div>
    );
};

export default MFSToMFSPayment;