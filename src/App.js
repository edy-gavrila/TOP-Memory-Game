import GameArea from "./Components/GameArea";
import Header from "./Components/Header";
import ScoreContextProvider from "./Contexts/ScoreContextProvider";

function App() {
  return (
    <div className="min-h-screen bg-violet-300">
      <ScoreContextProvider>
        <Header />
        <GameArea />
      </ScoreContextProvider>
    </div>
  );
}

export default App;
