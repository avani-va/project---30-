/* project- 29 
 developer: Avani 
 topics: PhysicsEngine,functions,Push() and pop()
*/

//Declare variables for game objects and behaviour indicators(FLAGS)
//constants

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var Stand;
var block16;
var userengine,userworld;
var polygon,polygonImg;
var block13,block14,block15;
var block8,block9,block10,block11,block12;
var block0,block1,block2,block3,block4,block5,block6,block7;

//var chain = Constraint.create(options);
//World.add(userworld, chain);

var choice ={
isStatic : true,
'restitution':1.0,
'density': 1.0,
'friction': 1.0
} 

var option = {
   isStatic: false
}

function preload()
{
    polygonImg = loadImage("polygon.png")
}

function setup()
{
    // creating canvas    
    createCanvas(1600,500);


    userengine = Engine.create();
	userworld = userengine.world;

    // creating bodies here

    // making a stand for the block to settle
    Stand = new Ground (672,416,450,10)

    // creating a polygon
     polygon = Bodies.circle(150,200,20,(option));
     World.add(userworld, polygon);
     //polygon.debug = "true";
    
     
     // level- 1
        block0 = new Block (499,374,50,60);
        block1 = new Block (554,374,50,60);
        block2 = new Block (609,374,50,60);
        block3 = new Block (664,374,50,60);
        block4 = new Block (719,374,50,60);
        block5 = new Block (774,374,50,60);
        block6 = new Block (829,374,50,60);

    // level- 2
        block7 =  new Block (530,311,50,60);
        block8 =  new Block (586,311,50,60);
        block9 = new Block (642,311,50,60);
        block10 = new Block (698,311,50,60);
        block11 = new Block (754,311,50,60);
        block12 = new Block (810,311,50,60);

    //level- 3
        block13 = new Block (612,245,50,60);
        block14 = new Block (668,245,50,60);
        block15 = new Block (724,245,50,60);

    //level- 4
        block16 = new Block(668,179,50,60)

      //chain = new Band (polygon.body,{x:200,y:100});
      //console.log(chain);



     /*   var options ={
            bodyA: polygon.body,
            bodyB: Stand.body,
            stiffness: 0.04,
            lenght: 10
        
        }
     */

    Engine.run(userengine);

}

function draw()
{
    rectMode(CENTER);    
    // setting up background for the game
    background(255);
    Engine.update(userengine);

    // display of the stand
    Stand.display();

    ellipse(polygon.position.x,polygon.position.y,20);

    // display of level- 1
    block0.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

   // display of level- 2
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

   // display of level- 3
    block13.display();
    block14.display();
    block15.display();

    // display of level- 4
    block16.display();    


    //display of the chain
    //chain.display();

    // function used for drawing the sprites
    drawSprites();

    //text(mouseX+","+mouseY,mouseX,mouseY);


    //strokeWeight(4);
    //stroke("green");
    //fill("blue");
}

function mouseDragged(){

 //Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
 // slingShot.fly();

}
