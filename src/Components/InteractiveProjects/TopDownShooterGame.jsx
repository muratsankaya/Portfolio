import TextContent from "./TextContent";

const TopDownShooterGame = () => {
  return (
    <TextContent>
      <h2> Top Down Shooter Game </h2>
      <p>
        This is the largest gaming project that I have created. I did not use
        many external technologies in this project. I only use p5 to render
        graphics and bgrin’s A* search algorithm (see:{" "}
        <a href="https://github.com/bgrins/javascript-astar">
          {" "}
          https://github.com/bgrins/javascript-astar{" "}
        </a>{" "}
        ). A* search is an algorithm that uses mathematical heuristics to find a
        shortest path. There are alternative heuristics that could be used for
        finding the shortest path, but I use the Manhattan distance heuristic.
        It does not always find the shortest path, but it is much faster than
        the alternative shortest path algorithms, and for my case speed of the
        algorithm is more important than the exactness of the shortest path.
      </p>
      <br />
      <h3> Rules & Objective </h3>
      <p>
        There are two different game modes. You will either choose the zombie
        game mode or the multiplayer game mode.
        <br />
        <h4> Zombie Game Mode </h4>
        You will have three options of difficulty: Easy, Medium and Hard. Anyone
        that has experience with computer games can begin with the Medium level
        of difficulty. I do not recommend anyone to start with the Hard level of
        difficulty before playing the game at least once with another
        difficulty.
        <br />
        <br />
        Your objective is to reach the highest level that you can. At each next
        level there will be more zombies than the previous, and on average they
        will have a greater speed.
        <br />
        <br />
        <h4> Multiplayer Game Mode </h4>
        Although this game mode is called multiplayer, it is not a multiplayer
        game yet. Currently, you can play against bots.
        <br />
        <br />
        Here you will have two weapons of choice. You will either choose a
        shotgun or a rifle. Rifle is more powerful if you can aim from a further
        distance. You will have more time to avoid the bullets that were shot at
        you. Shotgun is very powerful at a shorter distance, you can shoot the
        bots with multiple bullets at a time.
        <br />
        <br />
        Your objective is to get the most kills in little less than 3 minutes.
        <br />
        <br />
      </p>
      <h3> How to Play </h3>
      <p>
        Move the shooter with ‘WASD’
        <li>W - Moves the shooter north </li>
        <br />
        <li>A - Moves the shooter west</li>
        <br />
        <li>S - Moves the shooter south </li>
        <br />
        <li>D - Moves the shooter east</li>
        <br />
        <br />
        <br />
        Rotate shooter with K&L (Use this to aim)
        <br />
        <br />
        <li>K - Rotates the shooter counter clockwise </li>
        <br />
        <li>L - Rotates the shooter clockwise</li>
        <br />
        <br />
        <br />
        Shoot with Space
        <br />
        <br />
        <li>Space - Fires a bullet </li>
        <br />
        <br />
        <br />
      </p>
    </TextContent>
  );
};

export default TopDownShooterGame;
