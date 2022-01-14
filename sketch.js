
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let ball, leftBody,bottomBody,rightBody,ground
let engine,world

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,580,800,20)
leftBody=new Ground(500,520,20,100)
rightBody=new Ground(700,520,20,100)
World.add(world,ground)
World.add(world,leftBody)
World.add(world,rightBody)
	Engine.run(engine);
  var ballOptions={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }
  ball=Bodies.circle(200,100,20,ballOptions);
  World.add(world,ball)
 
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  ground.display()
  leftBody.display()
  rightBody.display()
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
}

function keyPressed() 
{ if (keyCode === UP_ARROW) 
{ Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}); } }
 




