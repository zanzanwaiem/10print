let fire;

function setup() {
  createCanvas(1000, 1000);
  fire = new ParticleSystem(createVector(width / 2, height / 2));
}

function draw() {
  background(0);

  blendMode(ADD);
  fire.addParticle();
  fire.run();
}

function keyReleased() {
  if (key == 's' || key == 'S') {
    saveCanvas('screenshot', 'png');
  }
}