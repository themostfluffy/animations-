//points/economy for player 
var pt = 0;
//year
var year = 2250;
//points per capital
var ptpc = 1;
//point per capital upgrade cost
var ptpcuc = 10;
//planets
var waterPlanets = 0;
var earthLikePlanets = 0;
var gasPlanets = 0;
var icePlanets = 0;
var lavaPlanets = 0;
//point cooldown
var ptpccd = 100;

//cooldown max
var ptpccdm = 100;

//implimented  factions
var notPlaying;

var aztecGators;

var romanWolfs;

var cartageCrocs;
//unimplimented factions

var faction4;
var faction5;
var faction6;
var faction7;
var faction8;

//list of factions
var factionsList = [
  notPlaying,
  aztecGators,
  romanWolfs,
  cartageCrocs,
  faction4,
  faction5,
  faction6,
  faction7,
  faction8,
];
//age sysrtem list
var earlySpaceAge;
var starExplorationAge;
var ionicPropultionAge;
var darkMatterDiscoveryAge;
var darkMatterResearchAge;
var darkMatterUtilizationAge;
var intergalacticTravelAge;
var intergalacticEmpireAge;
var ages = [
  earlySpaceAge,

  starExplorationAge,

  ionicPropultionAge,

  darkMatterDiscoveryAge,

  darkMatterResearchAge,

  darkMatterUtilizationAge,

  intergalacticTravelAge,

  intergalacticEmpireAge,
];
//current selected faction
factions = 0;
//font
let pressStart;

//images
function preload() {
  try {
    pressStart = loadFont("PressStart2P-Regular.ttf");
  } catch (e) {
    console.log("Font not loaded, using default");
  }

  try {
    //factions
    aztecGators = loadImage("aztecGators.png");
  } catch (e) {
    console.log("aztecGators image not loaded");
  }
  //romanWolfs =loadImage("romanWolfs.png");

  planets = loadImage("placeholderplanets.png");

}

//canvas and other stuff
function setup() {
  createCanvas(1500, 715);
  textFont(pressStart);
  textSize(16);
  console.log("Setup complete - p5.js is working!");
}

//draw the ui and gameplay
function draw() {
  background(255, 255, 255);
  //image
  if (aztecGators) {
    image(aztecGators, 10, 80, 100, 100);
  } else {
    fill(0);
    rect(10, 80, 100, 100);
  }
  //ui
  if (pressStart) {
    textFont(pressStart);
  }
  textSize(16);
  fill(0);
  //credits
  text("game by fuzzy_foxf" , 10, 710);

  //game info
  text("Points:" + pt, 10, 20);
  text("Points per capital:" + ptpc, 10, 40);
  text("production timer:" + ptpccd, 10, 60);

  if (factions == 0) {
    // code to set the selected faction as the current faction
    // maybe use list variable to store the selected faction and use it in the game logic
    text("unselected", 500, 20);
  } else if (factions == 1) {
    text("aztecGators", 500, 20);
  } else if (factions == 2) {
    text("romanWolfs", 500, 20);
  } else if (factions == 3) {
    text("cartageCrocs", 500, 20);
  }

  //point production
  if (factions > 0) {
    ptpccd = ptpccd - 1;
    if (ptpccd <= 0) {
      pt = pt + ptpc;
      ptpccd = ptpccdm;
    }
  }
  //planets and map
  
    image(planets, 300, 80, );


  image(planets, 400, 80, );
 
}

//game interactions
function mousePressed() {
  //permenet faction selection
  if (
    mouseX > 10 &&
    mouseX < 110 &&
    mouseY > 80 &&
    mouseY < 180 &&
    factions == 0
  ) {
    factions = 1;
  }
  if (
    mouseX > 120 &&
    mouseX < 220 &&
    mouseY > 80 &&
    mouseY < 180 &&
    factions == 0
  ) {
    factions = 2;
  }
  if (
    mouseX > 10 &&
    mouseX < 110 &&
    mouseY > 190 &&
    mouseY < 290 &&
    factions == 0
  ) {
    factions = 3;
  }
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
    console.log("cartageCrocs");
    text("cartage", 500, 20);
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
}

