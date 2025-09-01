const Header = () => {
  return (
    <div className="flex justify-around items-center px-4 py-8 bg-teal-600 text-4xl">
      <div className="flex flex-col items-center">
        <i className="fa-solid fa-basketball"></i>
        <div className="text-2xl mt-2">NBA Dashboard</div>
      </div>

      {/* Home Button */}
      <button className="group relative flex items-center justify-center w-16 h-16 transition-all duration-300">
        <i className="fa-solid fa-house group-hover:opacity-0 transition-opacity duration-300"></i>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl font-semibold whitespace-nowrap">
          Home
        </span>
      </button>

      {/* Teams Button */}
      <button className="group relative flex items-center justify-center w-16 h-16 transition-all duration-300">
        <i className="fa-solid fa-people-group group-hover:opacity-0 transition-opacity duration-300"></i>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl font-semibold whitespace-nowrap">
          Teams
        </span>
      </button>

      {/* Leaderboard Button */}
      <button className="group relative flex items-center justify-center w-16 h-16 transition-all duration-300">
        <i className="fa-solid fa-trophy group-hover:opacity-0 transition-opacity duration-300"></i>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl font-semibold whitespace-nowrap">
          Leaderboard
        </span>
      </button>

      {/* Position Button */}
      <button className="group relative flex items-center justify-center w-16 h-16 transition-all duration-300">
        <i className="fa-solid fa-user group-hover:opacity-0 transition-opacity duration-300"></i>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl font-semibold whitespace-nowrap">
          Position
        </span>
      </button>
    </div>
  );
};
export default Header;
