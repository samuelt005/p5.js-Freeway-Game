//All player movement related stuff
//officer
let xOfficer = 310;
let yOfficer = 553;
let officerSpeed = 1;
let collision = false;

function drawOfficer () {
  image(officerTexture, xOfficer, yOfficer, 40, 40);
}

function officerControl () {
  if (keyIsDown(UP_ARROW)) {yOfficer -= officerSpeed;}
  if (keyIsDown(DOWN_ARROW)) {yOfficer += officerSpeed;}
  if (keyIsDown(LEFT_ARROW)) {xOfficer -= officerSpeed;}
  if (keyIsDown(RIGHT_ARROW)) {xOfficer += officerSpeed;}
}

function officerCollision () {
  for (let i = 0; i < carsTexture.length; i++){
    collision = collideRectRect(xCars[i], yCars[i], 80, 60, xOfficer, yOfficer, 30, 30)
    if (collision) {hitSound.play(); xOfficer = 310; yOfficer = 553; if (scoreTrue()) {score -= 1}}
  }
}

function scoreTrue () {
  return score > 0;
}

function borders () {
  if (xOfficer < 0) {xOfficer = 0}
  if (xOfficer > 660) {xOfficer = 660}
  if (yOfficer > 561) {yOfficer = 561}
  
}