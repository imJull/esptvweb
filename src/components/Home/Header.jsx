import React from "react";
import lago from "../Home/lago.jpg";

const Header = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center">
        <div className="text-white font-bold uppercase text-4xl z-50 ">Present truth for</div>
        <br />
        <div className="text-white font-bold text-lg uppercase z-50">the last generation</div>
        <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black border-2 hover:bg-[#072a40] hover:border-[#072a40] px-4 py-3 my-8 mx-auto flex items-center z-50">
            Watch Us
          </button>
      </div>
      
      <img className="w-full h-full object-cover brightness-50 " src={lago} alt="hero-lago" />
    </div>
  );
};

export default Header;
