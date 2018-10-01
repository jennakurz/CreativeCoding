
var x=120;
var y= 50;
var d= 10;
var s=250;
var t=50;




function setup() {
createCanvas(480, 120);
background(204);
noFill();

}


function draw() {

for(var i=1; i<10; i++)
{
  ellipse(x,y,d*i,d*i)
}

for(var i=1; i<10; i++)
{
  ellipse(s,t,d*i,d*i)
}

}
