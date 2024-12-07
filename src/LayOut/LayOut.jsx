
import Header from "../Shared/Header";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer";

const LayOut = () => {
  return (
    <>
      <div className="bg-body_bg max-w-[375px] h-screen md:max-h-[667px] md:h-[667px] border-0 rounded-none  md:border-[6px] md:border-[#333] mx-auto md:my-[50px] md:rounded-[20px] shadow-custom relative overflow-hidden">
       <div className="">
       <Header />
       </div>
        <div className="h-full pb-6 overflow-y-auto scrollbar-hide bg-[#f4f8fa] justify-content-center">
          <Outlet />
        </div>
        <div className="absolute bottom-0 left-0 z-10 w-full bg-white">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LayOut;
