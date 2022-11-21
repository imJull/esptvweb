import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 w-full mx-auto text-white bg-slate-600 px-4">
      <h1 className="w-full text-3xl font-bold text-[#aac5bd]">EL LOGO</h1>
      <ul className="flex justify-between items-center">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/about">Conocenos</Link>
        </li>
        <li className="p-4">
          <Link to="/nada">Servicios</Link>
        </li>
        <li className="p-4">
          <Link to="/nada">Enlaces</Link>
        </li>
        <li className="p-4">
          <Link to="/nada">Contáctenos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
