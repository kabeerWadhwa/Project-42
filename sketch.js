function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  hr = hour();
  mn = minute();
  sc = second();
}

function draw() {
  background(255,255,255);
  angleMode(DEGREES);
  hrAngle = map(hr,0,60,0,360);
  mnAngle = map(mn,0,12,0,360);
  scAngle = map(sc,0,60,0,360);
  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(400,250,100,0);
  pop();
  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(400,250,100,0);
  pop();
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(400,250,100,0);
  pop();
  drawSprites();
}