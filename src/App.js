import Navbar from "./components/navbar";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import SpaceMission from "./graphql";
import TestMission from "./graphql/test";
import NextLaunch from "./components/sections/NextLaunch";
import "../src/index.css";

function App() {
  const [data, setData] = useState([]);
  const [upComingdata, setupComingdata] = useState([]);

  const fetchMissions = async () => {
    const missions = await SpaceMission.getSpaceMission(10);
    setData(missions);
  };
  const fectTest = async () => {
    const missions = await TestMission.getTestMission(10);
    setupComingdata(missions);
  };

  useEffect(() => {
    fetchMissions();
    fectTest();
  }, []);

  console.log("Space Misision data 1", data);
  console.log("Space Misision data 2", upComingdata);
  return (
    <div>
      <Navbar />
      <NextLaunch data={data} />
      {/* {data.map((content, index) => (
        <p>{content.mission_name}</p>
    ))} */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
