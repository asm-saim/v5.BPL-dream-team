import type { Dispatch, SetStateAction } from "react";
import PlayerCard from "./Playercard";
import type { IPlayers } from "./type";

interface PlayerProps {
  playersData: IPlayers[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const AvailablePlayer = ({ playersData, coin, setCoin }: PlayerProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {playersData.map((player) => (
        <PlayerCard key={player.id} player={player} coin={coin} setCoin={setCoin} />
      ))}
    </div>
  );
};

export default AvailablePlayer;
