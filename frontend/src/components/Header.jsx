const Header = ({ currentPage, setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const getButtonClass = (page) => {
    const baseClass =
      "group relative flex items-center justify-center w-16 h-16 transition-all duration-300 hover:scale-110 hover:brightness-125";
    return baseClass;
  };

  return (
    <div className="flex justify-around items-center px-4 py-8 bg-teal-700 text-4xl text-white">
      <div className="flex flex-col items-center">
        <i className="fa-solid fa-basketball text-orange-500 text-6xl hover:animate-bounce transition-all duration-300"></i>
        <div className="text-2xl mt-2 font-bold drop-shadow-lg">
          <span className="text-red-600 font-black tracking-wide hover:text-red-400 transition-colors duration-300">
            NBA
          </span>{" "}
          <span className="text-blue-500 font-black tracking-wide hover:text-blue-400 transition-colors duration-300">
            Dashboard
          </span>
        </div>
      </div>

      {/* Home Button */}
      <button
        className={getButtonClass("home")}
        onClick={() => handleNavigation("home")}
      >
        <i className="fa-solid fa-house group-hover:opacity-0 transition-opacity duration-300 text-emerald-500 text-5xl"></i>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl font-semibold whitespace-nowrap text-emerald-500">
          Home
        </span>
      </button>

      {/* Teams Button */}
      <button
        className={getButtonClass("teams")}
        onClick={() => handleNavigation("teams")}
      >
        <i className="fa-solid fa-people-group group-hover:opacity-0 transition-opacity duration-300 text-violet-500 text-5xl"></i>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl font-semibold whitespace-nowrap text-violet-500">
          Teams
        </span>
      </button>

      {/* Leaderboard Button */}
      <button
        className={getButtonClass("leaderboard")}
        onClick={() => handleNavigation("leaderboard")}
      >
        <i className="fa-solid fa-trophy group-hover:opacity-0 transition-opacity duration-300 text-yellow-500 text-5xl"></i>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl font-semibold whitespace-nowrap text-yellow-500">
          Leaderboard
        </span>
      </button>

      {/* Position Button */}
      <button
        className={getButtonClass("position")}
        onClick={() => handleNavigation("position")}
      >
        <i className="fa-solid fa-user group-hover:opacity-0 transition-opacity duration-300 text-cyan-400 text-5xl"></i>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl font-semibold whitespace-nowrap text-cyan-400">
          Position
        </span>
      </button>
    </div>
  );
};
export default Header;
