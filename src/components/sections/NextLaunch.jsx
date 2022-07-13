import React from "react";

const NextLaunch = ({ data }) => {
  const { mission_name, launch_date_local, launch_site } = data;
  return (
    <div name="Home" className="w-full h-screen bg-zinc-200 text-solink-blue">
      <div className="flex flex-col justify-center items-center m-auto w-full h-full">
        <div className="max-w-[1240px] w-full grid md:grid-cols-2 gap-8">
          <div className=" p-8">
            <h1 className="text-2xl md:text-3xl pb-4 pt-12 text-center font-bold text-solink-blue hover:text-solink-green font-[poppins]">
              Next Launch
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-black font-mono">
              Mission Name - {mission_name}
            </h2>
            <h2 className="text-xl md:text-2xl font-bold text-black font-mono">
              Launch date - {launch_date_local}
            </h2>
            <h2 className="text-xl md:text-2xl font-bold text-black font-mono">
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
