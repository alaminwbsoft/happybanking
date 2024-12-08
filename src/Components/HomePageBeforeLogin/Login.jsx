import { FaPhone, FaLock } from "react-icons/fa6";
import { Link } from "react-router";
import TopBar from "../../Shared/TopBar";

const Login = () => {
  return (
    <>
      <div className="mt-1">
        <TopBar />
      </div>
      <div className="flex flex-col items-center justify-center content-center mt-64 md:mt-36 bg-gray-100 mx-3">
        <div className="bg-white shadow-md rounded px-4 pt-2 pb-8 mb-4 max-w-sm w-full">
          <h2 className="text-center text-2xl font-bold text-[#F7961D]">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="mobile"
                className="block text-gray-700 text-sm font-bold mb-2"
              ></label>
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
              ></label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="shadow appearance-none border rounded w-full py-2 pl-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                />
                <span className="absolute inset-y-0 left-0 flex items-center px-2 text-gray-500  bg-gray-200">
                  <FaLock />
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer">
                  👁️
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm text-gray-700">
                <input type="checkbox" className="mr-2 leading-tight" />
                Remember me
              </label>
              <a href="#" className="text-sm text-[#F7961D] hover:underline">
                Forgot Password
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#F7961D] hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#F7961D] hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
