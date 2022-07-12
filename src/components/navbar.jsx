import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    // <div className="w-screen h-[80px] z-10 bg-solink-nyanza drop-shadow-lg ">
    //   <div className="px-2 flex justify-between items-center w-full h-full">
    //     <div className="flex items-center">
    //       <img
    //         className="mr-4"
    //         // src={require("../assets/images/solinkLogo.png")}
    //         src="assets/images/solinkLogo.png"
    //         alt="this is the logo"
    //       />
    //       <ul className="hidden md:flex place-items-end ">
    //         <li className="font-bold px-3 py-2 text-black-100 rouded-lg hover:text-slate-500">
    //           {" "}
    //           Home
    //         </li>
    //         <li className="font-bold px-3 py-2 text-black-100 rouded-lg hover:text-slate-500">
    //           Past Launches
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="md:hidden" onClick={handleClick}>
    //       {!nav ? <MenuIcon className="w-6" /> : <XIcon className="w-6" />}
    //     </div>
    //   </div>
    //   <ul className={!nav ? "hidden" : "absolute ng-zinc-200 w-full px-8"}>
    //     <li className="border-b-2 border-zinc-300 w-full">Home</li>
    //     <li className="border-b-2 border-zinc-300 w-full">Past Launches</li>
    //   </ul>
    // </div>
    <div>
      
    </div>
  );
};

export default Navbar;
