import React from "react";
import logo from "../assets/home/logo.jpeg";

const Header = () => {
  return (
    <>
      <div>
        <img src={logo} alt="logo" className=" mx-auto block w-auto h-auto" />
      </div>
    </>
  );
};

export default Header;
