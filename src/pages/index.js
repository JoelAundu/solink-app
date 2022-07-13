import React from "react";
import { useEffect, useState } from "react";
import UpComingMission from "../graphql/uplaunch";
import NextMission from "../graphql/nextlaunch";
import NextLaunch from "../components/sections/NextLaunch";
import UpComingLaunches from "../components/sections/UpComingLaunches";
import Layout from "../components/sections/layouts/Layout";

const Home = () => {
  const [data, setData] = useState([]);
  const [upComingdata, setupComingdata] = useState([]);

  const fetchNextMissions = async () => {
    const missions = await NextMission.getNextMission(1);
    setData(missions);
  };
  const fectUpcomingMissions = async () => {
    const missions = await UpComingMission.getUpMission(10);
    setupComingdata(missions);
  };

  useEffect(() => {
    fetchNextMissions();
    fectUpcomingMissions();
  }, []);

  console.log("Space Misision data 1", data);
  console.log("Space Misision data 2", upComingdata);

  return (
    <Layout>
      <div>
        <div>
          <NextLaunch data={data} />
          <UpComingLaunches upComingData={upComingdata} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
