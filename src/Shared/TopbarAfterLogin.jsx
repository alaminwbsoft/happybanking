import { FaBell, FaEnvelopeOpenText } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";


const TopbarAfterLogin = () => {
    return (
        <div className="flex gap-4 bg-[#F7961D] px-[15px] py-[10px] rounded-t-[14px] items-center">
                <span><FaHouse className="text-xl text-white" /></span>
                <img className="w-[180px] mx-6" src="https://happybanking.org/frontend/images/Untitled-4.png" alt="logo" />
                <div className="relative">
                    <span className="absolute font-bold text-white -right-[7px] -top-1 text-[11px]">0</span>
                    <FaEnvelopeOpenText className="text-xl text-white" />
                </div>
                <div className="relative">
                    <span className="absolute font-bold text-white left-0 -top-1 text-[11px] bg-[#6495ed] px-[5px]">0</span>
                    <FaBell className="text-[24px] text-white" />
                </div>
            </div>
    );
};

export default TopbarAfterLogin;