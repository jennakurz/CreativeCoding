function setup(){

createCanvas(480, 120);
background(204);
}

function draw() {
if(mouseIsPressed && mouseX>90 && mouseX<150) {
fill(255, 0,0);
}
else{
fill(255);
}
rect(90, 30, 60, 60);

if(mouseIsPressed && mouseX>330 && mouseX<390) {
fill(0,255,0);
}
else{
fill(255);
}
rect(330,30, 60,60);
}
