
var x=35;
var y= 8;
var d= 8;
var s=35;




function setup() {
createCanvas(650, 400);
background(204);
noFill();

}
function draw()
{
  for(var i=1; i<13; i++)
  {
    rect(x*i,y*i,s, d);

  }
}
