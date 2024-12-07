import { FaArrowRight } from "react-icons/fa";
import SubNavbar from "../Components/SubNavbar";
import { useNavigate } from "react-router-dom";

const Transfer = () => {
    const navigate = useNavigate();
    const handleMFSToMFSPayment = ()=>{
        navigate('/mfsToMfsPayment')
    }
    return (
        <div>
            <SubNavbar></SubNavbar>
            <div className="p-4 mx-3 my-4 space-y-2 bg-white border rounded shadow-lg">
                <h2 className="text-2xl mb-4 font-medium text-[#6c757d] text-center">Select Payment Type</h2>
                <button onClick={handleMFSToMFSPayment} className="flex items-center justify-between primaryBtn">MFS To MFS <FaArrowRight className="p-1 text-xl bg-white rounded-full primaryColor"/></button>
                <button className="flex items-center justify-between primaryBtn">MFS To Bank <FaArrowRight className="p-1 text-xl bg-white rounded-full primaryColor"/></button>
                <button className="flex items-center justify-between primaryBtn">MFS To Wallet <FaArrowRight className="p-1 text-xl bg-white rounded-full primaryColor"/></button>
            </div>
        </div>
    );
};

export default Transfer;