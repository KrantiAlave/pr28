
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1350,650);
  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new ground(675,630,1350,20);
   tree = new tree(1100,390,400,500);
   stone = new stone(140,430,50);
   constraint = new constraint(stone.body,{x:140,y:430});

   mango1 = new mango(1100,250,100);
   mango2 = new mango(1000,300,100);
   mango3 = new mango(1150,350,100);
   mango4 = new mango(1175,275,100);
   mango5 = new mango(1250,350,100);
   mango6 = new mango(1040,200,100);
   mango7 = new mango(1050,350,100);
   mango8 = new mango(1150,200,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
 
  ground.display();
  tree.display();
  image(boyImg,100,320,200,400);
  stone.display();
  constraint.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();  
  mango7.display();
  mango8.display();  

  fill(0);
  textSize(20);
  text("Press Space to get a second Chance to Play !!",40,40);
  
  function detectCollision(body1,body2){
  body1pos = body1.body.position;
  body2pos = body2.body.position;

  var distance = dist(body1pos.x,body1pos.y,body2pos.x,body2pos.y)
  if(distance <=body2.r + body1.r){
    Matter.Body.setStatic(body2.body,false);
  }
}
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  constraint.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:140,y:315});
    constraint.attacher(stone.body);
  }
}