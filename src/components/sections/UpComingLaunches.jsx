import React from "react";

const UpComingLaunches = () => {
  return (
    <div className="bg-zinc-200">
      {/* fixed  flex flex-col py-8 md:min-w-[760px] bottom-[5%]
         mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
         border border-slate-300 rounded-xl text-center shadow-xl */}
      <div
        className=" bg-zinc-200 pb-8
          rounded-xl text-center shadow-xl"
      >
        <h1 className="text-2xl font-bold text-solink-blue font-mono text-center">
          Upcoming Launches
        </h1>
        <table className="bg-zinc-200 text-center ml-auto mr-auto">
          <thead className="">
            <tr>
              <th className="border border-slate-300 p-2">Mission name</th>
              <th className="border border-slate-300 p-2">Launch date</th>
              <th className="border border-slate-300 p-2">Launch site name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300">a</td>
              <td className="border border-slate-300">b</td>
              <td className="border border-slate-300">c</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpComingLaunches;
