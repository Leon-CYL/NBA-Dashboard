import { useState } from "react";

const PositionBody = () => {
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // NBA Positions with icons
  const positions = [
    {
      code: "PG",
      name: "Point Guard",
      icon: "fa-basketball",
    },
    {
      code: "SG",
      name: "Shooting Guard",
      icon: "fa-bullseye",
    },
    {
      code: "SF",
      name: "Small Forward",
      icon: "fa-running",
    },
    {
      code: "PF",
      name: "Power Forward",
      icon: "fa-dumbbell",
    },
    {
      code: "C",
      name: "Center",
      icon: "fa-shield",
    },
  ];

  // Available seasons (1980-2025)
  const seasons = Array.from({ length: 46 }, (_, i) => 1980 + i).reverse();

  // Fetch players by position and season
  const fetchPlayers = async (position, season) => {
    if (!position || !season) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:8080/nba?season=${season}&pos=${position}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPlayers(data);
    } catch (err) {
      setError(
        "Failed to fetch players. Please check if the backend is running."
      );
      console.error("Error fetching players:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle position selection
  const handlePositionChange = (e) => {
    const position = e.target.value;
    setSelectedPosition(position);
    if (position && selectedSeason) {
      fetchPlayers(position, selectedSeason);
    }
  };

  // Handle season selection
  const handleSeasonChange = (e) => {
    const season = e.target.value;
    setSelectedSeason(season);
    if (season && selectedPosition) {
      fetchPlayers(selectedPosition, season);
    }
  };

  // Get position info for display
  const getPositionInfo = (positionCode) => {
    return positions.find((p) => p.code === positionCode) || positions[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-teal-600 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            <i className="fa-solid fa-user text-cyan-400 mr-4"></i>
            Position Analysis
          </h1>
          <p className="text-xl text-teal-100 font-semibold">
            Select a position and season to view player statistics
          </p>
        </div>

        {/* Dropdown Controls */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Position Selection */}
            <div>
              <label className="block text-white text-lg font-semibold mb-3">
                <i className="fa-solid fa-user text-cyan-400 mr-2"></i>
                Select Position
              </label>
              <select
                value={selectedPosition}
                onChange={handlePositionChange}
                className="w-full p-4 rounded-xl border-2 border-teal-300 bg-white text-gray-800 text-lg font-medium focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200 transition-all duration-300 shadow-lg"
              >
                <option value="">Choose a position...</option>
                {positions.map((position) => (
                  <option key={position.code} value={position.code}>
                    {position.code} - {position.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Season Selection */}
            <div>
              <label className="block text-white text-lg font-semibold mb-3">
                <i className="fa-solid fa-calendar text-orange-500 mr-2"></i>
                Select Season
              </label>
              <select
                value={selectedSeason}
                onChange={handleSeasonChange}
                className="w-full p-4 rounded-xl border-2 border-teal-300 bg-white text-gray-800 text-lg font-medium focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all duration-300 shadow-lg"
              >
                <option value="">Choose a season...</option>
                {seasons.map((season) => (
                  <option key={season} value={season}>
                    {season}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Position Info Card */}
        {selectedPosition && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-2xl">
            <div className="flex items-center justify-center space-x-4">
              <i
                className={`fa-solid ${
                  getPositionInfo(selectedPosition).icon
                } text-4xl text-cyan-400`}
              ></i>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white">
                  {getPositionInfo(selectedPosition).name} ({selectedPosition})
                </h2>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
            <p className="text-white text-xl mt-4 font-semibold">
              Loading players...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-500/20 border border-red-500 rounded-xl p-6 mb-8">
            <div className="flex items-center">
              <i className="fa-solid fa-exclamation-triangle text-red-400 text-2xl mr-4"></i>
              <p className="text-red-100 text-lg font-semibold">{error}</p>
            </div>
          </div>
        )}

        {/* Players Table */}
        {players.length > 0 && !loading && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              <i className="fa-solid fa-users text-yellow-500 mr-3"></i>
              {getPositionInfo(selectedPosition).name}s in {selectedSeason}
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white/90 rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-teal-700 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">
                      Player
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">Team</th>
                    <th className="px-4 py-3 text-left font-semibold">Age</th>
                    <th className="px-4 py-3 text-left font-semibold">Games</th>
                    <th className="px-4 py-3 text-left font-semibold">MPG</th>
                    <th className="px-4 py-3 text-left font-semibold">PPG</th>
                    <th className="px-4 py-3 text-left font-semibold">RPG</th>
                    <th className="px-4 py-3 text-left font-semibold">APG</th>
                    <th className="px-4 py-3 text-left font-semibold">SPG</th>
                    <th className="px-4 py-3 text-left font-semibold">BPG</th>
                    <th className="px-4 py-3 text-left font-semibold">FG%</th>
                    <th className="px-4 py-3 text-left font-semibold">3P%</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player, index) => (
                    <tr
                      key={player.id || index}
                      className="hover:bg-teal-50 transition-colors duration-200"
                    >
                      <td className="px-4 py-3 font-medium text-gray-800">
                        {player.player}
                      </td>
                      <td className="px-4 py-3 text-gray-600 font-semibold">
                        {player.teamCode}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{player.age}</td>
                      <td className="px-4 py-3 text-gray-600">
                        {player.games}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {player.minutesPerGame?.toFixed(1)}
                      </td>
                      <td className="px-4 py-3 text-gray-600 font-semibold">
                        {player.pointsPerGame?.toFixed(1)}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {player.totalReboundsPerGame?.toFixed(1)}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {player.assistsPerGame?.toFixed(1)}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {player.stealsPerGame?.toFixed(1)}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {player.blocksPerGame?.toFixed(1)}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {(player.fieldGoalPct * 100)?.toFixed(1)}%
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {(player.threePointPct * 100)?.toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center">
              <p className="text-white text-lg font-semibold">
                Showing {players.length}{" "}
                {getPositionInfo(selectedPosition).name.toLowerCase()}s
              </p>
            </div>
          </div>
        )}

        {/* No Data State */}
        {selectedPosition &&
          selectedSeason &&
          players.length === 0 &&
          !loading &&
          !error && (
            <div className="text-center py-12">
              <i className="fa-solid fa-user text-6xl text-white/50 mb-4"></i>
              <p className="text-white text-xl font-semibold">
                No players found for the selected position and season.
              </p>
            </div>
          )}
      </div>
    </div>
  );
};

export default PositionBody;
