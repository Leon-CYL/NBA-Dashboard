import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import TeamBody from "./components/TeamBody";
import LeaderboardBody from "./components/LeaderboardBody";
import PositionBody from "./components/PositionBody";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <Body />;
      case "teams":
        return <TeamBody />;
      case "leaderboard":
        return <LeaderboardBody />;
      case "position":
        return <PositionBody />;
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
