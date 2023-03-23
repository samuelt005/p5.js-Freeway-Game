
function preload () {
  //sounds
  hitSound = loadSound("assets/sounds/hit.mp3");
  scoreSound = loadSound("assets/sounds/score.mp3");
  soundtrack = loadSound("assets/sounds/soundtrack.mp3");
  //textures
  roadTexture = loadImage("assets/textures/road.png");
  officerTexture = loadImage("assets/textures/officer.png");
  car1Texture = loadImage("assets/textures/car1.png");
  car2Texture = loadImage("assets/textures/car2.png");
  car3Texture = loadImage("assets/textures/car3.png");
  carsTexture = [car1Texture, car3Texture, car2Texture, car2Texture, car1Texture, car3Texture];
}

//sounds
let hitSound;
let scoreSound;
let soundtrack;

//textures
let roadTexture;
let officerTexture;
let car1Texture;
let car2Texture;
let car3Texture;