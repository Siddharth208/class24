const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,object,box1,box2,g;
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  box1=new Box(700,320,70,70)
  box2=new Box(900,320,70,70)
  g=new Ground(600,390,1200,10)
  pig1=new Pig(800,320)
  log1=new Log(800,260,300,PI/2)
  box3=new Box(700,240,70,70)
  box4=new Box(900,240,70,70)
  pig2=new Pig(800,240)
  log2=new Log(800,170,300,PI/2)
  box5=new Box(800,150,70,70)
  log3=new Log(740,120,140,PI/7)
  log4=new Log(850,120,140,-PI/7)
  
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  g.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  
}