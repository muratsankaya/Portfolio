import TextContent from "./TextContent";

const VRExperience = () => {
  return (
    <TextContent>
      <h2> The VR Experience </h2>
      <p>
        I created this project using multiple technologies. I use p5 to render
        two dimensional graphics such as the texture that you can draw on. The
        3D dimensional world and assets used in the project are powered with
        A-Frame. The geometric shapes which are planets for the universe are
        rendered with three.js. I also used a library created by my professor at
        New York University which combines Three.js, A-frame and p5.js. The
        library is called aframep5. A-Frame and Three.js requires a lot of
        interaction with HTML. aframep5 intorduces abstractions for pure
        JavaScript development.
      </p>
      <div>
        <h3> Rules & Objective </h3>
        <p>
          There are no rules in this project. This project is more of an art
          form. Feel free to interact with it however you want. Just as a note
          for those who are familiar with A-frame. You can normally move around
          an A-Frame world with `WASD`, but I disabled that. You can only move
          around with your mouse by dragging the screen. You can change your
          location by clicking on the planets. Screen will move towards the
          planet you clicked on.
        </p>
        <p>
          The objective of this project is for you to enjoy the few minutes that
          you spend interacting.
        </p>
        <p>
          There are spaceships that fly from planet to planet, and there is a
          crew of robots that wander in space. See if you would be able to
          detect them.
        </p>
      </div>
      <div>
        <h3> How to Interact </h3>
        <ul>
          <li>Drag the screen anywhere you want.</li>

          <li>Click on any planet. Screen will move towards that planet.</li>
          <li>
            There is a scene for you to draw on a texture. You can draw on the
            texture by pressing `P` and moving your mouse over the texture.You
            can change the color or clear the texture by clicking on the spheres
            located below the texture.
          </li>
          <li>
            You can press on `R` and get back to the drawing scene any time you
            want.
            <ul>
              <li>You may need to drag the screen to center the texture</li>
            </ul>
          </li>
        </ul>
        <p style={{ color: "green" }}>
          If you have access, try it with a virtual reality machine.
        </p>
      </div>
      <div style={{ padding: "20px" }}>
        <a
          href="/VRExperience/index.html"
          style={{ fontSize: "24px", fontWeight: "500" }}
        >
          {" "}
          CLICK HERE TO VEIW THE PROJECT{" "}
        </a>
      </div>
    </TextContent>
  );
};

export default VRExperience;
