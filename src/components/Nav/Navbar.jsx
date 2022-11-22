import React from "react";


import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center h-20 absolute z-10 text-black font-bold bg-slate-100">
      <div>
        <h1>EsperanzaTV.</h1>
      </div>
      <ul className="flex justify-between items-center">
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
    </div>
  );
};

export default Navbar;
