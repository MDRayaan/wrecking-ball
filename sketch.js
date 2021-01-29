const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;
var ball;
var rope;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,50,50);
    box2 = new Box(200,150,50,50);
    box3 = new Box(200,200,50,50);
    box4 = new Box(200,250,50,50);
    box5 = new Box(200,300,50,50);
    ground = new Ground(200,350,400,20)
    ball = new Ball(50,150,50,60)
    rope = new Rope(ball.body,{x:50,y:50})
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    ball.display();
    rope.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


