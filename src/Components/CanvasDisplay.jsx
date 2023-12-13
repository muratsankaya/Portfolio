import "./CanvasDisplay.css";
import { useRef, useEffect } from "react";

const CanvasDisplay = ({ content }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const resizeIframe = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height =
          iframeRef.current.contentWindow.document.body.scrollHeight + "px";
        iframeRef.current.style.width =
          iframeRef.current.contentWindow.document.body.scrollWidth + "px";
      }
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", resizeIframe);
    }

    // Clean up function
    return () => {
      if (iframe) {
        iframe.removeEventListener("load", resizeIframe);
      }
    };
  }, []); // Empty dependency array ensures this effect runs once after mount

  return (
    <div className="canvas-display">
      <iframe ref={iframeRef} src={`/src/Utilities/${content}/index.html`} />
    </div>
  );
};

export default CanvasDisplay;
