//Paddle x position
let xPosP = 195;

//Ball x position
let xPosB = 250;
let yPosB = 275;

//Ball speed
let xSpeed = 0,
  xSpeedOrig = 0;
let ySpeed = 0;

let isGameOn = false;

//the object that the user will aim at
let targetObject;

//Object positon
let xPosO, yPosO;

let bounceCount = 0;
let ufoCount = 0;

//to change the color of the ball
let colorCursor1 = 1,
  colorCursor2 = 0;
let ballColorList = [100, 100, 100];

//sound objects
let gameOverS, shipCaughtS, spaceBounceS;

//background
let starField1, startField2;
let yPosSF1 = 500,
  yPosSF2 = -500;

//For the game over and replay logic
let scoreBoard,
  gameOver = false,
  playAgainButton,
  timer = 0;

function preload() {
  targetObject = loadImage("Images/ufo.png");
  starField1 = loadImage("Images/starfield.png");
  starField2 = loadImage("Images/starfield.png");
  gameOverS = document.getElementById("game-over-sound");
  shipCaughtS = document.getElementById("ship-caught-sound");
  spaceBounceS = document.getElementById("bounce-sound");
}

function playAgain() {
  window.location.reload();
}

function setup() {
  //set the background size of our canvas
  //if you change the size
  //don't forget to upadete the
  //starting positons of the paddle and the ball
  createCanvas(500, 550).parent("canvas-container");

  scoreBoard = createGraphics(250, 250);
  playAgainButton = createButton("Play Again").hide(); //don't display the button yet
  playAgainButton.position(220, 320);
  playAgainButton.mousePressed(playAgain);

  background(0);

  fill(120);
  noStroke();

  //left border
  rect(0, 0, 20, height);

  //top border
  rect(0, 0, width, 20);

  //right border
  rect(width - 20, 0, 20, height);

  fill(255);

  //user controlled paddle
  rect(xPosP, height - 20, 110, 16);

  //Visual ball
  ellipse(xPosB, yPosB, 14);

  imageMode(CENTER);

  text("Bounces: " + bounceCount + " UFO's: " + ufoCount, 15, 15);
}

function draw() {
  //erase the screen
  clear();

  if (timer > 7200 || gameOver) {
    isGameOn = false;
    gameOver = true;
  }

  yPosSF1 += 2;
  yPosSF2 += 2;

  //Image is in the center mode
  if (yPosSF1 > 1450) yPosSF1 = -500;
  if (yPosSF2 > 1450) yPosSF2 = -500;

  //background image
  image(starField1, 250, yPosSF1);
  image(starField2, 250, yPosSF2);

  fill(120);
  noStroke();

  //left border
  rect(0, 0, 20, height);

  //top border
  rect(0, 0, width, 20);

  //right border
  rect(width - 20, 0, 20, height);

  fill(255);

  //user contolled paddle movement
  if (keyIsDown(65) && xPosP > 25) {
    xPosP -= 3;
  } else if (keyIsDown(68) && xPosP + 110 < width - 25) {
    xPosP += 3;
  }

  //ball movement
  if (xPosB > width - 30 || xPosB < 30) {
    xSpeed *= -1;
    bounceCount += 1;
    spaceBounceS.currentTime = 0;
    spaceBounceS.play();
  }

  if (yPosB < 30) {
    ySpeed *= -1;
    spaceBounceS.currentTime = 0;
    spaceBounceS.play();
    bounceCount += 1;
  } else if (
    xPosB >= xPosP - 15 &&
    xPosB <= xPosP + 115 &&
    yPosB > height - 30 &&
    yPosB < height - 25
  ) {
    let currxSpeed = abs(xSpeed);

    if (xPosB < xPosP + 25 || xPosB > xPosP + 85) {
      //if it hits the corners I'm mapping the xSpeed to a grater range
      //I have to decide on the new range manually
      //If I constantly increase the range it will get too speedy
      xSpeed = map(xSpeed, -currxSpeed, currxSpeed, -6, 7);
    } else {
      //if it doesn't hit the corners, I'm mapping it back according to its orginal speed
      xSpeed = map(xSpeed, -currxSpeed, currxSpeed, -xSpeedOrig, xSpeedOrig);

      //If it get mapped to a value less then 2
      //movement of the ball is too slow
      if (xSpeed < 2 && xSpeed >= 0) xSpeed = 3;
      else if (xSpeed > -2 && xSpeed <= 0) xSpeed = -3;
    }

    ySpeed *= -1;

    //there is a certain interval which causes a bug (yPosB > height-30 && yPosB < height - 25)
    //when the ball hits the paddle
    //therefore I'm making sure the ball distances
    //itself away from that interval
    yPosB -= 5;

    spaceBounceS.currentTime = 0;
    spaceBounceS.play();
    bounceCount += 1;
  }

  //Collission detection
  if (dist(xPosB, yPosB, xPosO, yPosO) < 50) {
    xPosO = random(70, width - 70);
    yPosO = random(70, height - 250);
    ufoCount += 1;
    shipCaughtS.currentTime = 0;
    shipCaughtS.play();
  }

  //Game over
  if (yPosB - 10 > height && isGameOn) {
    gameOverS.currentTime = 0;
    gameOverS.play();
    isGameOn = false;
    gameOver = true;
  }

  if (isGameOn) {
    xPosB += xSpeed;
    yPosB += ySpeed;

    //After the game is over
    //Ufo should not be visible
    image(targetObject, xPosO, yPosO);

    ++timer;
  }

  //user controlled paddle
  rect(xPosP, height - 20, 110, 16);

  text("Bounces: " + bounceCount + " UFO's: " + ufoCount, 15, 15);

  if (ballColorList[colorCursor1] > 250) {
    colorCursor1 += 1;
    colorCursor1 %= 3;
    colorCursor2 += 1;
    colorCursor2 %= 3;
  }

  if (ballColorList[colorCursor2] > 100) ballColorList[colorCursor2] -= 2;
  ballColorList[colorCursor1] += 2;

  fill(ballColorList[0], ballColorList[1], ballColorList[2]);

  //Visual ball
  ellipse(xPosB, yPosB, 14);

  if (gameOver) {
    scoreBoard.background(255);
    scoreBoard.textSize(20);
    scoreBoard.textStyle(BOLD);
    scoreBoard.text("CONGRATULATIONS !!!", 15, 80);
    scoreBoard.text("YOU CATCHED '" + ufoCount + "' UFO'S", 1, 110);
    image(scoreBoard, 250, 250);
    playAgainButton.show();
  }
}

function mousePressed() {
  if (!isGameOn && !gameOver) {
    isGameOn = true;

    //positon the object
    xPosO = random(70, width - 70);
    yPosO = random(70, height - 250);

    //Assign a random speed for the ball
    xSpeed = random(-4, 5);
    xSpeedOrig = abs(xSpeed);

    if (xSpeed >= 0 && xSpeed < 2) {
      xSpeed = 3;
    } else if (xSpeed > -2 && xSpeed <= 0) {
      xSpeed = -3;
    }

    ySpeed = random(-4, 5);

    if (ySpeed >= 0 && ySpeed < 2) {
      ySpeed = 3;
    } else if (ySpeed > -2 || ySpeed <= 0) {
      ySpeed = -3;
    }
  }
}
