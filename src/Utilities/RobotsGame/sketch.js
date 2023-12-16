let robots = [],
  arrows = [];

let arrow_right, arrow_left, arrow_up, arrow_down;

let achievementSound;

let doorX, doorY, leftGate, rightGate;

let score = 0;

let robotCount = 0,
  totalRobots = 1;

class Robot {
  constructor(x, y) {
    this.xPos = x;
    this.yPos = y;
    this.direction = "right";

    //Dimensions for head and body
    this.headD = random(25, 50);
    this.bodyD = this.headD + random(2, 12);

    //Color for head an body
    this.headC = [
      int(random(100, 200)),
      int(random(100, 200)),
      int(random(100, 200)),
    ];
    this.bodyC;

    this.bodyC = [
      int(random(100, 200)),
      int(random(100, 200)),
      int(random(100, 200)),
    ];
    if (
      this.bodyC[0] == this.headC[0] &&
      this.bodyC[1] == this.headC[1] &&
      this.bodyC[2] == this.headC[2]
    ) {
      this.bodyC[0] =
        this.bodyC[0] + 50 > 200
          ? ((this.bodyC[0] + 50) % 200) + 100
          : this.bodyC[0] + 50;
      this.bodyC[1] =
        this.bodyC[1] + 50 > 200
          ? ((this.bodyC[1] + 50) % 200) + 100
          : this.bodyC[1] + 50;
      this.bodyC[2] =
        this.bodyC[2] + 50 > 200
          ? ((this.bodyC[2] + 50) % 200) + 100
          : this.bodyC[2] + 50;
    }

    //4 different eye types
    this.eyeType = random(4);

    //2 different mouth types
    this.mouthType = random(2);

    //Opaquness of the direction symbol(ellipse)
    this.opaq = 50;
  }

  getDirection() {
    return this.direction;
  }

  getXPos() {
    return this.xPos;
  }

  getYPos() {
    return this.yPos;
  }

  bodySize() {
    return this.bodyD;
  }

  headSize() {
    return this.headD;
  }

  display() {
    fill(255, 204, 0, this.opaq);
    noStroke();

    //Ellipse to respresent direction
    if (this.direction == "right") {
      ellipse(this.xPos - this.bodyD / 2, this.yPos, this.bodyD * 0.5);
    } else if (this.direction == "left") {
      ellipse(this.xPos + this.bodyD / 2, this.yPos, this.bodyD * 0.5);
    } else if (this.direction == "up") {
      ellipse(this.xPos, this.yPos + this.bodyD / 2, this.headD * 0.5);
    } else {
      ellipse(
        this.xPos,
        this.yPos - this.bodyD / 2 - this.headD,
        this.headD * 0.5
      );
    }

    this.opaq += 2;
    if (this.opaq > 250) this.opaq = 50; //reset

    //body
    fill(this.bodyC[0], this.bodyC[1], this.bodyC[2]);
    rect(this.xPos, this.yPos, this.bodyD);

    //head
    let headYPos = this.yPos - this.bodyD / 2 - this.headD / 2;

    fill(this.headC[0], this.headC[1], this.headC[2]);
    rect(this.xPos, headYPos, this.headD);

    fill(255);

    //position y a quarter of head's dimension, higher than the center of the head
    if (this.eyeType < 1) {
      //single rect

      rect(
        this.xPos,
        headYPos - this.headD / 4,
        this.headD * 0.75,
        this.headD * 0.25
      );
    } else if (this.eyeType < 2) {
      //single ellipse

      ellipse(
        this.xPos,
        headYPos - this.headD / 4,
        this.headD * 0.75,
        this.headD * 0.2
      );
    }

    //For x positions, left eye 25% less than the the center, right eye 25% greater than the center
    else if (this.eyeType < 3) {
      //Double rect

      //left
      rect(
        this.xPos - this.headD * 0.25,
        headYPos - this.headD / 4,
        this.headD * 0.1,
        this.headD * 0.2
      );

      //right
      rect(
        this.xPos + this.headD * 0.25,
        headYPos - this.headD / 4,
        this.headD * 0.1,
        this.headD * 0.2
      );
    } else {
      //Double ellipse

      //left
      ellipse(
        this.xPos - this.headD * 0.25,
        headYPos - this.headD / 4,
        this.headD * 0.2
      );

      //right
      ellipse(
        this.xPos + this.headD * 0.25,
        headYPos - this.headD / 4,
        this.headD * 0.2
      );
    }

    if (this.mouthType > 1) {
      //half ellipse
      arc(
        this.xPos,
        headYPos + this.headD * 0.25,
        this.headD * 0.75,
        this.headD * 0.2,
        0,
        radians(180),
        PIE
      );
    }
  }

