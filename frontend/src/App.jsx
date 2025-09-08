import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import TeamBody from "./components/TeamBody";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <Body />;
      case "teams":
        return <TeamBody />;
      case "leaderboard":
        return (
          <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-center">Leaderboard Page</h1>
          </div>
        );
      case "position":
        return (
          <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-center">Position Page</h1>
          </div>
        );
      default:
        return <Body />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderCurrentPage()}
    </div>
  );
}

export default App;
