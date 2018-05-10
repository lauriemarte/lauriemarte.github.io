function setup() {
  createCanvas(400, 400);
	noStroke();
background (0);
}

function draw() {
	fill('rgba(100%,0%,100%,0.12)');
rect(0,0,width,height);

fill(255);
ellipse(mouseX,mouseY,40,40);
print(mouseX,mouseY);

if (mouseIsPressed){
fill(224,0,0);
} else {
fill(0,255,0);
} 
ellipse(mouseX,mouseY,40,40);

	
	
}