import TextContent from "./TextContent";

const RobotsGame = () => {
  return (
    <TextContent>
      <h2> Move the Robots </h2>
      <h3> Rules & Objectives </h3>
      <p>
        Your goal is to get the robots through the gate. The more robots you get
        through the higher your score will be. Gate's location will randomly
        change each time you pass a robot through the gate.
      </p>
      <p>
        A robot will appear every 6 seconds and there will be 15 robots at
        total. You don’t have a time limit once all the robots leave the screen
        the game will end.
      </p>
      <p>
        A robot will change direction based on the arrow's direction it passes
        over. Your goal is to set a route for the robots. Which you will be
        doing by moving your mouse over the arrows and they will shift
        clockwise.
      </p>
      <p>Arrows can point in 4 directions: North, East, South and West.</p>
      <p>Shift speed of the arrows is an single unit per second.</p>
      <h3> How to Play </h3>
      <p>
        <li>
          Move the mouse over an arrow and the arrow will shift clockwise{" "}
        </li>
        <li>
          You can start playing the game by clicking anywhere over the canvas
        </li>
      </p>
    </TextContent>
  );
};

export default RobotsGame;
