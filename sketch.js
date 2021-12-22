var canvas;

var enemy;
var player;
var gold

var PLAY=1;
var END=0;
var gamestate=PLAY;

function preload(){

  enemyImage = loadImage("enemy.png");
  playerImage = loadImage("lama.png");
  goldImage = loadImage("gold.png");

}


function setup() {
  createCanvas(800,600);
  createSprite(400, 200, 50, 50);

  player = createSprite(600,400,20,20);
  player.addImage(playerImage);
  player.scale=0.3

  goldGroup=new Group();
  enemyGroup=new Group();
}

function draw() {
  if(gamestate===PLAY){
    player.x = World.mouseX;


    createenemy();
    creategold();
  }
  background(backgroundImage);
  background(255,255,255);  
  drawSprites();
  
}

function createEnemy(){
  if (frameCount % 100 === 0){
    var enemy = createSprite(Math.round(random(50, 350),40, 10, 10));
    enemy.addImage(enemyImage);
    enemy.scale=0.12;
    enemy.velocityY = 3;
    enemy.lifetime = 150;
    enemyGroup.add(enemy);
  }
}

function creategold(){
  if(frameCount % 200 == 0){
    var gold = createSprite(Math.round(random(50, 350),40, 10, 10));
    gold.addImage(goldImage);
    gold.scale=0.3;
    gold.velocity = 3;
    gold.lifetime = 150;
    goldgroup.add(gold);

  }
}