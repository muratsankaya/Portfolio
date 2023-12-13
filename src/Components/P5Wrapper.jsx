import React, { useRef, useEffect, useState } from "react";
import p5 from "p5";

const P5Wrapper = ({ sketch }) => {
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    // Initial resize
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      const p5Instance = new p5(
        (p) => sketch(p, dimensions),
        containerRef.current
      );

      return () => {
        p5Instance.remove();
      };
    }
  }, [dimensions, sketch]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default P5Wrapper;
