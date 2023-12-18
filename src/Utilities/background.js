class Circle {
  constructor(x, y, r, rgb, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.rgb = rgb;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  move(p) {
    if (
      (this.x + this.r / 2 > p.width && this.xSpeed > 0) ||
      (this.x - this.r / 2 < 0 && this.xSpeed < 0)
    )
      this.xSpeed *= -1;
    if (
      (this.y + this.r / 2 > p.height && this.ySpeed > 0) ||
      (this.y - this.r / 2 < 0 && this.ySpeed < 0)
    )
      this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  display(p) {
    p.fill(this.rgb[0], this.rgb[1], this.rgb[2], 150); // Add saturation
    p.circle(this.x, this.y, this.r);
  }
}

const background = (p, parentDimensions) => {
  let circles = [];

  p.setup = () => {
    p.createCanvas(parentDimensions.width, parentDimensions.height);
    for (let i = 0; i < 80; ++i) {
      let xSpeed = p.random(-1.6, 1.6);
      let ySpeed = p.random(-1.6, 1.6);
      circles.push(
        new Circle(
          p.random(p.width),
          p.random(p.height),
          p.random(30, 80),
          [p.random(50, 255), p.random(50, 255), p.random(50, 255)],
          xSpeed < 0.5 && xSpeed > -0.5 ? 0.5 : xSpeed,
          ySpeed < 0.5 && ySpeed > -0.5 ? 0.5 : ySpeed
        )
      );
    }
  };

  p.draw = () => {
    p.clear();
    if (
      p.width != parentDimensions.width ||
      p.height != parentDimensions.height
    )
      p.resizeCanvas(parentDimensions.width, parentDimensions.height);
    for (let i = 0; i < circles.length; ++i) {
      circles[i].move(p);
      circles[i].display(p);
    }
  };
};

export default background;
