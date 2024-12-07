// import { useNavigate } from "react-router-dom";



// const Bank = () => {
//     const navigate = useNavigate();
//     const handleTransaction = () =>{
//         navigate('/transaction')
//     }
//     const handleTransfer = () =>{
//         navigate('/transfer')
//     }
//     return (
//         <div>
        
//             <div className="p-2 mx-3 my-4 bg-white border rounded shadow-lg">
//                 <div className="flex items-center justify-between">
//                     <img className="w-[60px]" src="https://happybanking.org/backend/uploads/bankImage/thumbnail/1697109843.jpg" alt="" />
//                     <div>
//                         <h2>UCB</h2>
//                         <p className="text-[14px]">Branch: banani</p>
//                     </div>
//                 </div>
//                 <hr className=" border-[#6f6f6fde] my-2" />
//                 <div className="flex items-center justify-between">
//                     <div>
//                         <h2 className="mb-2 text-[#a9a6a6] font-medium text-[14px]">Balance</h2>
//                         <p className="text-[14px]">30000 BDT</p>
//                     </div>
//                     <div>
//                         <h2 className="mb-2 text-[#a9a6a6] font-medium text-[14px]">A/C Number:</h2>
//                         <p className="text-[14px]">01456</p>
//                     </div>
//                 </div>
//                 <hr className=" border-[#6f6f6fde] my-2" />
//                 <div className="flex justify-between gap-2">
//                     <button onClick={handleTransaction} className="text-center primaryBtn">Transaction</button>
//                     <button onClick={handleTransfer} className="text-center primaryBtn">Transfer</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Bank;