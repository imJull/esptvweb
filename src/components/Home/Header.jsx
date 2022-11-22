import React from "react";
import lago from "../Home/lago.jpg";

const Header = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center">
        <div className="text-white font-bold uppercase text-4xl z-50 ">Present truth for</div>
        <br />
        <div className="text-white font-bold text-lg uppercase z-50">the last generation</div>
      </div>
      
      <img className="w-full h-full object-cover brightness-50 " src={lago} alt="hero-lago" />
    </div>
  );
};

export default Header;