  move() {
    for (let i = 0; i < arrows.length; ++i) {
      //Check for each arrow
      let currDist = dist(
        arrows[i].getXPos(),
        arrows[i].getYPos(),
        this.xPos,
        this.yPos
      );

      if (currDist < this.bodyD / 2) {
        //In this case set a new direction for the robot
        this.direction = arrows[i].getDirect();
      }

      if (currDist < this.bodyD + 25) {
        //Line that indicates the disatance between an arrow and a robot
        stroke(0); //identifies the stroke color
        let m = map(
          1 / (currDist == 0 ? 1 : currDist),
          1 / (this.bodyD + 25),
          1,
          1,
          10
        ); //As the distance get closer to 1 the larger will be the mapped value for stoke weight
        strokeWeight(m);
        line(this.xPos, this.yPos, arrows[i].getXPos(), arrows[i].getYPos());
      }
    }

    if (this.direction == "right") {
      this.xPos += 1;
    } else if (this.direction == "left") {
      this.xPos -= 1;
    } else if (this.direction == "up") {
      this.yPos -= 1;
    } else {
      this.yPos += 1;
    }
  }
}

class Arrow {
  constructor(x, y) {
    this.xPos = x;
    this.yPos = y;

    this.direct;
    let r = random(4);

    if (r < 1) this.direct = "right";
    else if (r < 2) this.direct = "left";
    else if (r < 3) this.direct = "up";
    else this.direct = "down";

    this.clickBuffer = 0;
  }

  getDirect() {
    return this.direct;
  }

  getXPos() {
    return this.xPos;
  }

  getYPos() {
    return this.yPos;
  }

  display() {
    if (this.direct == "right") {
      image(arrow_right, this.xPos, this.yPos);
    } else if (this.direct == "left") {
      image(arrow_left, this.xPos, this.yPos);
    } else if (this.direct == "up") {
      image(arrow_up, this.xPos, this.yPos);
    } else {
      image(arrow_down, this.xPos, this.yPos);
    }
  }

  checkClick() {
    if (
      dist(mouseX, mouseY, this.xPos, this.yPos) <= 25 &&
      this.clickBuffer < 0
    ) {
      this.clickBuffer = 60;

      if (this.direct == "right") {
        this.direct = "down";
      } else if (this.direct == "left") {
        this.direct = "up";
      } else if (this.direct == "up") {
        this.direct = "right";
      } else {
        this.direct = "left";
      }
    } else {
      --this.clickBuffer;
    }
  }
}

function checkBoundry(robot) {
  if (
    (robot.getDirection() == "right" &&
      robot.getXPos() - robot.bodySize() * 0.75 > width) ||
    (robot.getDirection() == "left" &&
      robot.getXPos() < robot.bodySize() * -0.75) ||
    (robot.getDirection() == "up" &&
      robot.getYPos() < robot.bodySize() * -0.75) ||
    (robot.getDirection() == "down" &&
      robot.getYPos() > height + robot.bodySize() + robot.headSize() * 1.5)
  ) {
    return false;
  }
  return true;
}

