import React from "react";
import lago from "../Home/lago.jpg";

const Header = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center">
        <h1 className="text-black font-bold uppercase text-4xl ">Present truth for</h1>
        <br />
        <h1 className="text-white font-bold text-lg uppercase">the last generation</h1>
      </div>
      
      <img className="w-full h-full object-cover blur-2px" src={lago} alt="hero-lago" />
    </div>
  );
};

export default Header;
