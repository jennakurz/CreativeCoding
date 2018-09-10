
var x= 80;
var y= 40;
var d= 70;
var s= 20;

function setup() {
createCanvas(480, 120);
background(204);

}

function draw() {

rect(x, y, s, s);
rect(x+d, y, 2*s, 2*s);
rect(x+2*d, y, 2*s, 2*s);
}
