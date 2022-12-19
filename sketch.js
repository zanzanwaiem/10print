let fire;
let lSlider, love;

function setup() {
  createCanvas(1000, 1000);
  fire = new ParticleSystem(createVector(width / 2, height / 2));
  lSlider = createSlider(0, 100, 0);
  lSlider.position(1020, 20);
  textAlign(CENTER);
}

function draw() {
  background(0);
  love = lSlider.value();

  for (i = 0; i < 10; i++) {
    blendMode(ADD);
    fire.addParticle();
    fire.run(love);
  }
}

function keyReleased() {
  if (key == 's' || key == 'S') {
    saveCanvas('screenshot', 'png');
  }

  if (key == 'r' || key == 'R') {
    blendMode(NORMAL);
    background(0);
    reset();
  }
}