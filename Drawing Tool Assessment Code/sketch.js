var alt = true;
var posX, posY;
var speedX, speedY;
var facesX = [];
var facesY = [];
var fade;
var fadeAmount = 1;

let img;
let circleX;
let circleY;
let circleDiameter;

function preload() {
  img = loadImage("skull3.png");
  img2 = loadImage("welcome.png");
}

function setup() {
  let fr = 18;
  frameRate(fr);
  posX = width + 150;
  posY = height + 300;
  speedX = 2;
  speedY = 1;
  createCanvas(600, 600);
  background(12);
  imageMode(CENTER);
  for (var i = 0; i < width; i += 1) {
    facesX[i] = random(0, width);
    facesY[i] = random(0, height);
  }
}

//original array expressed with a loop
function draw() {
  imageMode(CENTER);
  blendMode(OVERLAY);
  posX += speedX;
  posY += speedY;
  image(img2, posX, posY, width / 2, height);
  let mode = [ADD, MULTIPLY];
  let modeType = random(mode);
  noStroke();
  fill(30, 44, 55, 33);
  blendMode(modeType);
  for (var i = 1; i < width; i += 5) {
    facesX[i] -= 0.5;
    if (facesX[i] < 0) facesX[i] = width;
    rect(facesX[i], facesY[i], 33, 24);
  }
  if (!alt) {
    switchup();
  } else {
    blendMode(DIFFERENCE); //add glitchiness
  }
}

// draw with a rectangle and add a new array expressed with a loop
function switchup() {
  var r;
  var g;
  var b;
  let yo = (0, 20);
  let mode = [SCREEN, ADD];
  let modeType = random(mode);
  rectMode(CENTER);
  r = random(255);
  g = random(255);
  b = random(255);
  fill(255, 110, b, 50);
  noStroke();
  blendMode(modeType);
  rect(mouseX, mouseY, mouseX + 90, mouseY - 100);
  for (var i = 1; i < width; i += 2) {
    facesX[i] -= 0.9;
    if (facesX[i] < 0) facesX[i] = width / 2;
    rect(facesX[i], facesY[i], yo, yo);
  }
}

//paint with the image brush
function mouseDragged() {
  tint(255, 25);
  blendMode(OVERLAY);
  image(img, mouseX, mouseY, mouseX, mouseY);
}

//enable alternate drawing mode
function keyPressed() {
  alt = !alt;
}
