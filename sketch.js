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
  // background(255,255,255);
}


function draw() {
  if(frameCount % (interval * 1800) == 0){
    z = 15;
  }
  canvas.style('z-index', z);

  // let m = 0;
  if (frameCount % (interval * 30) == 0 && mouseX == pmouseX && mouseY == pmouseY) {
    stroke(75, 127, 82);
    noFill();
    circle(mouseX, mouseY, random(50,500));
  } 

  // draw cross every time mouse is dragged
  if (mouseIsPressed) {
    fill(59, 142, 165);
    noStroke();
    rectMode(CENTER);
    rect(mouseX, mouseY, 10, 1);
    rect(mouseX, mouseY, 1, 10);
    return false;
  } 

  
  //draw a dashed line with arrows to indicate mouse movement 
  mX = mouseX;
  mY = mouseY;

  p = createVector(premX, premY);
  v = createVector(mX,mY);
  // drawArrow(p, v, 'black');
  sl = new SlopeLine(p.x, p.y, v.x, v.y, 5, 20);
  sl.display();
  
  premX = mX;
  premY = mY;
  
}

//https://p5js.org/reference/#/p5.Vector/heading

// function drawArrow(base, vec, myColor) {
//   push();
//   stroke(myColor);
//   strokeWeight(1);
//   fill(myColor);
//   line(base.x, base.y, vec.x, vec.y);
//   translate(mouseX, mouseY);
//   let angle = atan2(mouseY - pmouseY, mouseX - pmouseX);
//   let arrowSize = 4;
//   rotate(angle);
//   triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
//   pop();
// }


//https://www.gorillasun.de/blog/dashed-lines-in-p5js/
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
    let arrowSize = 9;
    translate(mouseX, mouseY);
    rotate(this.S);
    stroke("red");
    fill("red");
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
  }
}

// draw cross every time mouse is dragged
// function mouseIsPressed() {
//   fill(59, 142, 165);
//   noStroke();
//   rectMode(CENTER);
//   let angle = atan2(mouseY - pmouseY, mouseX - pmouseX);
//   rotate(angle);
//   rect(mouseX, mouseY, 10, 1);
//   rect(mouseX, mouseY, 1, 10);
//   return false;
// }

// draw ellipse every time mouse is clicked
function mousePressed() {
    noStroke();
    fill(244, 211, 94);
    ellipse(mouseX, mouseY, 20, 20);
    return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}