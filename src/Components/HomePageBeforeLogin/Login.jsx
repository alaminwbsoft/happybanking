import React from "react";
import logo from "../../assets/home/logo.jpeg";

const Login = () => {
  return (
    <>
      <div className=" bg-body_bg  border-[6px] border-gray-950 rounded-2xl mx-auto mt-10">
        <img src={logo} alt="logo" className=" mx-auto block w-auto h-auto" />
      </div>
    </>
  );
};

export default Login;
