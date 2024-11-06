let bg;

function preload(){
  bg = loadImage("background.jpeg");
}

function setup() {
  // createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  angleMode(DEGREES)
}

function draw() {
  // draw it first so it becomes background
  image(bg, 0, 0, width, height)
  // background(255)
 drawCat();
  
}




//CODE FOR DRAWING THE CAT

function drawCat(){
  fill(0);
  noStroke();
  //face
  rect(width/2,height/2,100,80,25,25,50,50);
  //body
  rect(width/2,height/2 + 90,100,120,50,50,10,10);
  //tail
  push()
  translate(width/2 + 30,height/2 + 100)
  rotate(map(mouseY,0, height,-45, -30));
  rect(50,0,100,15,100);
  fill(255)
  rect(100,0,10,1,100);
  rect(100,2,10,1,100);
  rect(100,4,10,1,100);
  pop()
  //ears
  triangle(width/2 - 50, height/2 - 50, width/2 - 50, height/2 - 20, width/2 - 30, height/2 - 30)
   triangle(width/2 + 50, height/2 - 50, width/2 + 50, height/2 - 20, width/2 + 30, height/2 - 30)
  //nose
  fill(255,200,255)
  triangle(width/2, height/2 + 5, width/2 - 5, height/2, width/2 + 5, height/2);
  //eyes
  fill(255)
  ellipse(width/2 - 30,height/2,30,20);
  ellipse(width/2 + 30,height/2,30,20);
  fill(0,0,0)
  let factor = 0;
  if(mouseX < width){
     factor = map(mouseX, 0, width, -10, 10);
  }
  ellipse(width/2 - (30 - factor),height/2,10,20);
  ellipse(width/2 + (30 + factor),height/2,10,20);
  
}