function placeDoor() {
  let d = random(4);
  if (d < 1) {
    //top
    doorX = int(random(1, 8)) * 100;
    doorY = 0;
    leftGate = [doorX + 35, doorY + 25];
    rightGate = [doorX - 35, doorY + 25];
  } else if (d < 2) {
    //right
    doorX = width;
    doorY = int(random(1, 8)) * 75;
    leftGate = [doorX - 25, doorY + 35];
    rightGate = [doorX - 25, doorY - 35];
  } else if (d < 3) {
    //bottom
    doorX = int(random(1, 8)) * 100;
    doorY = height;
    leftGate = [doorX - 35, doorY - 25];
    rightGate = [doorX + 35, doorY - 25];
  } else {
    //left
    doorX = 0;
    doorY = int(random(1, 8)) * 75;
    leftGate = [doorX + 25, doorY - 35];
    rightGate = [doorX + 25, doorY + 35];
  }
}

function mousePressed() {
  if (robotCount != totalRobots) loop();
}

function stopLoop() {
  //This is needed because calling noLoop is not allowed from draw
  noLoop();
}

function preload() {
  //Images
  arrow_right = loadImage("Images/Arrows/arrow_right.png");
  arrow_left = loadImage("Images/Arrows/arrow_left.png");
  arrow_up = loadImage("Images/Arrows/arrow_up.png");
  arrow_down = loadImage("Images/Arrows/arrow_down.png");

  //Sound
  achievementSound = document.getElementById("achievement-sound");
}

function setup() {
  createCanvas(800, 600).parent("canvas-container");
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  let x = 100,
    y = 75;
  while (y < height) {
    while (x < width) {
      arrows.push(new Arrow(x, y));
      x += 100;
    }
    x = 100;
    y += 75;
  }

  placeDoor();
  noLoop();
}

function draw() {
  clear();
  background(87);

  fill(165, 42, 42); //brown for the wooden doors
  noStroke();

  //Gates of the door
  if (doorY == 0) {
    // door is at top
    rect(leftGate[0], leftGate[1], 20, 50);
    rect(rightGate[0], rightGate[1], 20, 50);
  } else if (doorX == width) {
    //right
    rect(leftGate[0], leftGate[1], 50, 20);
    rect(rightGate[0], rightGate[1], 50, 20);
  } else if (doorY == height) {
    //bottom
    rect(leftGate[0], leftGate[1], 20, 50);
    rect(rightGate[0], rightGate[1], 20, 50);
  } else {
    rect(leftGate[0], leftGate[1], 50, 20);
    rect(rightGate[0], rightGate[1], 50, 20);
  }

  for (let i = 0; i < arrows.length; ++i) {
    arrows[i].display();
    arrows[i].checkClick();
  }

  if (frameCount % 360 == 0 && robotCount < totalRobots) {
    robots.push(new Robot(0, height / 2));
    ++robotCount;
  }

  for (let i = 0; i < robots.length; ++i) {
    robots[i].display();
    robots[i].move();
    if (!checkBoundry(robots[i])) {
      //when the robot moves out of the map

      //Checking for score
      //Note that height/2 or width/2 is just a generalization, there is no need to be specific
      if (
        (robots[i].getXPos() > width / 2 &&
          robots[i].getYPos() <= leftGate[1] &&
          robots[i].getYPos() >= rightGate[1]) || //right
        (robots[i].getYPos() > height / 2 &&
          robots[i].getXPos() >= leftGate[0] &&
          robots[i].getXPos() <= rightGate[0]) || //bottom
        (robots[i].getXPos() < width / 2 &&
          robots[i].getYPos() >= leftGate[1] &&
          robots[i].getYPos() <= rightGate[1]) || //left
        (robots[i].getYPos() < height / 2 &&
          robots[i].getXPos() <= leftGate[0] &&
          robots[i].getXPos() >= rightGate[0])
      ) {
        //top

        achievementSound.currentTime = 0;
        achievementSound.play();
        ++score;
        placeDoor();
      }

      robots.splice(i, 1);
      --i;
    }
  }

  noStroke();
  fill(255);
  textSize(14);
  text("Score: " + score, 720, 30);

  if (robots.length == 0 && robotCount >= totalRobots) {
    stopLoop();
    fill(0);
    ellipse(width / 2, height / 2, 350);
    fill(0, 255, 0);
    textSize(50);
    text("You Scored: ", 270, 280);
    text(str(round((score * 100) / totalRobots, 3)) + "%", 330, 350);
    select("#ply-agn-btn").show();
  }
}
