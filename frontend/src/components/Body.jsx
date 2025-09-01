const Body = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-teal-400 to-teal-600 flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-9xl">
          <i className="fa-solid fa-basketball"></i>
        </div>
        <div className="absolute bottom-32 right-32 text-7xl">
          <i className="fa-solid fa-basketball"></i>
        </div>
        <div className="absolute top-1/2 left-10 text-6xl">
          <i className="fa-solid fa-basketball"></i>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-8">
        {/* Bouncing Basketball */}
        <div className="mb-8 flex justify-center">
          <i className="fa-solid fa-basketball text-8xl text-orange-500 animate-bounce drop-shadow-lg"></i>
        </div>

        {/* Welcome Text */}
        <h1 className="text-6xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Welcome to
        </h1>
        <h2 className="text-5xl md:text-6xl font-bold text-orange-300 drop-shadow-lg">
          NBA Dashboard!
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mt-6 opacity-90 max-w-2xl mx-auto">
          Your ultimate destination for basketball statistics, team analytics,
          and player insights
        </p>

        {/* Call to Action Button */}
        <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
          Explore Dashboard
        </button>
      </div>
    </div>
  );
};
export default Body;
