import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[80px] p-8 text-center bg-zinc-300 text-solink-green font-mono">
      <div className=" flex justify-center gap-4 ">
        <a href="https://www.linkedin.com/in/joelaundu">
          <FaLinkedin className="hover:text-black" />
        </a>
        <a href="https://github.com/JoelAundu">
          <FaGithub className="hover:text-black" />
        </a>
      </div>
      <div>
        <p className="">copyright @Joel Aundu 2022 </p>
      </div>
    </div>
  );
};

export default Footer;
