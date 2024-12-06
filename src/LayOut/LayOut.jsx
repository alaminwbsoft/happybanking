import React from "react";
import Header from "../Shared/Header";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer";

const LayOut = () => {
  return (
    <>
      <div className="bg-body_bg  border-[6px] border-gray-950 rounded-2xl mx-auto mt-6">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default LayOut;
