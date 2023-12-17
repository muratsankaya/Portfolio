import "./Introduction.css";
import "./TextContent";
import TextContent from "./TextContent";

const Introduction = () => {
  return (
    <div className="introduction">
      <TextContent text={<h1> My Interactive Projects </h1>} />
      <TextContent
        text={
          <p>
            Here are some web-based projects that I created. Most of them are
            small games that you can try playing, and there are some projects
            that are more of an art form. All the projects are lightweight and
            they are powered by javascript and html5/css. I use the p5.js
            library to facilitate rendering mainly 2D graphics and for the
            animation logic. If you are interested check p5 out:{" "}
            <a href="https://p5js.org/reference/">
              {" "}
              https://p5js.org/reference/{" "}
            </a>
            . It has one of the best documentations among the libraries that I
            worked with. In some projects I also use additional technologies,
            libraries and external algorithms which I outline in the description
            of each project. Feel free to scroll down the window and interact
            with any project that you like.{" "}
          </p>
        }
      />
    </div>
  );
};

export default Introduction;
