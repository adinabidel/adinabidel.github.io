function setup() {
  createCanvas(300,300)
}

function draw() {
  background(230,100,120);

  strokeWeight(5);
  fill(175,60,90);
  ellipse(155,70,25,25)

  strokeWeight(3);
  fill(70,60,120, 200);
  ellipse(200,50,50,50);

  strokeWeight(2);
  fill(220,180,25, 250);
  ellipse(150,150,100,100);

  strokeWeight(3);
  fill(100,0,50, 250);
  ellipse(50,mouseY,60,60);

  strokeWeight(0.5);
  fill(220,180,25, 100);
  ellipse(mouseX,150,400,400);

  strokeWeight(1);
  fill(100,0,50, 250);
  ellipse(mouseX + 20,mouseY + 20,60,60);

}

function mousePressed() {
  background(250, 250, 100);
}
