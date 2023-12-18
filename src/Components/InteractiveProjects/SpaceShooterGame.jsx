import TextContent from "./TextContent";

const SpaceShooterGame = () => {
  return (
    <TextContent>
      <h2> Space Shooter </h2>
      <h3> Rules & Objectives </h3>
      <p>
        Your goal is to catch the ufos with the ball. You will only have a{" "}
        <span style={{ color: "red" }}> single life</span> if you miss the ball
        and the ball leaves the screen the game will be over. The game is not
        challenging but you will only have{" "}
        <span style={{ color: "red" }}>two minutes</span> to catch as many ufos
        as you can. If you want a challenge try catching more than 25 Ufos in
        two minutes.
      </p>
      <p>
        Ufos will always appear above a certain height and the collision
        dynamics is as follows: If the ball hits either corner of the paddle the
        ball will speed up and will have a more horizontal motion. If the ball
        hits towards the center it will slow down and will have a more vertical
        motion.
      </p>
      <h3> How to Play </h3>
      <p>
        <li>`A` - move the paddle left </li>
        <li>`D` - move the paddle right </li>
        <li>
          You can start playing the game by clicking on the mouse over the
          canvas.
        </li>
      </p>
    </TextContent>
  );
};

export default SpaceShooterGame;
