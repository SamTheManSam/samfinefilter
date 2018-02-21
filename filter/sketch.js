let capture;
let slider0;
let slider1;
let slider2;
let slider3;
let silder4;

function setup() {
  createCanvas(620, 440);
  capture = createCapture(VIDEO);
    capture.size(620, 440);
    //controls resolution
   slider0 = createSlider(3,6,4,0.01);
   //controls 'tint' or the color the circles are
   slider1 = createSlider(0,255,0,0.1);
   slider2 = createSlider(0,255,0,0.1);
   slider3 = createSlider(0,255,0,0.1);
   //controls invert option
   slider4 = createSlider(0,255,255,0.1);
  noStroke();
  textSize(20);
  fill(255,0,255);
  //why isn't the tet showing up?
push();
translate(0,200);
//I considered using object syntax for these text boxes however, I decided that would unnecesarily complicate things
  text("Number of Circles",75,200); 
  text("Red",75,325);
  text("Blue",75,350);
  text("Invert!",75,375);
pop();
  slider0.position(125,475);
  slider1.position(125,500);
  slider2.position(125,525);
  slider3.position(125,550);
  slider4.position(125,575);

}

function draw() {
  let val1 = slider1.value();
  let val2 = slider2.value();
  let val3 = slider3.value();
  let val4 = slider4.value();
  //this tells the circles on the image to have an RGB of val1,val2,val3 respectively
  fill(val1,val2,val3);
  background(255);
  //pixelates the video
  capture.loadPixels();
  let val0 = slider0.value();
  let stepSize = round(constrain(1, val0, 32));
  for (let y=0; y<height; y+=stepSize) {
    for (let x=0; x<width; x+=stepSize) {
      let i = y * width + x;
      //val4 is what inverts the image, when val4=255, it is normal, but when it is 0, it is inverted
      let darkness = (val4 - capture.pixels[i*4]) / 255;
      let radius = stepSize * darkness;
      //actual circles that will show up
      ellipse(x, y, radius, radius);
    }
  }
}
