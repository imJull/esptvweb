import React from "react";
import Navbar from "../Nav/Navbar";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="sm:w-full h-full md:w-full h-screen lg:w-full h-screen bg-[#072a40] flex justify-center items-center p-[100px]">
        <form className="flex flex-col max-w-[600px] w-full mt-[200px]">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#18b7be] text-gray-300">
              Contact Us
            </p>
          </div>
          <input
            type="text"
            className="bg-[#ccd6f6] p-2 "
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black border-2 hover:bg-[#072a40] hover:border-[#072a40] px-4 py-3 my-8 mx-auto flex items-center">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
