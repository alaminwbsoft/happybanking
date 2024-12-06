import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaWallet } from "react-icons/fa";
import { IoFemale, IoMale } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";

import { FaPhone, FaEnvelope, FaUser, FaBriefcase } from "react-icons/fa6";
import { Link } from "react-router";
import TopBar from "../../Shared/TopBar";

const Register = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const handleSelectGender = (gender) => {
    setSelectedGender(gender);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => setIsOpen(true);
  const handleBlur = () => setIsOpen(false);

  const [balance, setBalance] = useState(0);

  const incrementBalance = () => setBalance((prev) => prev + 1);
  const decrementBalance = () =>
    setBalance((prev) => (prev > 0 ? prev - 1 : 0)); // Prevent negative balance
  return (
    <>
      <div className="mt-1">
        <div className="mt-1">
          <TopBar />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center content-center mt-2 bg-gray-100 mx-3">
        <div className="bg-white shadow-md rounded px-4 pt-2 pb-8 mb-4 max-w-sm w-full">
          <h2 className="text-center text-2xl font-bold text-orange-500">
            Registration
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="mobile"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name<span className="text-red-500">(required)</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="mobile"
                  className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Name"
                />
                <span className="absolute inset-y-0 left-0 flex items-center px-2 text-gray-500  bg-gray-200">
                  <FaUser />
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="mobile"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Mobile<span className="text-red-500">(required)</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="mobile"
                  className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Mobile"
                />
                <span className="absolute inset-y-0 left-0 flex items-center px-2 text-gray-500  bg-gray-200">
                  <FaPhone />
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email<span className="text-red-500">(required)</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 pl-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                />
                <span className="absolute inset-y-0 left-0 flex items-center px-2 text-gray-500  bg-gray-200">
                  <FaEnvelope />
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Gender <span className="text-red-500">(required)</span>
              </label>
              <div className="flex items-center justify-between">
                {/* Male Button */}
                <button
                  onClick={() => handleSelectGender("male")}
                  className={`border text-center rounded-md px-10 py-1.5 flex items-center gap-2 ${
                    selectedGender === "male"
                      ? "bg-orange-500 text-white"
                      : "border-orange-500 text-orange-500"
                  }`}
                >
                  <IoMale /> Male
                </button>
                {/* Female Button */}
                <button
                  onClick={() => handleSelectGender("female")}
                  className={`border text-center rounded-md px-8 py-1.5 flex items-center gap-2 ${
                    selectedGender === "female"
                      ? "bg-orange-500 text-white"
                      : "border-orange-500 text-orange-500"
                  }`}
                >
                  <IoFemale /> Female
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="profession"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Profession <span className="text-red-500">(required)</span>
              </label>
              <div className="relative">
                <select
                  id="profession"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="shadow appearance-none border rounded w-full py-2 pl-10 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="" disabled selected>
                    Select Profession
                  </option>
                  <option value="banker">Banker</option>
                  <option value="doctor">Doctor</option>
                  <option value="engineer">Engineer</option>
                  <option value="teacher">Teacher</option>
                  <option value="artist">Artist</option>
                </select>
                {/* Left Icon */}
                <span className="absolute inset-y-0 left-0 flex items-center px-2 bg-gray-200 border-r">
                  <FaBriefcase className="text-gray-500" />
                </span>
                {/* Right Toggle Icons */}
                <span className="absolute inset-y-0 right-0 flex items-center px-2">
                  {isOpen ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="wallet-balance"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Wallet Balance <span className="text-red-500">(required)</span>
              </label>
              <div className="relative">
                <input
                  id="wallet-balance"
                  type="text"
                  value={balance}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 pl-10 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {/* Left Icon */}
                <span className="absolute inset-y-0 left-0 flex items-center px-2 bg-gray-200 border-r">
                  <FaWallet className="text-gray-500" />
                </span>
                {/* Right Icons */}
                <div className="absolute inset-y-0 right-0 flex flex-col justify-center items-center bg-gray-200 border-l">
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-700 px-2"
                    onClick={incrementBalance}
                  >
                    <FaChevronUp />
                  </button>
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-700 px-2"
                    onClick={decrementBalance}
                  >
                    <FaChevronDown />
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="mobile"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password<span className="text-red-500">(required)</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="mobile"
                  className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                />
                <span className="absolute inset-y-0 left-0 flex items-center px-2 text-gray-500 bg-gray-200">
                  <FaLock />
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-200 cursor-pointer">
                  👁️
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="mobile"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirm Password<span className="text-red-500">(required)</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="mobile"
                  className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=" Confirm Password"
                />
                <span className="absolute inset-y-0 left-0 flex items-center px-2 text-gray-500  bg-gray-200">
                  <FaLock />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm text-gray-700">
                <input type="checkbox" className="mr-2 leading-tight" />
                Agree with
              </label>
              <a href="#" className="text-sm text-orange-500 hover:underline">
                Terms & Conditions
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Registration
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/register" className="text-orange-500 hover:underline">
              login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
