
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,tree_Image;
var boy,boy_Image;
var bg1,bg_ground,bg2;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;

var string;
var st1;
var g1;
var chain;

function preload()
{
	tree_Image = loadImage("tree.png");
	boy_Image = loadImage("boy.png");
	bg1 = loadImage("bg1.JPG");
	bg2 = loadImage("bg2.JPG")

}

function setup() {
	createCanvas(1200, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	bg_ground = createSprite(560,550,1200,700);
	bg_ground.addImage(bg2);

	
	boy = createSprite(300,390);
	boy.addImage(boy_Image);
	boy.scale=0.1;
 
	tree = createSprite(950,240);
	tree.addImage(tree_Image);
	tree.scale=0.35;
 
 
	
	options = {
		isStatic:true
	   }
		object = Bodies.rectangle(600,470,1200,30,options);
		World.add(world,object);
	
   

	Engine.run(engine);
	mango1 = new mango(850,205,50);
	mango2 = new mango(990,185,60);
	mango3 = new mango(900,160,65);
	mango4 = new mango(975,100,45);
	mango5 = new mango(1090,190,35);
	mango6 = new mango(900,100,40);
	mango7 = new mango(1035,140,50);
	st1 = new stone(240,330,50,50);

	//g1 = new ground(0,400,1200,35);

	//string = new SlingShot(Stone,{x:600,y:275});
	chain = new SlingShot(st1.body,{x:250,y:335});















	










}


function draw() {
  rectMode(CENTER);
  background(bg1);

  fill("brown");
  rectMode(CENTER);
  rect(object.position.x,object.position.y,1200,30);

  drawSprites();
  fill("black");
  textSize(30);
  text("PRESS SPACE TO GET ANOTHER CHANCE",50,50)
 
  chain.display();
  st1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
 

  detectollision(st1,mango1);
  detectollision(st1,mango2);
  detectollision(st1,mango3);
  detectollision(st1,mango4);
  detectollision(st1,mango5);
  detectollision(st1,mango6);
  detectollision(st1,mango7);

  //g1.display();

  //string.display();

  
}

function mouseDragged(){
    Matter.Body.setPosition(st1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}
















function detectollision(st1,mango1){
	mangoBodyPosition = mango1.body.position;
	stoneBodyPosition = st1.body.position;
	
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=mango1.r+mango1.r){
		Matter.Body.setStatic(mango1.body,false);
	}
	}





















    function detectollision(st1,mango2){
		mangoBodyPosition = mango2.body.position;
		stoneBodyPosition = st1.body.position;
		
		var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
		if(distance<=mango2.r+mango2.r){
			Matter.Body.setStatic(mango2.body,false);
		}
		}




















		function detectollision(st1,mango3){
			mangoBodyPosition = mango3.body.position;
			stoneBodyPosition = st1.body.position;
			
			var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
			if(distance<=mango3.r+mango3.r){
				Matter.Body.setStatic(mango3.body,false);
			}
			}


















			function detectollision(st1,mango4){
				mangoBodyPosition = mango4.body.position;
				stoneBodyPosition = st1.body.position;
				
				var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
				if(distance<=mango4.r+mango4.r){
					Matter.Body.setStatic(mango4.body,false);
				}
				}















				function detectollision(st1,mango5){
					mangoBodyPosition = mango5.body.position;
					stoneBodyPosition = st1.body.position;
					
					var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
					if(distance<=mango5.r+mango5.r){
						Matter.Body.setStatic(mango5.body,false);
					}
					}












					
					function detectollision(st1,mango6){
						mangoBodyPosition = mango6.body.position;
						stoneBodyPosition = st1.body.position;
						
						var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
						if(distance<=mango5.r+mango6.r){
							Matter.Body.setStatic(mango6.body,false);
						}
						}













		
						function detectollision(st1,mango7){
							mangoBodyPosition = mango7.body.position;
							stoneBodyPosition = st1.body.position;
							
							var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
							if(distance<=mango7.r+mango7.r){
								Matter.Body.setStatic(mango7.body,false);

							}
							}





function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(st1.body ,{x:250,y:335});
		chain = new SlingShot(st1.body,{x:250,y:335});
	}

}							



