import { FaMobileAlt, FaRegCreditCard } from "react-icons/fa";
import { FaBuildingColumns, FaHouse, FaUserLarge } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-around gap-2 mt-[10px] pb-1 shadow-top-only pt-3 rounded-b-[20px]">
            <NavLink
                to={'/'} className={({ isActive, isPending }) => isActive ? "primaryColor text-[14px]" : isPending ? "pending" : "text-[14px]"}>
                <span className="flex flex-col items-center justify-center"><FaHouse className="text-[18px]" /> Home</span>
            </NavLink>
            <NavLink
                to={'/mfs'} className={({ isActive, isPending }) => isActive ? "primaryColor text-[14px]" : isPending ? "pending" : "text-[14px]"}>
                <span className="flex flex-col items-center justify-center"><FaMobileAlt className="text-[18px]" /> MFS</span>
            </NavLink>
            <NavLink
                to={'/bank'} className={({ isActive, isPending }) => isActive ? "primaryColor text-[14px]" : isPending ? "pending" : "text-[14px]"}>
                <span className="flex flex-col items-center justify-center">   <FaBuildingColumns className="text-[18px]"/> Bank</span>
            </NavLink>
            <NavLink
                to={'/card'} className={({ isActive, isPending }) => isActive ? "primaryColor text-[14px]" : isPending ? "pending" : "text-[14px]"}>
                <span className="flex flex-col items-center justify-center"> <FaRegCreditCard className="text-[18px]"/> Card</span>
            </NavLink>
            <NavLink
                to={'/profile'} className={({ isActive, isPending }) => isActive ? "primaryColor text-[14px]" : isPending ? "pending" : "text-[14px]"}>
                <span className="flex flex-col items-center justify-center"><FaUserLarge className="text-[18px]" /> Profile</span>
            </NavLink>
        </div>
    );
};

export default Navbar;