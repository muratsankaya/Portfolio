import "./App.css";
import P5Wrapper from "./P5Wrapper";
import background from "../Utilities/background";
import CanvasDisplay from "./CanvasDisplay";

const App = () => {
  return (
    <div className="App">
      <div className="background">
        <P5Wrapper sketch={background} />
      </div>
      <CanvasDisplay content={"SpaceShooter"} />
    </div>
  );
};

export default App;
