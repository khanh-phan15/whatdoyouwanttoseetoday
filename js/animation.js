/*
 * @name Slider
 * @arialabel The background changes from yellow to black using a single slider.
 * @description Move the slider to control the background color from yellow to black.
 */
let colorSlider;

function setup() {
  // create canvas
  createCanvas(710, 400);
  textSize(15);
  noStroke();

  // create slider
  colorSlider = createSlider(0, 255, 255); // Slider from 0 (black) to 255 (yellow)
  
  // Center the slider horizontally and move it down
  const sliderX = (width - colorSlider.width) / 2; // Centering the slider
  const sliderY = height / 2; // Move it down to the middle
  colorSlider.position(sliderX, sliderY);
}

function draw() {
  const value = colorSlider.value();
  
  // Calculate background color based on slider value
  const r = value; // Red component (255 when slider is at 255, 0 when at 0)
  const g = value; // Green component (255 when slider is at 255, 0 when at 0)
  const b = 0; // Blue component is always 0
  
  background(r, g, b); // Set background color
  
  // Display the label next to the slider
  text('Yellow to Black', colorSlider.x + colorSlider.width + 10, sliderY + 15);
}