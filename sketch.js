
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbin, paper, ground, cover, ball, bin1, bin2, bin3;
var  engine, world;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2,670,width,20);
	dustbin = new Dustbin(700,260);
    paper = new Paper(100,10,70);
	bin1 = new Border(700,260,100,10);
	bin2 = new Border(750,240,10,50);
    bin3 = new Border(650,240,10,50);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(200,200,255);
 text("Press the up arrow to throw the paper into the bin",50,150);
  ground.display();
  dustbin.display();
cover = createSprite(650,150,300,50);
cover.shapeColor = rgb(200,200,255);
cover.visible = false;
Engine.update(engine);
drawSprites();
paper.display();

if (gameState === END){
	cover.visible = true;
}
}
function keyPressed(){
if(keyCode === UP_ARROW && gameState === PLAY){
	gameState = END;
	Matter.Body.applyForce(paper.body,paper.body.position,{x:87,y:-87});
}
}