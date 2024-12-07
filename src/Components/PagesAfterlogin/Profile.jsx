import { FaChevronRight } from "react-icons/fa";
import SubNavbar from "../Components/SubNavbar";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const navigate = useNavigate();
    const handleMFS = ()=>{
        navigate('/mfs')
    }
    const handleAccount = ()=>{
        navigate('/bank')
    }
    const handleCredit = ()=>{
        navigate('/card')
    }
    return (
        <div>
            <SubNavbar></SubNavbar>
            <div className="flex gap-4 p-2 mx-3 my-4 bg-white border rounded shadow-lg">
                <div className="w-[32%] border border-blue-500 rounded">
                    <img className="rounded" src="https://happybanking.org/frontend/images/user.jpg" alt="" />
                </div>
                <div className="text-[14px]">
                    <h2 className="text-xl font-medium">Dhrubo Jyoti Das</h2>
                    <p>01774444000</p>
                    <p>Male</p>
                    <p>Banker</p>
                </div>
            </div>
            <div className="p-2 mx-3 my-4 bg-white border rounded shadow-lg">
                <div onClick={handleMFS} className="flex items-center justify-between cursor-pointer">
                    <h2 className="text-xl font-medium">MFS Service</h2>
                    <FaChevronRight />
                </div>
                <hr className=" border-[#dee2e6] mx-2 my-2" />
                <div onClick={handleAccount} className="flex items-center justify-between cursor-pointer">
                    <h2 className="text-xl font-medium">Account Service</h2>
                    <FaChevronRight />
                </div>
                <hr className=" border-[#dee2e6] mx-2 my-2" />
                <div onClick={handleCredit} className="flex items-center justify-between cursor-pointer">
                    <h2 className="text-xl font-medium"> Credit Card Service</h2>
                    <FaChevronRight />
                </div>
            </div>
            <div className="p-2 mx-3 my-4 bg-white border rounded shadow-lg">
                <div className="flex items-center justify-between cursor-pointer">
                    <h2 className="text-xl font-medium">Transfer Revert</h2>
                    <FaChevronRight />
                </div>
                <hr className=" border-[#dee2e6] mx-2 my-2" />
                <div className="flex items-center justify-between cursor-pointer">
                    <h2 className="text-xl font-medium">Income Expense Revert</h2>
                    <FaChevronRight />
                </div>
            </div>
            <div className="p-2 mx-3 my-4 bg-white border rounded shadow-lg">
                <div className="flex items-center justify-between cursor-pointer">
                    <h2 className="text-xl font-medium">Change your info</h2>
                    <FaChevronRight />
                </div>
                <hr className=" border-[#dee2e6] mx-2 my-2" />
                <div className="flex items-center justify-between cursor-pointer">
                    <h2 className="text-xl font-medium">Change your Mobile</h2>
                    <FaChevronRight />
                </div>
                <hr className=" border-[#dee2e6] mx-2 my-2" />
                <div className="flex items-center justify-between cursor-pointer">
                    <h2 className="text-xl font-medium"> Change your Password</h2>
                    <FaChevronRight />
                </div>
                <hr className=" border-[#dee2e6] mx-2 my-2" />
                <div className="flex items-center justify-between text-[#dd3f45] cursor-pointer">
                    <h2 className="text-xl font-medium"> Logout</h2>
                    <FaChevronRight />
                </div>
            </div>
        </div>
    );
};

export default Profile;