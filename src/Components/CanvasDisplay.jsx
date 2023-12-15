import "./CanvasDisplay.css";

const CanvasDisplay = ({ content }) => {
  return (
    <div className="canvas-display">
      <iframe className="iframe" src={`/src/Utilities/${content}/index.html`} />
    </div>
  );
};

export default CanvasDisplay;
