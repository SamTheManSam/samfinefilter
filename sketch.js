let capture;

function setup() {
  createCanvas(620, 440);
  // specify multiple formats for different browsers
  capture = createCapture(VIDEO);
    capture.size(620, 440);
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  capture.loadPixels();
  let stepSize = round(constrain(1, 4, 32));
  for (let y=0; y<height; y+=stepSize) {
    for (let x=0; x<width; x+=stepSize) {
      let i = y * width + x;
      let darkness = (255 - capture.pixels[i*4]) / 255;
      let radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}
