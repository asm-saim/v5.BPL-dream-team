import React from "react";
import type { IPlayers } from "./type";

interface PlayerProps {
  player: IPlayers;
}

const Player = ({ player }: PlayerProps) => {
  return (
    <div>
      <div key={player.id} className="bg-gray-600 p-4 rounded-lg shadow">
        <img src={player.playerImage} alt={player.playerName} className="w-full h-auto rounded-lg" />
        <h3 className="text-lg font-bold mt-2">{player.playerName}</h3>
        <p className="text-gray-300">{player.origin}</p>
        <p className="text-gray-300">{player.playerType}</p>
        <p className="text-gray-300">{player.battingStyle}</p>
        <p className="text-gray-300 ">{player.bowlingStyle}</p>
        <p className="text-xl font-bold text-green-500">${player.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Player;
