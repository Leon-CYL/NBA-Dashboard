import { useState } from "react";

const TeamBody = () => {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // NBA Teams with 3 letter codes
  const nbaTeams = [
    { code: "ATL", name: "Atlanta Hawks" },
    { code: "BOS", name: "Boston Celtics" },
    { code: "BKN", name: "Brooklyn Nets" },
    { code: "CHA", name: "Charlotte Hornets" },
    { code: "CHI", name: "Chicago Bulls" },
    { code: "CLE", name: "Cleveland Cavaliers" },
    { code: "DAL", name: "Dallas Mavericks" },
    { code: "DEN", name: "Denver Nuggets" },
    { code: "DET", name: "Detroit Pistons" },
    { code: "GSW", name: "Golden State Warriors" },
    { code: "HOU", name: "Houston Rockets" },
    { code: "IND", name: "Indiana Pacers" },
    { code: "LAC", name: "LA Clippers" },
    { code: "LAL", name: "Los Angeles Lakers" },
    { code: "MEM", name: "Memphis Grizzlies" },
    { code: "MIA", name: "Miami Heat" },
    { code: "MIL", name: "Milwaukee Bucks" },
    { code: "MIN", name: "Minnesota Timberwolves" },
    { code: "NOP", name: "New Orleans Pelicans" },
    { code: "NYK", name: "New York Knicks" },
    { code: "OKC", name: "Oklahoma City Thunder" },
    { code: "ORL", name: "Orlando Magic" },
    { code: "PHI", name: "Philadelphia 76ers" },
    { code: "PHX", name: "Phoenix Suns" },
    { code: "POR", name: "Portland Trail Blazers" },
    { code: "SAC", name: "Sacramento Kings" },
    { code: "SAS", name: "San Antonio Spurs" },
    { code: "TOR", name: "Toronto Raptors" },
    { code: "UTA", name: "Utah Jazz" },
    { code: "WAS", name: "Washington Wizards" },
  ];

  // Available seasons (1980-2025)
  const seasons = Array.from({ length: 46 }, (_, i) => 1980 + i).reverse();

  // Fetch players from backend
  const fetchPlayers = async (team, season) => {
    if (!team || !season) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:8080/nba?team=${team}&season=${season}`
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

  // Handle team selection
  const handleTeamChange = (e) => {
    const team = e.target.value;
    setSelectedTeam(team);
    if (team && selectedSeason) {
      fetchPlayers(team, selectedSeason);
    }
  };

  // Handle season selection
  const handleSeasonChange = (e) => {
    const season = e.target.value;
    setSelectedSeason(season);
    if (season && selectedTeam) {
      fetchPlayers(selectedTeam, season);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-teal-600 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            <i className="fa-solid fa-people-group text-violet-500 mr-4"></i>
            Team Analysis
          </h1>
          <p className="text-xl text-teal-100 font-semibold">
            Select a team and season to view player statistics
          </p>
        </div>

        {/* Dropdown Controls */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Team Selection */}
            <div>
              <label className="block text-white text-lg font-semibold mb-3">
                <i className="fa-solid fa-basketball text-orange-500 mr-2"></i>
                Select Team
              </label>
              <select
                value={selectedTeam}
                onChange={handleTeamChange}
                className="w-full p-4 rounded-xl border-2 border-teal-300 bg-white text-gray-800 text-lg font-medium focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all duration-300 shadow-lg"
              >
                <option value="">Choose a team...</option>
                {nbaTeams.map((team) => (
                  <option key={team.code} value={team.code}>
                    {team.code} - {team.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Season Selection */}
            <div>
              <label className="block text-white text-lg font-semibold mb-3">
                <i className="fa-solid fa-calendar text-cyan-400 mr-2"></i>
                Select Season
              </label>
              <select
                value={selectedSeason}
                onChange={handleSeasonChange}
                className="w-full p-4 rounded-xl border-2 border-teal-300 bg-white text-gray-800 text-lg font-medium focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200 transition-all duration-300 shadow-lg"
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
              {nbaTeams.find((t) => t.code === selectedTeam)?.name} Roster (
              {selectedSeason})
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white/90 rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-teal-700 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">
                      Player
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Position
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">Age</th>
                    <th className="px-4 py-3 text-left font-semibold">Games</th>
                    <th className="px-4 py-3 text-left font-semibold">MPG</th>
                    <th className="px-4 py-3 text-left font-semibold">PPG</th>
                    <th className="px-4 py-3 text-left font-semibold">RPG</th>
                    <th className="px-4 py-3 text-left font-semibold">APG</th>
                    <th className="px-4 py-3 text-left font-semibold">SPG</th>
                    <th className="px-4 py-3 text-left font-semibold">BPG</th>
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
                      <td className="px-4 py-3 text-gray-600">
                        {player.position}
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center">
              <p className="text-white text-lg font-semibold">
                Showing {players.length} players
              </p>
            </div>
          </div>
        )}

        {/* No Data State */}
        {selectedTeam &&
          selectedSeason &&
          players.length === 0 &&
          !loading &&
          !error && (
            <div className="text-center py-12">
              <i className="fa-solid fa-basketball text-6xl text-white/50 mb-4"></i>
              <p className="text-white text-xl font-semibold">
                No players found for the selected team and season.
              </p>
            </div>
          )}
      </div>
    </div>
  );
};

export default TeamBody;
