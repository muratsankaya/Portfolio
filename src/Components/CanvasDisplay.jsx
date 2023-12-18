import "./CanvasDisplay.css";

const CanvasDisplay = ({ project }) => {
  return (
    <div className="canvas-display">
      <iframe className="iframe" src={`/src/Utilities/${project}/index.html`} />
    </div>
  );
};

export default CanvasDisplay;
