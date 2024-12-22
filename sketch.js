function setup() {
  createCanvas(windowWidth, windowHeight);
  iOSfullscreen();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  const radius = width / 5;
  const markSize = width / 20;
  const param = frameCount * 0.02;
  circle(cos(param) * radius, sin(param) * radius, markSize);
}
