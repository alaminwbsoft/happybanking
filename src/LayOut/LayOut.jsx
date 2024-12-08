// import { Outlet } from "react-router";

// import NavMenuAfterLogin from "../Shared/NavMenuAfterLogin";
// import NavMenuBeforeLogin from "../Shared/NavMenuBeforeLogin";



// const LayOut = () => {
//   return (
//     <>
//       <div className="bg-body_bg max-w-[375px] h-screen md:max-h-[667px] md:h-[667px] border-0 rounded-none md:border-[6px] md:border-[#333] mx-auto md:my-[50px] md:rounded-[20px] shadow-custom relative overflow-hidden">
//         <div className="h-full pb-2 overflow-y-auto scrollbar-hide bg-[#f4f8fa] justify-content-center">
//           <Outlet />
//         </div>
//         <div className="absolute bottom-0 left-0 z-10 w-full bg-white">
//          <NavMenuBeforeLogin/>
//          <NavMenuAfterLogin/>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LayOut;

import { Outlet } from "react-router";
import { useState, useEffect } from "react";

import NavMenuAfterLogin from "../Shared/NavMenuAfterLogin";
import NavMenuBeforeLogin from "../Shared/NavMenuBeforeLogin";

const LayOut = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate login status check
  useEffect(() => {
    // Replace with your actual login status check logic
    const userLoggedIn = checkUserLoginStatus();
    setIsLoggedIn(userLoggedIn);
  }, []);

  const checkUserLoginStatus = () => {
    // Example logic: Replace this with actual token or session validation
    return localStorage.getItem("userToken") ? true : false;
  };

  return (
    <>
      <div className="bg-body_bg max-w-[375px] h-screen md:max-h-[667px] md:h-[667px] border-0 rounded-none md:border-[6px] md:border-[#333] mx-auto md:my-[50px] md:rounded-[20px] shadow-custom relative overflow-hidden">
        <div className="h-full pb-2 overflow-y-auto scrollbar-hide bg-[#f4f8fa] justify-content-center">
          <Outlet />
        </div>
        <div className="absolute bottom-0 left-0 z-10 w-full bg-white">
          {isLoggedIn ? <NavMenuAfterLogin /> : <NavMenuBeforeLogin />}
        </div>
      </div>
    </>
  );
};
export default LayOut;

