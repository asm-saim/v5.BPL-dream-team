import React, { type Dispatch, type SetStateAction } from "react";
import type { IPlayers } from "./type";

interface ISElectedPlayers {
  selectedPlayers: IPlayers[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayers[]>>;
}

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers }: ISElectedPlayers) => {
  console.log(selectedPlayers, "from selected players");
  return (
    <div>
      <h1>Selected Players</h1>
    </div>
  );
};

export default SelectedPlayers;
