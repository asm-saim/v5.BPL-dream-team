import React, { use } from "react";
import type { IPlayers } from "./type";
import Player from "./Player";
interface PlayersProps {
  playersInfo: Promise<IPlayers[]>;
}

const Players = ({ playersInfo }: PlayersProps) => {
  const playersInformation = use(playersInfo);
  return (
    <div>
      <h2>{playersInformation.length}</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {playersInformation.map((player) => <Player key={player.id} player={player} />)}
      </div>
    </div>
  );
};

export default Players;
