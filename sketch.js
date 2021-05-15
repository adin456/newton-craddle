const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var dustbin,bb;

function preload(){
    bb = loadImage ("Dustbin.png");
}
var bd=50;
function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(600,50,1200,10);
   ball1=new Paper(200,200,25);
   ball2=new Paper(270,200,25);
   ball3=new Paper(340,200,25);
   ball4=new Paper(410,200,25);
   ball5=new Paper(480,200,25);
   rope1=new Sling(ball1.body,ground.body,-bd*2,0);
   rope2=new Sling(ball2.body,ground.body,-bd*1,0);
   rope3=new Sling(ball3.body,ground.body,0,0);
   rope4=new Sling(ball4.body,ground.body,bd*1,0);
   rope5=new Sling(ball5.body,ground.body,bd*2,0);
}


function draw(){
    background(255);
    Engine.update(engine);
    ground.display()
    ball1.display()
    ball2.display()
    ball3.display()
    ball4.display()
    ball5.display()
    rope1.display()
    rope2.display()
    rope3.display()
    rope4.display()
    rope5.display()
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.applyForce(ball1.body,ball1.body.position,{x:60,y:-70})
    }

}