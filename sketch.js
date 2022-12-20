let fire;
let lSlider, love;
let RB;
let song, songPlay;
let vol = 0.5;

function setup() {
  song = loadSound('The Dawn Coming.mp3');
  songPlay = 0;

  RB = random(1);
  createCanvas(1000, 1000);
  BB();
  fire = new ParticleSystem(createVector(width / 2, height / 2));
  lSlider = createSlider(0, 100, 0);
  lSlider.position(1020, 20);
  frameRate(10);

  volume = createSlider(0, 1, vol, 0.01);
  volume.position(1020, 50);
}

function draw() {
  love = lSlider.value();

  randomBlendMode();

  for (i = 0; i < 10; i++) {

    fire.addParticle();
    fire.run(love, RB);
  }

  song.setVolume(volume.value());

  songPlayer();
}

function keyReleased() {
  if (key == 's' || key == 'S') {
    saveCanvas('screenshot', 'png');
  }

  if (key == 'r' || key == 'R') {
    blendMode(NORMAL);
    RB = random(1);
    BB();
    reset();
  }
}

function BB() {
  if (RB < 0.25) {
    background(random(15), random(30), random(15));
  } else if (RB < 0.50) {
    background(random(150, 200), random(100, 150), random(40));
  } else if (RB < 0.75) {
    background(random(15), random(30), random(15));
  } else if (RB <= 1) {
    background(200);
  }
}

function randomBlendMode() {
  if (RB < 0.25) {
    blendMode(ADD);
  } else if (RB < 0.50) {
    blendMode(BLEND);
  } else if (RB < 0.75) {
    blendMode(HARD_LIGHT);
  } else if (RB <= 1) {
    blendMode(BURN);
  }
}

function songPlayer() {
  if (love >= 90 && songPlay == 0) {
    song.play();
    songPlay = 1;
  } else if (love < 90) {
    song.stop();
    songPlay = 0;
  }
}