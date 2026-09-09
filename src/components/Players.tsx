import { use } from "react";
import type { IPlayers } from "./type";
import AvailablePlayer from "./AvailablePlayer";
interface PlayersProps {
  playersInfo: Promise<IPlayers[]>;
}

const Players = ({ playersInfo }: PlayersProps) => {
  const playersInformation = use(playersInfo);
  return (
    <div className="max-w-6xl mx-auto">
      <h2>{playersInformation.length}</h2>
      <div className="flex justify-between items-center py-5">
        <h2>Available Players</h2>
        <div className="flex">
          <button className="btn btn-accent">Available</button>
          <button className="btn ">Selected</button>
        </div>
      </div>
        <div >
            {
                <AvailablePlayer playersInformation={playersInformation}></AvailablePlayer>
            }
            </div>
    </div>
  );
};

export default Players;
