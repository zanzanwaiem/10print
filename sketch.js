let w = 20;
let posX, posY;

function setup() {
  createCanvas(400, 400);
  posX = 0;
  posY = 0;

  
}

function draw() {
  background(220);

  for(j = 0; j < height/w; j++){
    for(i = 0; i < width/w; i++){
      fill(random(255), random(255), random(255));
      rect(posX +w*i, posY+w*j, w);
    }
    if(posX>= width){
      posX = 0;
    }
  }
  if(posY >= height){
    posY = 0;
  }


}