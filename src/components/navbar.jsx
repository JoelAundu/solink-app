import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    // <div className="w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg ">
    //   <div className="px-2 flex justify-between items-center w-full h-full">
    //     <div className="flex items-center">
    //       <img
    //         className="mr-4"
    //         // src={require("../assets/images/solinkLogo.png")}
    //         src="assets/images/solinkLogo.png"
    //         alt="this is the logo"
    //       />
    //       <ul className="hidden md:flex place-items-end  ">
    //         <Link
    //           to="/"
    //           className="font-bold px-3 py-2 text-xl md:text-2xl hover:text-slate-500 font-mono"
    //         >
    //           {" "}
    //           Home
    //         </Link>
    //         <Link
    //           to="/Launches"
    //           className="font-bold px-3 py-2 text-xl md:text-2xl hover:text-slate-500 font-mono"
    //         >
    //           Past Launches
    //         </Link>
    //       </ul>
    //     </div>
    //     <div className="md:hidden" onClick={handleClick}>
    //       {!nav ? <MenuIcon className="w-6" /> : <XIcon className="w-6" />}
    //     </div>
    //   </div>
    //   <ul className={!nav ? "hidden" : "absolute ng-zinc-200 w-full px-8"}>
    //     <Link to="/" className="border-b-2 border-zinc-300 w-full">
    //       Home/
    //     </Link>
    //     <Link to="/Launches" className="border-b-2 border-zinc-300 w-full">
    //       Past Launches
    //     </Link>
    //   </ul>
    // </div>

    // Second Iterations
    <div className="fixed w-full h-[80px] flex justify-between drop-shadow-lg items-center px-4 bg-zinc-200 text-solink-blue">
      <div>
        <img
          className="m-2"
          src="assets/images/solinkLogo.png"
          alt="this is the logo"
        />
      </div>
      {/* Menu */}

      <ul className="m-8 hidden md:flex py-6 text-2xl font-bold text-solink-blue font-mono">
        <Link
          to="/"
          className="font-bold px-3 py-2 text-xl md:text-2xl hover:text-slate-500 font-mono"
        >
          {" "}
          Home
        </Link>
        <Link
          to="/Launches"
          className="font-bold px-3 py-2 text-xl md:text-2xl hover:text-slate-500 font-mono"
        >
          Past Launches
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
          className="py-6 text-4xl hover:text-slate-500 font-mono font-bold"
        >
          Home
        </Link>
        <Link
          to="/Launches"
          className="py-6 text-4xl hover:text-slate-500 font-mono font-bold"
        >
          Past Launches
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
