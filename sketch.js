
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var crumpledball;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	crumpledball=new CrumpledBall(200,400,100,100);
	groundObject=new ground(width/2,690,width,20);
	dustbinObj=new dustbin(1200,485);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  crumpledball.display();
  groundObject.display();
  dustbinObj.display();
  

}
 function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(crumpledball.body,crumpledball.body.position,{x:500,y:-850})
	}
 }

