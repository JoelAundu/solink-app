import React from "react";
import moment from "moment";
const PastLaunch = ({ pastData }) => {
  return (
    <div className="bg-zinc-200">
      <div
        className=" bg-zinc-200 pb-8
          rounded-xl text-center shadow-xl"
      >
        <h1 className="md:text-3xl text-2xl pt-32 pb-6 font-bold text-solink-blue hover:text-solink-green font-[poppins] text-center">
          PAST LAUNCHES
        </h1>
        <table className="bg-zinc-200 border-2 text-left ml-auto mr-auto shadow-2xl font-[poppins] p-4">
          <thead className=" text-solink-green ">
            <tr>
              <th className="border border-slate-400 p-2">Mission name</th>
              <th className="border border-slate-400 p-2">Launch date</th>
              <th className="border border-slate-400 p-2">Launch site name</th>
            </tr>
          </thead>
          <tbody>
            {pastData.map((mission, index) => (
              <tr className="hover:bg-slate-300" key={index}>
                <td className="border p-2 border-slate-300">
                  {mission.mission_name}
                </td>
                <td className="border p-2 border-slate-300">
                  {moment(mission.launch_date_local).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </td>
                <td className="border p-2 border-slate-300">
                  {mission.launch_site.site_name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PastLaunch;
