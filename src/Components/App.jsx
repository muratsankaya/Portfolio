import "./App.css";
import P5Wrapper from "./P5Wrapper";
import background from "../Utilities/background";
import CanvasDisplay from "./CanvasDisplay";

const App = () => {
  const interactiveProjects = [
    "SpaceShooterGame",
    "RobotsGame",
    "TopDownShooterGame",
  ];
  return (
    <div className="App">
      <div className="background">
        <P5Wrapper sketch={background} />
      </div>
      <div className="interactive-projects">
        {interactiveProjects.map((project) => (
          <CanvasDisplay key={project} content={project} />
        ))}
      </div>
    </div>
  );
};

export default App;
