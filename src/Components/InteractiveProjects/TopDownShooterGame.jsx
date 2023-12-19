import TextContent from "./TextContent";

const TopDownShooterGame = () => {
  return (
    <TextContent>
      <div>
        {" "}
        <h2> Top Down Shooter Game </h2>
        <p>
          This is the most significant project I created using the p5 framework.
          While developing this project I wanted to challange myself and instead
          of using any 2D physics engine I developed functions for some basic
          mechanics of the game. I only use p5 to render graphics and {""}
          <a href="https://github.com/bgrins/javascript-astar">
            bgrin’s A* search algorithm
          </a>{" "}
          to calculate shoretest paths. A* search is an algorithm that uses
          mathematical heuristics to find a shortest path.It does not always
          find the shortest path, but it is much faster than the alternative
          shortest path algorithms.
        </p>
      </div>
      <div>
        <div>
          <h3> Rules & Objective </h3>
          <p>
            There are two different game modes: <b>Zombies</b> or{" "}
            <b>Multiplayer</b>
          </p>
        </div>
        <div>
          <h4> Zombie Game Mode </h4>
          <p>
            There are three options of difficulty: Easy, Medium and Hard. Anyone
            that has experience with computer games can begin with the Medium
            level of difficulty. I do not recommend anyone to try the Hard level
            of difficulty, before playing the game at least once with an
            alternative level difficulty.
          </p>
          <p>
            Your goal is to ascend to the highest level possible. As you
            progress to each subsequent level, you'll encounter an increasing
            number of zombies. Additionally, the typical characteristics of
            these zombies will evolve in a way that heightens the challenge for
            the player.
          </p>
        </div>
        <div>
          <h4> Multiplayer Game Mode </h4>
          <p>
            Although this game mode is called multiplayer, it is not a
            multiplayer game yet. Currently, you can only play against bots.
          </p>
          <p>
            In this game, you are equipped with a choice between two potent
            weapons: a shotgun or a rifle. Opt for the rifle if you excel in
            targeting from long distances, leveraging its enhanced power. This
            strategic distance also affords you more time to dodge incoming
            bullets. Alternatively, the shotgun is highly effective at close
            range, allowing you to unleash a barrage of bullets simultaneously,
            striking multiple targets with each shot.
          </p>
          <p>
            Your primary objective is to maximize your kill count in just under
            3 minutes. Employ your skills and strategic thinking to outmaneuver
            and outgun your opponents within this tight timeframe.
          </p>
        </div>
      </div>
      <div>
        <h3> How to Play </h3>
        <ul>
          <li>Move the shooter with `WASD`</li>
          <ul>
            <li>W - Moves the shooter north </li>
            <li>A - Moves the shooter west</li>
            <li>S - Moves the shooter south </li>
            <li>D - Moves the shooter east</li>
          </ul>
          <li>Rotate shooter with K&L (Use this to aim)</li>
          <ul>
            <li>K - Rotates the shooter counter clockwise </li>

            <li>L - Rotates the shooter clockwise</li>
          </ul>
          <li>Shoot with Space</li>
          <ul>
            <li>Space - Fires a bullet </li>
          </ul>
        </ul>
        {/* <span style={{ color: "green" }}>
          {" "}
          You can always refer to the instructions box on the right of the
          canvas{" "}
        </span> */}
        <p style={{ color: "green" }}>
          {" "}
          You can always refer to the instructions box on the right of the
          canvas{" "}
        </p>
      </div>
    </TextContent>
  );
};

export default TopDownShooterGame;
