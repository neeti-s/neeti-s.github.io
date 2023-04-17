let premX = 0;
let premY = 0;
let mX, mY;
let p, v, l;
let interval = 5;
let canvas;
let z = -1;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
}


function draw() {
  if(frameCount % (interval * 1800) == 0){
    z = 15;
  }
  canvas.style('z-index', z);

  if (frameCount % (interval * 30) == 0 && mouseX == pmouseX && mouseY == pmouseY) {
    stroke(75, 127, 82);
    noFill();
    circle(mouseX, mouseY, random(50,500));
  } 

  if (mouseIsPressed) {
    fill(59, 142, 165);
    noStroke();
    rectMode(CENTER);
    rect(mouseX, mouseY, 10, 1);
    rect(mouseX, mouseY, 1, 10);
    return false;
  } 

  mX = mouseX;
  mY = mouseY;

  p = createVector(premX, premY);
  v = createVector(mX,mY);
  sl = new SlopeLine(p.x, p.y, v.x, v.y, 5, 20);
  sl.display();
  
  premX = mX;
  premY = mY;
}

class SlopeLine {
  constructor(x1, y1, x2, y2, segmentLength, spaceLength) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.segmentLength = segmentLength;
    this.spaceLength = spaceLength;

    this.L = sqrt(
      pow((this.x1 - this.x2), 2) +
      pow((this.y1 - this.y2), 2));

    this.S = atan2(this.y2 - this.y1, this.x2 - this.x1)
  }

  display() {
    push();
    strokeWeight(1);
    drawingContext.setLineDash([5, 15]);
    stroke(109, 49, 116);
    line(this.x1, this.y1,
      this.x1 + this.L * cos(this.S),
      this.y1 + this.L * sin(this.S))

    noStroke();
    fill(59, 142, 165);
    for (let i = 0; i < this.L; i += this.segmentLength + this.spaceLength) {
      let x = lerp(this.x1, this.x2, i / this.L);
      let y = lerp(this.y1, this.y2, i / this.L);
      ellipse(x, y, 3, 3);
    }

    let arrowSize = 20;
    translate(this.x2, this.y2);
    rotate(this.S + HALF_PI);
    stroke("red");
    fill("red");
    triangle(-arrowSize / 2, arrowSize, 0, arrowSize / 2, arrowSize / 2, arrowSize);
    pop();
  }
}

function mousePressed() {
    noStroke();
    fill(244, 211, 94);
    ellipse(mouseX, mouseY, 20, 20);
    return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
