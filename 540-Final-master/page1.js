var x = 540;
var y = 300;

function setup() {
  createCanvas(1400, 700);
  background(205);
  textAlign(CENTER, CENTER);
}


function draw() {
  rect(50, 50, 1300, 600);

  // Title, instructions, answers, activity space
textSize(40);
text("What type of student are you?", 700, 100);
textSize(20);
text("You have a free weekend, how do you choose to spend it?", 700, 180);
text("A. Get ahead of the homework for next week so I won't be stressed all week", x, y);
text("B. Take advantage of all the free time. Tailgate, parties and sleeping in!", x, y+50);
//text("C. Type answer here...", x, y+100);
//text("D. Type answer here...", x, y+150);
text("Next", 1270, 600);
}
