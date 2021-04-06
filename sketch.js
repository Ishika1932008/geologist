const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(450,200,-2);
    rubber = new Rubber(580,200,1);
    rubber1 = new Rubber(581,200,1);
    rubber2 = new Rubber(583,200,1);
    rubber3 = new Rubber(585,200,1);
    rubber4 = new Rubber(587,200,1);
    rubber5 = new Rubber(589,200,1);
    rubber6 = new Rubber(591,200,1);
  iron = new Iron(300,200);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    
 
}