//points/economy
var pt = 0;
//points per click
var ptpc = 1;
//point per click upgrade cost
var ptpcuc = 10;
//piont cooldown
var ptpccd = 100;

//cooldown max
var ptpccdm = 100;

//implimented  factions
var aztecGators;

var romanWolfs;

//unimplimented factions
var faction3;
var faction4;
var faction5;
var faction6;
var faction7;
var faction8;

//list of factions
var factions = [aztecGators, romanWolfs, faction3, faction4, faction5, faction6, faction7, faction8];
//font
let pressStart;

//images
function preload() {
  pressStart = loadFont("PressStart2P-Regular.ttf");
  //factions
  aztecGators = loadImage("aztecGators.png");
  //romanWolfs =loadImage("romanWolfs.png");

  //maps
  //theIsle = loadImage("theIsle.png");
}

//canvas and other stuff
function setup() {
  createCanvas(1500, 715);
  textFont(pressStart);
  textSize(16);
}

//draw the ui and gameplay
function draw() {
  background(255, 255, 255);
  //image
  image(aztecGators, 10, 80, 100, 100);
  //ui
  textFont(pressStart);
  textSize(16);
  factionSelect();
  text("Points:" + pt, 10, 20);
  text("Points per capital:" + ptpc, 10, 40);
  text("production timer:" + ptpccd, 10, 60);

  ptpccd = ptpccd - 1;
  if (ptpccd <= 0) {
    pt = pt + ptpc;
    ptpccd = ptpccdm;
  }
  
}
//game interactions
function mousePressed() {

}
//faction selection
function factionSelect() {
  if (mouseX > 10 && mouseX < 110 && mouseY > 80 && mouseY < 180) {
    console.log("aztecGators");
    text("aztec", 500, 20);
  }
  if (mouseX > 120 && mouseX < 220 && mouseY > 80 && mouseY < 180) {
    console.log("romanWolfs");
    text("rome", 500, 20);
  }
  if (mouseX > 10 && mouseX < 110 && mouseY > 190 && mouseY < 290) {
    console.log("faction3");
    text("faction3", 500, 20);
  }
  if (mouseX > 120 && mouseX < 220 && mouseY > 190 && mouseY < 290) {
    console.log("faction4");
    text("faction4", 500, 20);
  }
  if (mouseX > 10 && mouseX < 110 && mouseY > 300 && mouseY < 400) {
    console.log("faction5");
    text("faction5", 500, 20);
  }
  if (mouseX > 120 && mouseX < 220 && mouseY > 300 && mouseY < 400) {
    console.log("faction6");
    text("faction6", 500, 20);
  }
  if (mouseX > 10 && mouseX < 110 && mouseY > 410 && mouseY < 510) {
    console.log("faction7");
    text("faction7", 500, 20);
  }
  if (mouseX > 120 && mouseX < 220 && mouseY > 410 && mouseY < 510) {
    console.log("faction8");
    text("faction8", 500, 20);
  }
  if (mouseX > 10 && mouseX < 110 && mouseY > 520 && mouseY < 620) {
    console.log("faction9");
    text("faction9", 500, 20);
  }
  if (mouseX > 120 && mouseX < 220 && mouseY > 520 && mouseY < 620) {
    console.log("faction10");
    text("faction10", 500, 20);
  }
}