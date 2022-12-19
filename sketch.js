let fire;

function setup() {
  createCanvas(1000, 1000);
  fire = new ParticleSystem(createVector(width / 2, height / 2));
}

function draw() {
  background(0);

  for (i = 0; i < 10; i++) {
    blendMode(ADD);
    fire.addParticle();
    fire.run();
  }
}

function keyReleased() {
  if (key == 's' || key == 'S') {
    saveCanvas('screenshot', 'png');
  }
}