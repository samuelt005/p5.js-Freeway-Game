//All cars related stuff
//cars
let xCars = [300, 500, 460, 710, 150, 700];
let yCars = [60, 145, 225, 315, 395, 480];
let carsSpeed = [4, 6, 2, 4, 3, 4]

function drawCars () {
  for (let i = 0; i < carsTexture.length; i++){
    image(carsTexture[i], xCars[i], yCars[i], 80, 60);
  }
}

function carMovement () {
  for (let i = 0; i < carsTexture.length; i++){
  xCars[i] -= carsSpeed[i];
  if (xCars[i] < -90) {xCars[i] = 710}
  }
}
