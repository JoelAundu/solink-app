import React, { useState, useEffect } from "react";
import Layout from "../components/sections/layouts/Layout";
import PastLaunch from "../components/sections/PastLaunch";
import PastMissions from "../graphql/pastlaunch";

const PastLaunches = () => {
  const [pastLaunch, setPastLaunches] = useState([]);

  const fectPastMissions = async () => {
    const missions = await PastMissions.getPastMission(20);
    setPastLaunches(missions);
  };
  useEffect(() => {
    fectPastMissions();
  }, []);

  console.log("Space Misision data 3", pastLaunch);
  return (
    <Layout>
      <PastLaunch pastData={pastLaunch} />
    </Layout>
  );
};

export default PastLaunches;
