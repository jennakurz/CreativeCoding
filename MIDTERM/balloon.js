var balloon;
var branchLeft;
var branchRight;
var buttonDown;
var buttonUp;
var buttonLeft;
var buttonRight;


var count= 670;
var horizontal =440;

function preload() {
  balloon= loadImage('balloon.png');
  branchLeft= loadImage('branch1.png');
  branchRight= loadImage('branch2.png');

}

function setup() {
  createCanvas(1000, 700);


  buttonUp = createButton('Down');
  buttonUp.position(500,680);
  buttonUp.mousePressed(increaseCount);

  buttonDown = createButton('Up');
  buttonDown.position(440, 680);
  buttonDown.mousePressed(decreaseCount);

  buttonRight = createButton('Right');
  buttonRight.position(600,680);
  buttonRight.mousePressed(increaseHorizontal);

  buttonLeft = createButton('Left');
  buttonLeft.position(350,680);
  buttonLeft.mousePressed(decreaseHorizontal);
}




function increaseCount() {
count += 20;
}

function decreaseCount() {
  count -=20;
}
function increaseHorizontal() {
horizontal += 20;
}

function decreaseHorizontal() {
  horizontal -=20;
}


function draw() {
  background(135, 206,235);
  //fill(240, 192, 203);
  image(branchLeft,-10, 50, 570, 300);
    image(branchLeft,-20, 450, 370, 200);
  image(branchRight,550, 470, 500, 300);
  image(branchRight, 750, 80, 300, 250);
  image(balloon,horizontal,count,90,180);
  //ellipse(horizontal, count, 50, 40);
  if(count <0){
    count=height;
  }
  if(count>50&&count<350&&horizontal>0&&horizontal<560 ) {
    count=680;
    horizontal=450;
  }

  if(count>450&&count<650&&horizontal>-10&&horizontal<350 ) {
    count=680;
    horizontal=450;
}

if(count>60&&count<330&&horizontal>690&&horizontal<1000 ) {
  count=680;
  horizontal=450;
}
  if(count>470&&count<700&&horizontal>480&&horizontal<1000 ) {
    count=680;
    horizontal=450;
}


}

/*
function reset {
  if(count<= 20){
    count=670;
  }
}
*/
