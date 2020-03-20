
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);

  rect(400,200,200,10);
  rect(450,210,100,50);

  square(400,210,50);
  square(550,210,50);
  
  triangle(400,200,425,150,450,200);
  triangle(550,200,575,150,600,200);
  
  drawSprites();
}