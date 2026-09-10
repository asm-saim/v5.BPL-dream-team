import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { IPlayers } from "./type";
import AvailablePlayer from "./AvailablePlayer";
import SelectedPlayers from "./SelectedPlayers";
interface PlayersProps {
  playersInfo: Promise<IPlayers[]>
  coin:number,
  setCoin:Dispatch<SetStateAction<number>>
}

const Players = ({ playersInfo, coin, setCoin }: PlayersProps) => {
  const playersData = use(playersInfo);

  //
  const [buttonType, setButtonType] = useState("available");

  const handleButtonType = (type: "available" | "selected") => {
    setButtonType(type);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2>{playersData.length}</h2>
      <div className="flex justify-between items-center py-5">
        <h2 className="text-xl font-bold">{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>
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
      <div>
        {buttonType === "available" ? (
          <AvailablePlayer playersData={playersData} coin={coin} setCoin={setCoin}></AvailablePlayer>
        ) : (
          <SelectedPlayers></SelectedPlayers>
        )}
      </div>
    </div>
  );
};

export default Players;
