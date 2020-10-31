const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//level 1
	fill("lime");
	block1 = new Block(220,275,30,40);
	block2 = new Block(250,275,30,40);
	block3 = new Block(280,275,30,40);
	block4 = new Block(310,275,30,40);
	block5 = new Block(340,275,30,40);
	block6 = new Block(370,275,30,40);
	block7 = new Block(400,275,30,40);
	//level 2
	fill("blue");
	block8 = new Block(250,255,30,40);
	block9 = new Block(280,255,30,40);
	block10 = new Block(310,255,30,40);
	block11 = new Block(340,255,30,40);
	block12 = new Block(370,255,30,40);
	//level 3
	fill("olive");
	block13 = new Block(280,235,30,40);
	block14 = new Block(310,235,30,40);
	block15 = new Block(340,235,30,40);
	//top
	fill("orange");
	block16 = new Block(310,195,30,40);

	polygon = new Polygon(150,400,20);

	stand = new Stand(310,280,300,10);

	slingShot = new SlingShot(polygon.body,{x:150, y:150});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

    block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	block8.display();
	block9.display();
	block10.display();
	block11.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();
	block16.display();

	polygon.display();

	stand.display();

	slingShot.display();

  drawSprites();
 
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingShot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body, {x: 200 , y: 50});
       slingShot.attach(polygon.body);
    }
}


