import React from "react";
import UpComingLaunches from "./UpComingLaunches";

const NextLaunch = ({ data }) => {
  const { mission_name, launch_date_local, launch_site } = data;
  return (
    <div className="w-full- h-screen bg-solink-nyanza flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-[10%]">
        <div className="flex flex-col justify-center md:items-start w-full">
          <p className="text-2xl">Mission name : {mission_name}</p>
          <p className="text-2xl">Launch time : {launch_date_local}</p>
          <p className="text-2xl">
            {" "}
            Launch Site name : {launch_site.site_name}
          </p>
        </div>
        <div>
          <img
            className="mr-4"
            // src={require("../assets/images/solinkLogo.png")}
            src="assets/images/rocketImage.png"
            alt="this is the logo"
          />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
         mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-solink-blue 
         border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <h1 className="font-bold px-3 py-2 text-red-900 rouded-lg hover:text-slate-500">
            Upcoming Launches
          </h1>
          <div className="flex justify-between flex-wrap px-4 mx-auto py-2">
            <UpComingLaunches />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextLaunch;
