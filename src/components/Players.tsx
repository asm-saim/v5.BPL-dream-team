import { use, useState } from "react";
import type { IPlayers } from "./type";
import AvailablePlayer from "./AvailablePlayer";
interface PlayersProps {
  playersInfo: Promise<IPlayers[]>;
}

const Players = ({ playersInfo }: PlayersProps) => {
  const playersInformation = use(playersInfo);

  //
  const [buttonType, setButtonType] = useState("available");

  const handleButtonType = (type: "available" | "selected") => {
    setButtonType(type);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2>{playersInformation.length}</h2>
      <div className="flex justify-between items-center py-5">
        <h2 className="text-xl font-bold">Available Players</h2>
        <div className="flex">
          <button
            onClick={() => handleButtonType("available")}
            className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => handleButtonType("selected")}
            className={`btn ${buttonType === "selected" ? "btn-success" : ""}      rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>
      <div>{<AvailablePlayer playersInformation={playersInformation}></AvailablePlayer>}</div>
    </div>
  );
};

export default Players;
