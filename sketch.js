const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var platform1;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

     platform1 = new Ground  ()


   
}

function draw(){
    background(20,200,50);
    Engine.update(engine);
   
    Ground.display();

    drawSprites();
}
