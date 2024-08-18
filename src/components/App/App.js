import { StrictMode } from "react";
import Game from "../Game";
import Header from "../Header";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <StrictMode>
          <Game />
        </StrictMode>
      </div>
    </div>
  );
}

export default App;
