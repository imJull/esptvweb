import React from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center h-20 absolute z-10 text-black font-bold bg-slate-100">
      <div>
        <h1>EsperanzaTV.</h1>
      </div>
      <ul className="hidden lg:flex justify-between items-center">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/about">Conocenos</Link>
        </li>
        <li className="p-4">
          <Link to="/servicios">Servicios</Link>
        </li>
        <li className="p-4">
          <Link to="/enlaces">Enlaces</Link>
        </li>
        <li className="p-4">
          <Link to="/contactenos">Contáctenos</Link>
        </li>
      </ul>

      {/*Nav lateral de redes sociales */}
      <div className="hidden lg:flex fixed flex-col bottom-[30px] left-[-5px]">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com/esperanzatvcr.org"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fa0202]">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.youtube.com/channel/UCkpMtLj1mZIRAXqGdn50pIQ"
            >
              YouTube <FaYoutube size={30} />
            </a>
          </li>
          <li className="max-w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.instagram.com/esperanzatvcr/"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#02ff24]">
            <a
              className="flex justify-between items-center w-full text-gray-900"
              href="/"
            >
              WhatsApp <FaWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
