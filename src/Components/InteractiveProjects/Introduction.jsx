import "./Introduction.css";
import "./TextContent";
import TextContent from "./TextContent";

const Introduction = () => {
  return (
    <div className="introduction">
      <TextContent>
        <h1> My Interactive Projects </h1>
        <p>
          Here are some web-based projects that I created using the p5 framework
          between September 2022 - December 2022. Most of them are small games
          that you can try playing, and there are some projects that are more of
          an art form. All the projects are lightweight and they are powered
          solely with JavaScript and HTML/CSS. I use the {""}
          <a href="https://p5js.org/reference/">p5.js </a> library to facilitate
          rendering mainly 2D graphics and for the animation logic. In some
          projects I also use additional technologies, libraries and external
          algorithms which I outline in the description of each project. Feel
          free to scroll down the window and interact with any project that you
          like.
        </p>
      </TextContent>
    </div>
  );
};

export default Introduction;
