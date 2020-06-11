var pointer;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
   

}

function draw(){

background(random(0,255),random(0,255),random(0,255));

fill('black')
pointer=ellipse(mouseX,mouseY,20,20);
ellipseMode('CENTER');

}