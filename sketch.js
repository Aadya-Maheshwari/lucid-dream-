var score= 0;
var Fairy ,  Witch , Candy, Arrow, bg, witch2 ;
var fairyImg , witchImg , candyImg, arrowImg, backgroundImg ,witch2Img;

var witchGroup, candyGroup, arrowGroup;

var life=3;
var score=0;
var Level1= PLAY1;
var Level2= PLAY2;
var gamestate=PLAY;
var PLAY=0;
var END=1;

function preload(){

  fairyImg= loadImage("fairy.png");
  witchImg=loadImage("witch.png");
  candyImg=loadImage("candy.png");
  arrowImg=loadImage("arrow.png");
  backgroundImg=loadImage(" background.jpg");
  witch2Img=loadImage("witch 2.png");

}

function setup(){
createCanvas(1200,600);

//form= new Form();

bg=createSprite(600,300);
bg.addImage(backgroundImg);
bg.scale=4;

Fairy=createSprite(100,400);
Fairy.addImage(fairyImg);
Fairy.scale=0.5;

witchGroup= new Group();
candyGroup= new Group();
arrowGroup= new Group();

heading= createElement("h1");
scoreboard= createElement("h1");




}

function draw () {
background(0)

Fairy.y=mouseY;

randomCandies();
randomWitches();

drawSprites();

heading.html("Life: "+life);
heading.style(`color:white`);
heading.position( displayWidth/2-400,30);

scoreboard.html("Score: "+score);
scoreboard.style(`color: white`);
scoreboard.position(displayWidth-400,30);
if(keyDown("SPACE")){
  randomArrow();
}
if( arrowGroup.isTouching (witchGroup)){
  witchGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+2;
}

if( arrowGroup.isTouching(candyGroup)){
  candyGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}

if(witchGroup.isTouching(Fairy)){
  witchGroup.destroyEach();
  life=life-1;
}

if(gamestate===PLAY&&Level1){
  score=15;
}
if(gamestate===PLAY&&Level2){
  score=30;
}

if(gamestate=END){
  life=0;
  arrowGroup.destroyEach();
  candyGroup.destroyEach();
  witchesGroup.destroyEach();
  
}



}

function randomCandies(){

  if(frameCount % 60 === 0){
    Candy=createSprite(1250,random (50,550));
    Candy.addImage(candyImg);
    Candy.velocityX=-4;
    Candy.scale=0.1;
    Candy.lifeTime=600;

    candyGroup.add(Candy);

  }
  
}

function randomWitches(){

  if(frameCount % 200  === 0) {
    Witch=createSprite(1250,random(50,550));
    Witch.addImage(witchImg);
    Witch.velocityX=-4;
    Witch.scale=0.7;
    Witch.lifeTime=600;

    witchGroup.add(Witch);
  }
    

}

function randomArrow(){

  Arrow=createSprite(Fairy.x,Fairy.y);
  Arrow.addImage(arrowImg);
  Arrow.velocityX=5;
  Arrow.scale=0.2;

  arrowGroup.add(Arrow);

  
}
