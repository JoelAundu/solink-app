import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between drop-shadow-lg items-center px-4 bg-zinc-200 text-solink-blue">
      <div>
        <img
          className="m-2"
          src="assets/images/SOLink-logo.jpg"
          alt="this is the logo"
        />
      </div>
      {/* Menu */}

      <ul className="m-8 hidden md:flex py-6 text-2xl font-bold text-solink-blue font-[poppins]">
        <Link
          to="/"
          className="font-bold px-3 py-2 text-xl md:text-2xl hover:text-black font-[poppins]"
        >
          HOME
        </Link>
        <Link
          to="/pastLaunches"
          className="font-bold px-3 py-2 text-xl md:text-2xl hover:text-black font-mono"
        >
          PASTLAUNCHES
        </Link>
      </ul>

      {/* Hamburger-Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-zinc-200 flex flex-col justify-center items-center"
        }
      >
        <Link
          to="/"
          className="py-6 text-4xl hover:text-solink-green font-[poppins] font-bold"
        >
          HOME
        </Link>
        <Link
          to="/pastLaunches"
          className="py-6 text-4xl hover:text-solink-green font-[poppins] font-bold"
        >
          PASTLAUNCHES
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
