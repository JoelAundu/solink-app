import React from "react";
import moment from "moment";

const NextLaunch = ({ data }) => {
  const { mission_name, launch_date_local, launch_site } = data;
  return (
    <div name="Home" className="w-full h-screen bg-zinc-200 text-solink-blue">
      <div className="flex flex-col justify-center items-center m-auto w-full h-full">
        <div className="max-w-[1240px] w-full grid md:grid-cols-2 gap-8">
          <div className=" p-4">
            <h1 className="text-2xl md:text-3xl pb-4 pt-12 text-center font-bold text-solink-blue hover:text-solink-green font-[poppins]">
              NEXT LAUNCH
            </h1>
            <h2 className="text-xl md:text-2xl text-black font-mono">
              Mission Name - {mission_name}
            </h2>
            <h2 className="text-xl md:text-2xl text-black font-mono">
              Launch date -{" "}
              {moment(launch_date_local).format("MMMM Do YYYY, h:mm:ss a")}
            </h2>
            <h2 className="text-xl md:text-2xl text-black font-mono">
              Site name - {launch_site?.site_name}
            </h2>
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
