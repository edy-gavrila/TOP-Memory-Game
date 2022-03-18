import GameArea from "./Components/GameArea";
import Header from "./Components/Header";
import GameContextProvider from "./Contexts/GameContextProvider";

function App() {
  return (
    <div className="min-h-screen flex-col bg-violet-300">
      <GameContextProvider>
        <Header />
        <GameArea />
      </GameContextProvider>
    </div>
  );
}

export default App;
