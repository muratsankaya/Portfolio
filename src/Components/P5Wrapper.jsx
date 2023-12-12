import React, { useRef, useEffect, useState } from "react";
import p5 from "p5";

const P5Wrapper = ({ sketch }) => {
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Function to update dimensions
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

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this runs only once

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
  }, [dimensions, sketch]); // Re-run this effect when dimensions or sketch change

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default P5Wrapper;
