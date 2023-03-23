let score = 0;

function setup() {
  createCanvas(700, 600);
  soundtrack.loop();
}

function draw() {
  background(roadTexture);
  drawOfficer();
  officerControl();
  drawCars();
  carMovement();
  officerCollision();
  createScore();
  playerScore();
  borders();
}

function createScore () {
  stroke (255);
  textAlign(LEFT);
  textSize (25);
  fill (0);
  text (score, 5, 30);
}

function playerScore () {
  if (yOfficer < 0) {scoreSound.play(); xOfficer = 310; yOfficer = 553; score += 1}
}