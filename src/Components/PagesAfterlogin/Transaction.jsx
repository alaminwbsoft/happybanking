
import { useNavigate } from "react-router-dom";
import SubNavbar from "../Components/SubNavbar";
import { useState } from "react";


const Transaction = () => {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState('all')

    const handleTabClick = (tab) => {
        setSelectedTab(tab)
    }

    const handleHistory = () => {
        navigate('/transactionHistory')
    }
    return (
        <div>
            <SubNavbar></SubNavbar>
            <div className="mx-3 mt-4">
                <div className="flex items-center justify-between gap-2">
                    <button onClick={() => handleTabClick('all')}
                        className={`  w-full text-white rounded p-[7px] font-semibold ${selectedTab === 'all' ? 'primaryBgColor' : 'bg-[#adadad]'}`}
                    >
                        All
                    </button>
                    <button onClick={() => handleTabClick('credit')}
                        className={`  w-full text-white rounded p-[7px] font-semibold ${selectedTab === 'credit' ? 'primaryBgColor' : 'bg-[#adadad]'}`}
                    >
                        Credit
                    </button>
                    <button onClick={() => handleTabClick('debit')}
                        className={`  w-full text-white rounded p-[7px] font-semibold ${selectedTab === 'debit' ? 'primaryBgColor' : 'bg-[#adadad]'}`}
                    >
                        Debit
                    </button>
                </div>
                <div>
                    {selectedTab === 'all' && <div>
                        <div onClick={handleHistory} className="my-2 bg-white border rounded shadow-lg cursor-pointer ">

                            <div className="p-2">
                                <h2 className="mb-2 primaryColor">Wallet To MFS Transfer</h2>

                                <div className="flex justify-between gap-4">
                                    <div>
                                        <p className="text-[#667078] text-[15px]"><span className="font-semibold ">Tran:</span> 6451865621</p>
                                        <p className="text-[#667078] text-[15px]"><span className="font-semibold ">Date:</span> 22-05-2024</p>
                                        <p className="text-[#667078] text-[15px]"><span className="font-semibold ">Time:</span> 04:03</p>
                                    </div>

                                    <div>
                                        <p className="text-[#667078] text-[15px]"><span className="font-semibold ">Transfer:</span> 100 BDT</p>
                                        <p className="text-[#667078] text-[15px]"> <span className="font-semibold ">Fee:</span> 0 BDT</p>
                                        <p className="text-[#dd3f45] text-[15px] font-bold"> <span className="font-semibold text-[#667078]">Debit:</span> 100 BDT</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="bg-[#f5f5f5] px-2 py-1 text-[#667078] font-semibold">
                                hi
                            </h3>
                        </div>
                        <div onClick={handleHistory} className="my-2 bg-white border rounded shadow-lg cursor-pointer ">

                            <div className="p-2">
                                <h2 className="mb-2 primaryColor">Wallet To MFS Transfer</h2>

                                <div className="flex justify-between gap-4">
                                    <div>
                                        <p className="text-[#667078] text-[15px]"><span className="font-semibold ">Tran:</span>  8583239973</p>
                                        <p className="text-[#667078] text-[15px]"><span className="font-semibold ">Date:</span> 15-11-2023 </p>
                                        <p className="text-[#667078] text-[15px]"><span className="font-semibold ">Time:</span> 05:04
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[#667078] text-[15px]"><span className="font-semibold ">Transfer:</span> 2000 BDT</p>
                                        <p className="text-[#667078] text-[15px]"> <span className="font-semibold ">Fee:</span> 0 BDT</p>
                                        <p className="text-[#dd3f45] text-[15px] font-bold"> <span className="font-semibold text-[#667078]">Debit:</span> 2000 BDT</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="bg-[#f5f5f5] px-2 py-1 text-[#667078] font-semibold">
                                jhyu
                            </h3>
                        </div>


                    </div>}
                    {selectedTab === 'credit' && <div></div>}
                    {selectedTab === 'debit' &&
                        <div>
                            <div onClick={handleHistory} className="my-2 bg-white border rounded shadow-lg cursor-pointer ">

                                <div className="p-2">
                                    <h2 className="mb-2 primaryColor">Wallet To MFS Transfer</h2>

                                    <div className="flex justify-between gap-4">
                                        <div>
                                            <p className="text-[#667078] text-[15px]"><span className="font-semibold ">Tran:</span> 6451865621</p>
                                            <p className="text-[#667078] text-[15px]"><span className="font-semibold ">Date:</span> 22-05-2024</p>
                                            <p className="text-[#667078] text-[15px]"><span className="font-semibold ">Time:</span> 04:03</p>
                                        </div>

                                        <div>
                                            <p className="text-[#667078] text-[15px]"><span className="font-semibold ">Transfer:</span> 100 BDT</p>
                                            <p className="text-[#667078] text-[15px]"> <span className="font-semibold ">Fee:</span> 0 BDT</p>
                                            <p className="text-[#dd3f45] text-[15px] font-bold"> <span className="font-semibold text-[#667078]">Debit:</span> 100 BDT</p>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="bg-[#f5f5f5] px-2 py-1 text-[#667078] font-semibold">
                                    hi
                                </h3>
                            </div>
                            <div onClick={handleHistory} className="my-2 bg-white border rounded shadow-lg cursor-pointer ">

                                <div className="p-2">
                                    <h2 className="mb-2 primaryColor">Wallet To MFS Transfer</h2>

                                    <div className="flex justify-between gap-4">
                                        <div>
                                            <p className="text-[#667078] text-[15px]"><span className="font-semibold ">Tran:</span>  8583239973</p>
                                            <p className="text-[#667078] text-[15px]"><span className="font-semibold ">Date:</span> 15-11-2023 </p>
                                            <p className="text-[#667078] text-[15px]"><span className="font-semibold ">Time:</span> 05:04
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[#667078] text-[15px]"><span className="font-semibold ">Transfer:</span> 2000 BDT</p>
                                            <p className="text-[#667078] text-[15px]"> <span className="font-semibold ">Fee:</span> 0 BDT</p>
                                            <p className="text-[#dd3f45] text-[15px] font-bold"> <span className="font-semibold text-[#667078]">Debit:</span> 2000 BDT</p>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="bg-[#f5f5f5] px-2 py-1 text-[#667078] font-semibold">
                                    jhyu
                                </h3>
                            </div>


                        </div>}
                </div>
            </div>
        </div>
    );
};

export default Transaction;