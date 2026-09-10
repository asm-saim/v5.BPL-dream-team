import { Suspense, useState } from "react";
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
  //coins state:
  const [coin, setCoin] = useState(5000);

  return (
    <>
      <Navbar coin={coin} setCoin={setCoin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={"Loading...."}>
        <Players playersInfo={playersInfo} coin={coin} setCoin={setCoin}></Players>
      </Suspense>
    </>
  );
}

export default App;
