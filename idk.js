//points
var pt = 0;
//points per click
var ptpc = 1;
//point per click upgrade cost
var ptpcuc = 10;
//piont cooldown
var ptpccd = 100;

//cooldown max
var ptpccdm = 100;

//factions
var aztecGators;

var romanWolfs;

var factions = [aztecGators, romanWolfs];
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
function mousePressed() {}
