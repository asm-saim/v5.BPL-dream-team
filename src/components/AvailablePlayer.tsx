import PlayerCard from "./Playercard";
import type { IPlayers } from "./type";

interface PlayerProps {
  playersInformation: IPlayers[];
}

const AvailablePlayer = ({ playersInformation }: PlayerProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {playersInformation.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

export default AvailablePlayer;
