import CanvasDisplay from "./CanvasDisplay";
import SpaceShooterGame from "./InteractiveProjects/SpaceShooterGame";
import RobotsGame from "./InteractiveProjects/RobotsGame";
import TopDownShooterGame from "./InteractiveProjects/TopDownShooterGame";
import VRExperience from "./InteractiveProjects/VRExperience";
import "./Project.css";

const getProjectDescription = (project) => {
  switch (project) {
    case "SpaceShooterGame":
      return <SpaceShooterGame />;
    case "RobotsGame":
      return <RobotsGame />;
    case "TopDownShooterGame":
      return <TopDownShooterGame />;
    case "VRExperience":
      return <VRExperience />;
    default:
      console.error(`Description for the project ${project} does not exist`);
  }
};

const Project = ({ project }) => {
  return (
    <div className="project">
      {getProjectDescription(project)}
      {project !== "VRExperience" && <CanvasDisplay project={project} />}
    </div>
  );
};

export default Project;
