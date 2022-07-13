import Navbar from "./components/navbar";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import SpaceMission from "./graphql";
import TestMission from "./graphql/test";
import UpMissions from "./graphql/uplaunch";
import NextLaunch from "./components/sections/NextLaunch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/index.css";
import Home from "./components/sections/Home";
import Launches from "./components/sections/Launches";
import UpComingLaunches from "./components/sections/UpComingLaunches";
function App() {
  const [data, setData] = useState([]);
  const [upComingdata, setupComingdata] = useState([]);
  const [pastLaunches, setPastLaunches] = useState([]);

  const fetchMissions = async () => {
    const missions = await SpaceMission.getSpaceMission(10);
    setData(missions);
  };
  const fectTest = async () => {
    const missions = await TestMission.getTestMission(10);
    setupComingdata(missions);
  };
  const fectPastMissions = async () => {
    const missions = await UpMissions.getUpMission(10);
    setPastLaunches(missions);
  };

  useEffect(() => {
    fetchMissions();
    fectTest();
    fectPastMissions();
  }, []);

  console.log("Space Misision data 1", data);
  console.log("Space Misision data 2", upComingdata);
  console.log("Space Misision data 3", pastLaunches);

  return (
    <Router>
      <div>
        <Navbar />
        <NextLaunch data={data} />
        <UpComingLaunches />
        {/* {data.map((content, index) => (
        <p>{content.mission_name}</p>
    ))} */}
        {/* <Footer /> */}
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Launches">
          <Launches />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
