import "./App.css";
import P5Wrapper from "./P5Wrapper";
import background from "../Utilities/background";
import CanvasDisplay from "./CanvasDisplay";
import Introduction from "./InteractiveProjects/Introduction";

const App = () => {
  // const interactiveProjects = [
  //   "SpaceShooterGame",
  //   "RobotsGame",
  //   "TopDownShooterGame",
  // ];
  const interactiveProjects = ["SpaceShooterGame"];
  return (
    <div className="app">
      <div className="background">
        <P5Wrapper sketch={background} />
      </div>
      <div className="interactive-projects">
        <Introduction />
        {interactiveProjects.map((project) => (
          <CanvasDisplay key={project} content={project} />
        ))}
      </div>
    </div>
  );
};

export default App;
