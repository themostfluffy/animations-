//points
var pt = 0;
//points per click
var ptpc=1;
//point per click upgrade cost 
var ptpcuc=10;
//cooldown max
var ptpccdm=100;

//images 
function preload(){
  //factions
aztecGators = loadImage("aztecGators.png");
  //maps
theIsle = loadImage("theIsle.png");

}
//canvas and other stuff
function setup() {
  createCanvas(1500, 715);
}



//draw the ui and gameplay 
function draw() {
  background(255,255,255);
  text("Points:" + pt, 10, 20);
  text("Points per capital:" + ptpc, 10, 40);
  text("production timer:" + ptpccd, 10, 60);
 
ptpccd=ptpccd-1;
   if (ptpccd <= 0) {
    pt =pt +ptpc;
    ptpccd=ptpccdm;
  
}
}
//game interactions 
function mousePressed() {
 
}