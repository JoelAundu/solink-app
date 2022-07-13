import React from "react";
import UpComingLaunches from "./UpComingLaunches";
import { HiArrowRight } from "react-icons/hi";

const NextLaunch = ({ data }) => {
  const { mission_name, launch_date_local, launch_site } = data;
  return (
    <div name="Home" className="w-full h-screen bg-zinc-200 text-solink-blue">
      <div className="flex flex-col justify-center items-center m-auto w-full h-full">
        <div className="max-w-[1240px] w-full grid md:grid-cols-2 gap-8 bg-solink-green">
          <div className=" p-8">
            <h1 className="text-xl md:text-2xl font-bold text-solink-blue font-mono">
              Mission Name : {mission_name}
            </h1>
            <h1 className="text-xl md:text-2xl font-bold text-solink-blue font-mono">
              Mission Name : {launch_date_local}
            </h1>
            <h1 className="text-xl md:text-2xl font-bold text-solink-blue font-mono">
              Mission Name : {launch_site?.site_name}
            </h1>
          </div>
          <div className="p-8">
            {" "}
            <img
              className="w-full rounded-lg"
              src="assets/images/spaceX1.jpg"
              alt="this is the logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextLaunch;
