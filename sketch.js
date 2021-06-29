const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var snowflake,engine,world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  createSprite(400, 200, 50, 50);
displaySnowflake();
}

function draw() {
  background(255,255,255);  
  snowflake.display();
  drawSprites();
}
function displaySnowflake() {
  snowflake = new Snow(Math.random(1,800),Math.random(1,400),100,100,0)
}