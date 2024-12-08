// import Login from "./Login";
import { FaAddressCard, FaBookReader, FaCalculator, FaCashRegister, FaImages, FaMobileAlt, FaMoneyBill, FaPercentage, FaRegCreditCard } from "react-icons/fa";
import { FaBuildingColumns, FaMoneyCheckDollar } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
const Home = () => {
  
  const handleTransaction = ()=>{
      navigate('/transaction')
  }
  const handleMFS = ()=>{
      navigate('/mfs')
  }
  const handleAccount = ()=>{
      navigate('/bank')
  }
  const handleCredit = ()=>{
      navigate('/card')
  }
  const handleIncomeMFS = ()=>{
      navigate('/mfsToMfsPayment')
  }
  const handleAbout = ()=>{
      navigate('/about')
  }
  const handleTransfer = ()=>{
      navigate('/pocketToBank')
  }
  return (
    <>
        <div>
         
         <div className="mx-3 ">
             <div className="flex justify-between gap-2  p-2 mt-4 bg-white border rounded-md shadow-md">
                 <div className="flex-1 pr-3 border-r border-[#212529] space-y-2">
                     <h2 className="text-[#6c757d] text-2xl font-medium text-center">Wallet</h2>
                     <div className="flex items-center gap-2">
                         <FaImages className="text-[#6c757d] text-[22px] font-extrabold" />
                         <span>Current Balance</span>
                     </div>
                     <h2 className="text-2xl text-[#198754] text-center">2900Tk</h2>
                     <button onClick={handleTransaction} className="primaryBtn">Transaction</button>
                 </div>
                 <div className="flex-1 space-y-2">
                     <h2 className="text-[#6c757d] text-2xl font-medium text-center">Transfer To</h2>
                     <button onClick={handleTransfer} className="primaryBtn">MFS</button>
                     <hr className=" border-[#6f6f6fde]" />
                     <button onClick={handleTransfer} className="primaryBtn">Account</button>
                     <hr className=" border-[#6f6f6fde]" />
                     <button onClick={handleTransfer} className="primaryBtn">Card</button>
                 </div>
             </div>

             {/* My Accounts section */}
             <div className="mt-2">
                 <h2 className="text-[#6c757d] text-2xl font-medium">My Accounts</h2>
                 <div className="flex justify-between border rounded shadow-lg p-[10px] mt-1 bg-white gap-2">
                     <div onClick={handleMFS} className="flex-1 py-1 border-r cursor-pointer">
                         <span className="flex flex-col gap-2 items-center justify-center font-medium text-[12px] "><FaMobileAlt className="text-2xl font-semibold primaryColor" /> MFS</span>
                     </div>
                     <div onClick={handleAccount} className="flex-1 py-1 border-r cursor-pointer">
                         <span className="flex gap-2 flex-col items-center justify-center font-medium text-[12px]">   <FaBuildingColumns className="text-2xl font-semibold primaryColor" /> Bank</span>
                     </div>
                     <div onClick={handleCredit} className="flex-1 py-1 cursor-pointer ">
                         <span className="flex gap-2 flex-col items-center justify-center font-medium text-[12px]"> <FaRegCreditCard className="text-2xl font-semibold primaryColor" />Credit Card</span>
                     </div>
                 </div>
             </div>
             {/* Income section */}
             <div className="mt-2">
                 <h2 className="text-[#6c757d] text-2xl font-medium">Income</h2>
                 <div className="flex justify-between gap-2 border rounded shadow-lg p-[10px] mt-1 bg-white">
                     <div className="flex-1 py-1 border-r">
                         <span className="flex flex-col gap-2 items-center justify-center font-medium text-[12px] "><FaMoneyBill className="text-2xl font-semibold primaryColor" /> Wallet</span>
                     </div>
                     <div onClick={handleIncomeMFS} className="flex-1 py-1 border-r">
                         <span className="flex gap-2 flex-col items-center justify-center font-medium text-[12px]">   <FaMobileAlt className="text-2xl font-semibold primaryColor" /> MFS</span>
                     </div>
                     <div onClick={handleIncomeMFS} className="flex-1 py-1 ">
                         <span className="flex gap-2 flex-col items-center justify-center font-medium text-[12px]"> <FaBuildingColumns className="text-2xl font-semibold primaryColor" /> Bank</span>
                     </div>
                 </div>
             </div>
             {/* Expense section */}
             <div className="mt-2">
                 <h2 className="text-[#6c757d] text-2xl font-medium">Expense</h2>
                 <div className="flex justify-between gap-2 border rounded shadow-lg p-[10px] mt-1 bg-white">
                     <div className="flex-1 py-1 border-r">
                         <span className="flex flex-col gap-2 items-center justify-center font-medium text-[12px] "><FaMoneyBill className="text-2xl font-semibold primaryColor" /> Wallet</span>
                     </div>
                     <div className="flex-1 py-1 border-r">
                         <span className="flex gap-2 flex-col items-center justify-center font-medium text-[12px]">   <FaMobileAlt className="text-2xl font-semibold primaryColor" /> MFS</span>
                     </div>
                     <div className="flex-1 py-1 border-r">
                         <span className="flex gap-2 flex-col items-center justify-center font-medium text-[12px]">   <FaBuildingColumns className="text-2xl font-semibold primaryColor" /> Bank</span>
                     </div>
                     <div className="flex-1 py-1 ">
                         <span className="flex gap-2 flex-col items-center justify-center font-medium text-[12px]"> <FaRegCreditCard className="text-2xl font-semibold primaryColor" />Credit Card</span>
                     </div>
                 </div>
             </div>
             {/* Beneficiary section */}
             <div className="mt-2">
                 <h2 className="text-[#6c757d] text-2xl font-medium">Beneficiary</h2>
                 <div className="flex justify-between gap-2 border rounded shadow-lg p-[10px] mt-1 bg-white">
                     <div className="flex-1 py-1 border-r">
                         <span className="flex flex-col gap-2 items-center justify-center font-medium text-[12px] "><FaMobileAlt className="text-2xl font-semibold primaryColor" /> MFS Beneficiary</span>
                     </div>
                     <div className="flex-1 py-1 ">
                         <span className="flex gap-2 flex-col items-center justify-center font-medium text-[12px]"> <FaBuildingColumns className="text-2xl font-semibold primaryColor" /> Bank Beneficiary</span>
                     </div>
                 </div>
             </div>
             {/* Calculator section */}
             <div className="mt-2">
                 <h2 className="text-[#6c757d] text-2xl font-medium">Calculator</h2>
                 <div className="flex justify-between gap-2 border rounded shadow-lg p-[10px] mt-1 bg-white">
                     <div className="flex-1 py-1 border-r">
                         <span className="flex flex-col gap-2 items-center justify-center font-medium text-[12px] "><FaMoneyCheckDollar className="text-2xl font-semibold primaryColor" /> DBR</span>
                     </div>
                     <div className="flex-1 py-1 border-r">
                         <span className="flex gap-2 flex-col items-center justify-center font-medium text-[12px]">   <FaCashRegister className="text-2xl font-semibold primaryColor" /> Loan EMI</span>
                     </div>
                     <div className="flex-1 py-1 border-r">
                         <span className="flex gap-2 flex-col items-center justify-center font-medium text-[12px]">   <FaCalculator className="text-2xl font-semibold primaryColor" />Card EMI</span>
                     </div>
                     <div className="flex-1 py-1 ">
                         <span className="flex gap-2 flex-col items-center justify-center font-medium text-[12px]"> <FaPercentage className="text-2xl font-semibold primaryColor" /> Trade</span>
                     </div>
                 </div>
             </div>
             {/* Others section */}
             <div className="mt-2 mb-4">
                 <h2 className="text-[#6c757d] text-2xl font-medium">Others</h2>
                 <div className="flex justify-between gap-2 border rounded shadow-lg p-[10px] mt-1 bg-white">
                     <div onClick={handleAbout} className="flex-1 py-1 border-r cursor-pointer">
                         <span className="flex flex-col gap-2 items-center justify-center font-medium text-[12px] "><FaAddressCard className="text-2xl font-semibold primaryColor" />About</span>
                     </div>
                     <div className="flex-1 py-1 ">
                         <span className="flex gap-2 flex-col items-center justify-center font-medium text-[12px]"> <FaBookReader className="text-2xl font-semibold primaryColor" /> Documentation</span>
                     </div>
                 </div>
             </div>
            
         </div>
     </div>
    </>
  );
};

export default Home;
