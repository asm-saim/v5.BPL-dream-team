import { Suspense } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Players from "./components/Players";

const playersData = async () => {
  const response = await fetch("/public/players-data.json");
  const data = await response.json();
  return data;
};

const playersInfo = playersData();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={"Loading...."}>
        <Players playersInfo={playersInfo}></Players>
      </Suspense>
    </>
  );
}

export default App;
