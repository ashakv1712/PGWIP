const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world;

var pooltable;
var ball1,ball2,ball3;
var stick;
var tlWall,trWall,blWall,brWall,lWall,rWall;
var slingshot;
var cueball;
var pocket1;
var balls = [ball1, ball2, ball3]
function preload() {
 pooltable = loadImage("assets/bg.png")
}

function setup() {
  createCanvas(1200, 600);
 engine = Engine.create();
 world = engine.world;

 world.gravity.y = 0

 ball1= new Ball(200,180)
 ball2 = new Ball(200,200)
 ball3= new Ball(200,220)
 tlWall = new Wall(320,30,450,1)
 trWall = new Wall(850,30,420,1)

 lWall = new Wall(30,300,0,550);
 rWall = new Wall(1150, 300,1,550)

 blWall = new Wall(320,570,470,1)
 brWall = new Wall(870,570,470,1)

 cueball = new Cueball (200, 200)
 stick = new Stick (mouseX, mouseY)
 slingshot = new Slingshot(stick.body, {x: mouseX, y: mouseY})

 pocket1 = new Pockets(75,65)

}
function draw() {
 background(0)
 image(pooltable,-80,-80,1350,750)
 stick = new Stick (mouseX, mouseY)

 Engine.update(engine)
  ball1.display();
  ball2.display();
  ball3.display();
  stick.display();
  tlWall.display();
  trWall.display();
  lWall.display()
  rWall.display()
  brWall.display()
  blWall.display()

  stick.display();
  cueball.display()
  slingshot.display()

  pocket1.display()

  pot()
}
function mouseDragged(){
  Matter.Body.setPosition(stick.body, {x:mouseX, y:mouseY})

}
function mouseReleased(){
  // constraint.fly()
}

function pot(index){
 for(var i=0; i<balls.length; i++){
   if(balls[index]!==undefined){
     var collision = Matter.SAT.collides(balls[index].body, cueball.body)

     if(collision.collided){
       World.remove(world, balls[index].body)
     }
   }
 }
}