import { CiCircleCheck } from "react-icons/ci";
import SubNavbar from "../Components/SubNavbar";
import { FaUserLarge } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const TransactionHistory = () => {
    const navigate = useNavigate();
    const handleGoBackHome = ()=>{
        navigate('/')
    }
    return (
        <div>
            <SubNavbar></SubNavbar>
            <div className="mx-3">
                <div className="p-2 my-4 border rounded shadow-lg">
                    <div className="flex gap-1 mb-4">
                        <h2 className="text-xl font-medium primaryColor">Your Transaction Is </h2><div className="flex items-center gap-1 font-medium">
                            <span className=" text-xl text-[#198754]"> Successful </span>
                            <span className="text-xl text-[#198754] font-bold"><CiCircleCheck /></span>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 mb-4">
                        <div className="mt-1">
                            <FaUserLarge className="primaryColor"></FaUserLarge>
                        </div>
                        <div>
                            <h2 className="font-bold text-[#00000096]">Dhrubo Jyoti Das</h2>
                            <p className="text-[14px]"> Transaction Id : 8583239973</p>

                            <p className="text-[14px]">Type : Wallet To MFS Transfer</p>
                        </div>
                    </div>
                    <hr />
                    <div className="my-4">
                        <table className="min-w-full bg-white border border-collapse border-gray-300 rounded">
                            <tbody>
                                <tr>
                                    <td className="w-1/2 p-2 border">

                                        <h2 className="text-[#00000096] font-bold"> From</h2>
                                        <p> 01774444000</p>
                                        <p className="primaryColor text-[14px]"> Wallet</p>
                                    </td>
                                    <td className="w-1/2 p-2 border">

                                        <h2 className="text-[#00000096] font-bold"> To</h2>
                                        <p> 01774444000</p>
                                        <p className="primaryColor text-[14px]">bKash</p>

                                    </td>

                                </tr>
                                <tr>
                                    <td className="w-1/2 p-2 border">
                                        <h2 className="text-[#00000096] font-bold"> Transfer Balance</h2>
                                        <p> 2000 BDT</p>
                                    </td>
                                    <td className="w-1/2 p-2 border">
                                    <h2 className="text-[#00000096] font-bold"> 
                                        Amount: <span className="font-normal">2000 BDT</span>
                                    </h2> 
                                    <h2 className="text-[#00000096] font-bold"> 
                                        Fee: <span className="font-normal">0.00 BDT</span>
                                    </h2> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 p-2 border">
                                    <h2 className="text-[#00000096] font-bold">Notes</h2>
                                        <p>jhyu</p>
                                    </td>
                                    <td className="w-1/2 p-2 border">
                                    <h2 className="text-[#00000096] font-bold"> 
                                        Date: <span className="font-normal">15-11-2023</span>
                                    </h2> 
                                    <h2 className="text-[#00000096] font-bold"> 
                                        Time: <span className="font-normal">05:04</span>
                                    </h2> 
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button onClick={handleGoBackHome} className="flex items-center justify-center gap-1 primaryBtn">Back To Home <FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;