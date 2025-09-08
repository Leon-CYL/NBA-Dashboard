import { useState, useEffect } from "react";

const LeaderboardBody = () => {
  const [selectedSeason, setSelectedSeason] = useState("");
  const [leaderboards, setLeaderboards] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Available seasons (1980-2025)
  const seasons = Array.from({ length: 46 }, (_, i) => 1980 + i).reverse();

  // Fetch all leaderboards from backend
  const fetchLeaderboards = async (season) => {
    if (!season) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:8080/nba/leaderboard/all?season=${season}&limit=5`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setLeaderboards(data);
    } catch (err) {
      setError(
        "Failed to fetch leaderboards. Please check if the backend is running."
      );
      console.error("Error fetching leaderboards:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle season selection
  const handleSeasonChange = (e) => {
    const season = e.target.value;
    setSelectedSeason(season);
    if (season) {
      fetchLeaderboards(season);
    }
  };

  // Leaderboard categories with icons and colors
  const categories = [
    {
      key: "points",
      title: "Points Per Game",
      icon: "fa-basketball",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      key: "assists",
      title: "Assists Per Game",
      icon: "fa-handshake",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      key: "rebounds",
      title: "Rebounds Per Game",
      icon: "fa-square",
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      key: "steals",
      title: "Steals Per Game",
      icon: "fa-hand",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      key: "blocks",
      title: "Blocks Per Game",
      icon: "fa-shield",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      key: "threePoints",
      title: "3-Pointers Per Game",
      icon: "fa-bullseye",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-teal-600 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            <i className="fa-solid fa-trophy text-yellow-500 mr-4"></i>
            NBA Leaderboards
          </h1>
          <p className="text-xl text-teal-100 font-semibold">
            Select a season to view the top performers in each category
          </p>
        </div>

        {/* Season Selection */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="max-w-md mx-auto">
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

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
            <p className="text-white text-xl mt-4 font-semibold">
              Loading leaderboards...
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

        {/* Leaderboards Grid */}
        {selectedSeason && Object.keys(leaderboards).length > 0 && !loading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {categories.map((category) => {
              const players = leaderboards[category.key] || [];
              return (
                <div
                  key={category.key}
                  className={`${category.bgColor} ${category.borderColor} border-2 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300`}
                >
                  {/* Category Header */}
                  <div className="text-center mb-4">
                    <i
                      className={`fa-solid ${category.icon} ${category.color} text-3xl mb-2`}
                    ></i>
                    <h3 className="text-xl font-bold text-gray-800">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Season {selectedSeason}
                    </p>
                  </div>

                  {/* Leaderboard Table */}
                  <div className="space-y-2">
                    {players.map((player, index) => (
                      <div
                        key={player.id || index}
                        className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          {/* Rank */}
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                              index === 0
                                ? "bg-yellow-500"
                                : index === 1
                                ? "bg-gray-400"
                                : index === 2
                                ? "bg-orange-600"
                                : "bg-gray-300"
                            }`}
                          >
                            {index + 1}
                          </div>
                          {/* Player Info */}
                          <div>
                            <p className="font-semibold text-gray-800">
                              {player.player}
                            </p>
                            <p className="text-sm text-gray-600">
                              {player.teamCode} • {player.position}
                            </p>
                          </div>
                        </div>
                        {/* Stat Value */}
                        <div className="text-right">
                          <p className="font-bold text-lg text-gray-800">
                            {category.key === "points" &&
                              player.pointsPerGame?.toFixed(1)}
                            {category.key === "assists" &&
                              player.assistsPerGame?.toFixed(1)}
                            {category.key === "rebounds" &&
                              player.totalReboundsPerGame?.toFixed(1)}
                            {category.key === "steals" &&
                              player.stealsPerGame?.toFixed(1)}
                            {category.key === "blocks" &&
                              player.blocksPerGame?.toFixed(1)}
                            {category.key === "threePoints" &&
                              player.threesMadePerGame?.toFixed(1)}
                          </p>
                          <p className="text-xs text-gray-500">
                            {category.key === "points" && "PPG"}
                            {category.key === "assists" && "APG"}
                            {category.key === "rebounds" && "RPG"}
                            {category.key === "steals" && "SPG"}
                            {category.key === "blocks" && "BPG"}
                            {category.key === "threePoints" && "3PG"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* No Data State */}
        {selectedSeason &&
          Object.keys(leaderboards).length === 0 &&
          !loading &&
          !error && (
            <div className="text-center py-12">
              <i className="fa-solid fa-trophy text-6xl text-white/50 mb-4"></i>
              <p className="text-white text-xl font-semibold">
                No leaderboard data found for the selected season.
              </p>
            </div>
          )}
      </div>
    </div>
  );
};

export default LeaderboardBody;
