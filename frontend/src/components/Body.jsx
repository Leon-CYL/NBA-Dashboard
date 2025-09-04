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
          <i className="fa-solid fa-basketball text-9xl text-orange-500 animate-bounce drop-shadow-lg"></i>
        </div>

        {/* Welcome Text */}
        <h1 className="text-6xl md:text-7xl font-bold mb-4 drop-shadow-lg animate-fade-in">
          Welcome to
        </h1>
        <h2 className="text-5xl md:text-6xl font-bold text-orange-300 drop-shadow-lg mb-6 animate-fade-in-delay">
          NBA Dashboard!
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mt-6 opacity-90 max-w-2xl mx-auto font-semibold text-teal-100 animate-fade-in-delay-2">
          Your Ultimate Basketball Analytics Hub
        </p>
      </div>
    </div>
  );
};
export default Body;
