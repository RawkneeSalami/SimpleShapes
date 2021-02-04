function setup() {
    createCanvas(1200, 800);
print("Starting")
  rectMode(CENTER)
  ellipseMode(CENTER)
  
  print("width-" + width)

}

function draw() {
    background(0);
  fill(100,77,2);
  background(112,50,204);
  text("Fortnite! All night! Battle Royale In The Moonlight!",width/2, 100);
   fill(122,33,2);
  rect(44,44,133,100);
  rect(333,44,133,100);
  rect(44,500,133,100);
  rect(500,500,133,100);
  
  fill(0,105,244)
  circle (width/2, height/2,20);
  triangle(234, 143, 122, 120, 320, 80);
  quad(234, 18, 216, 23, 226, 20, 124, 320);
  arc(43, 52, 22, 12, HALF_PI, PI);
  line(12, 23, 44, 11);
 square(300, 600, 99, 20);
  
  
  drawEllipses();
  
  
}

function drawEllipses()
{
  ellipse(width-300,height/2,200,80)
}

