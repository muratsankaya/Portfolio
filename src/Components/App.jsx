import "./App.css";
import P5Wrapper from "./P5Wrapper";
import background from "../Utilities/background";
import CanvasDisplay from "./CanvasDisplay";
import Introduction from "./InteractiveProjects/Introduction";
import Project from "./Project";

const App = () => {
  const interactiveProjects = [
    "SpaceShooterGame",
    "RobotsGame",
    "TopDownShooterGame",
    "VRExperience",
  ];
  return (
    <div className="app">
      <div className="background">
        <P5Wrapper sketch={background} />
      </div>
      <div className="interactive-projects">
        <Introduction />
        {interactiveProjects.map((project) => (
          <Project key={project} project={project} />
        ))}
      </div>
    </div>
  );
};

export default App;
