let stars = [],
WIDTH = window.innerWidth,
HEIGHT = window.innerHeight,
FPS = 20,
NUM_STARS = WIDTH;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  
  for (let i = 0; i < NUM_STARS; i++) {
    stars.push({
      x: 0,
      y: 0,
      offset: Math.random() * 360,
      orbit: (Math.random()+0.01) * max(WIDTH, HEIGHT),
      radius: Math.random() * 2,
      vx: Math.floor(Math.random() * 10) - 5,
      vy: Math.floor(Math.random() * 10) - 5
    });
  }
  
  frameRate(FPS);
  loop();
}

function draw() {
  background(24, 24, 24);
  push();
  noFill();
  colorMode(RGB, 255, 255, 255, 1);
  stroke(240,240,240, 1);
  strokeCap(ROUND);
  strokeWeight(2);
  for (let i = 0, x = stars.length; i < x; i++) {
    let s = stars[i];
    ellipse(s.x, s.y, s.radius, 0);
  }
  pop();
  update();
}

function update() {
  let originX = WIDTH / 2;
  let originY = HEIGHT / 2;
  
  for (let i = 0, x = stars.length; i < x; i++) {
    let s = stars[i];
    let rad = (frameCount * (1/(s.orbit*2 + s.offset)) + s.offset) % TAU;
    s.x = (originX + cos(rad)*(s.orbit*2));
    s.y = (originY + sin(rad)*(s.orbit));
  }
}

function windowResized() {
  WIDTH = window.innerWidth,
  HEIGHT = window.innerHeight,
  resizeCanvas(WIDTH, HEIGHT);
}