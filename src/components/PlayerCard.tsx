import type { IPlayers } from "./type";

interface PlayerCardProps {
  player: IPlayers;
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* Player Image */}
      <div className="relative">
        <img src={player.playerImg} alt={player.playerName} className="w-full h-56 object-cover" />

        {/* Player Type */}
        <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {player.playerType}
        </span>
      </div>

      {/* Player Information */}
      <div className="p-5">
        {/* Name & Origin */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800">{player.playerName}</h3>

          <p className="text-sm text-gray-500 mt-1">{player.origin}</p>
        </div>

        {/* Player Details */}
        <div className="space-y-2 border-t border-gray-200 pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Batting</span>
            <span className="font-medium text-gray-700">{player.battingStyle}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Bowling</span>
            <span className="font-medium text-gray-700">{player.bowlingStyle}</span>
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between gap-3 border-t border-gray-200 mt-5 pt-4">
          <div>
            <p className="text-xs text-gray-500">Player Price</p>
            <p className="text-xl font-bold text-green-600">${player.price.toLocaleString()}</p>
          </div>

          <button className="btn border-none bg-green-600 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200">
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
