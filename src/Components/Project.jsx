import CanvasDisplay from "./CanvasDisplay";
import SpaceShooterGame from "./InteractiveProjects/SpaceShooterGame";
import RobotsGame from "./InteractiveProjects/RobotsGame";
import TopDownShooterGame from "./InteractiveProjects/TopDownShooterGame";
import "./Project.css";

const getProjectDescription = (project) => {
  switch (project) {
    case "SpaceShooterGame":
      return <SpaceShooterGame />;
    case "RobotsGame":
      return <RobotsGame />;
    case "TopDownShooterGame":
      return <TopDownShooterGame />;
    default:
      console.error(`Description for the project ${project} does not exist`);
  }
};

const Project = ({ project }) => {
  return (
    <div className="project">
      {getProjectDescription(project)}
      <CanvasDisplay project={project} />
    </div>
  );
};

export default Project;
