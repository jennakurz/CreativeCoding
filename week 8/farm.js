var cow;
var farmer;
var farm;
var offset=0;
var easing= 0.05;

function preload() {
farm = loadImage('farm.jpg');
farmer= loadImage('farmer.png');
cow= loadImage('cow.png');
}

function setup(){
  createCanvas(500,500);

}

function draw(){
background(255);
  image(farm,0,25,850,450);

  image(farmer,230,300,100,200);



var dx =(mouseX-50)-offset;
offset += dx*easing;
image(cow, offset, 350,200,200);
}
