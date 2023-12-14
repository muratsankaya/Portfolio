import "./CanvasDisplay.css";

const CanvasDisplay = ({ content }) => {
  return (
    <div className="canvas-display">
      <iframe className="iframe" src={`/src/Utilities/${content}/index.html`} />
    </div>
  );
};

export default CanvasDisplay;

// import "./CanvasDisplay.css";
// import { useRef, useEffect, useState } from "react";

// const CanvasDisplay = ({ content }) => {
//   const iframeRef = useRef(null);
//   const [size, setSize] = useState({ width: 0, height: 0 });

//   const updateSize = () => {
//     try {
//       const iframeDocument =
//         iframeRef.current.contentDocument ||
//         iframeRef.current.contentWindow.document;
//       const newHeight = iframeDocument.body.scrollHeight + 20;
//       const newWidth = iframeDocument.body.scrollWidth + 20;
//       setSize({ width: newWidth, height: newHeight });
//     } catch (e) {
//       console.error("Error accessing iframe content: ", e);
//     }
//   };

//   useEffect(() => {
//     const iframe = iframeRef.current;
//     if (!iframe) return;

//     const loadListener = () => {
//       updateSize();
//       setTimeout(updateSize, 200);
//     };

//     iframe.addEventListener("load", loadListener);

//     return () => {
//       iframe.removeEventListener("load", loadListener);
//     };
//   }, [iframeRef.current]);

//   return (
//     <div className="canvas-display">
//       <iframe
//         className="iframe"
//         ref={iframeRef}
//         src={`/src/Utilities/${content}/index.html`}
//         width={size.width}
//         height={size.height}
//         style={{ border: "none" }}
//       />
//     </div>
//   );
// };

// export default CanvasDisplay;
