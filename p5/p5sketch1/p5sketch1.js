function setup() {
  createCanvas(600, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
    ellipse(mouseX, mouseY, 40, 40);
  } else {
    fill(255);
    line(mouseX, mouseY, pmouseX, pmouseY);
   
  }
  erase();
  rect(100,70,80,80);
  rect(420,70,80,80);
  rect(100,300,80,80); 
  rect(420,300,80,80);
  noErase();
 
}
