//points
var pt = 0;
//points per click
var ptpc=1;
//point per click upgrade cost 
var ptpcuc=10;
//points per upgrade value
var ptpcuv=1;

//canvas and other stuff
function setup() {
  createCanvas(1500, 715);
}
//draw the ui
function draw() {
  text("Points: " + pt, 10, 20);
  text("Points per click: " + ptpc, 10, 40);
  text("Upgrade cost: " + ptpcuc, 10, 60);
}
//clicker
function mousePressed() {
  pt += ptpc;
}