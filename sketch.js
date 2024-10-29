var a = 360;
var b = 350;
var c = 305;
var d = 110;
var e = 90;
var f = 20;
var angle = 0.0;

function setup() {
  createCanvas(600, 800);
}

function draw() {

  //base background
  background("rgb(145,70,62)");
  
  for (var y = 0; y <= height; y += 40) {
  for (var x = 0; x <= width; x += 40) {
    fill(20, 150);
    ellipse(x, y, 40, 40);
    }
  }
  
  //hair
  stroke("rgb(74,12,12)")
  strokeWeight(6)
  fill("rgb(101,15,15)")
  rect(50, 100, 500, 500, 500, 500, 0, 0)
  
  //torso
  noStroke();
  fill("rgb(32,0,0)")
  rect(100, 620, 400, 400, 200);
  //neck
  rect(250, 530, 100, 150, 5, 5, 50, 50);
  //base shape
  fill(255);
  stroke("rgb(151,118,118)")
  strokeWeight(6);
  ellipse(300, b, b, 410);
  
  
  //EYE
  // Bottom-right.
  strokeWeight(2)
  arc(360, 350, 50, 50, 0, HALF_PI);
  noFill();
  // Bottom-left.
  arc(a, b, 60, 60, HALF_PI, PI);
  // Top-left.
  arc(a, b, 70, 70, PI, PI + QUARTER_PI);
  // Top-right.
  arc(a, b, 80, 80, PI + QUARTER_PI, TWO_PI);

  //left lens
  strokeWeight(3);
  stroke("rgb(55,44,44)");
  rect(320, c, d, e, f);
  //right lens
  rect(170, c, d, e, f);
  //PUPIL
  fill("rgb(202,3,3)");
  noStroke();
  circle(355, 345, 30);

  //bangs
  fill("rgb(101,15,15)")
  arc(285, 528, 400, 800, radians(170), radians(280), CHORD);
  arc(345, 350, 300, 400, radians(270), radians(45), CHORD);
  
  
  //beginShape();
  //vertex(300, 120)
  //bezierVertex(175, 100, 70, 100, 50, 600);
  //fill('red');
  //curve(-150, 275, 50, 60, 50, 70, 500, 275);
  //endShape();
}