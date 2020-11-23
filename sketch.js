const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var ground1,ground2,engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28;
var ball;
var gameState="onSling";
var joint;
var backgroundImg;
var score=0;
// var polygonImg;
var bg = "bg1.png";

function preload() {
//  polygonImg=loadImage("polygon.png");
getBackgroundImg();
}

function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;
  //imageMode(CENTER);
 // image(polygonImg,polygon.position.x,position.position.y,40,40);
  ground1=new Ground(400,300,300,20);
  ground2=new Ground(700,180,300,20);
  box1=new Box(400,270,45,39);
	box2=new Box(400,260,45,39);
	box3=new Box(400,250,45,39);
	box4=new Box(400,240,45,39);
	box5=new Box(355,260,45,39);
	box6=new Box(355,250,45,39);
	box7=new Box(355,240,45,39);
	box8=new Box(445,260,45,39);
	box9=new Box(445,250,45,39);
	box10=new Box(445,240,45,39);
	box11=new Box(310,250,45,39);
	box12=new Box(310,240,45,39);
	box13=new Box(490,250,45,39);
	box14=new Box(490,240,45,39);
	box15=new Box(700,80,45,39);
	box16=new Box(700,80,45,39);
	box17=new Box(700,80,45,39);
	box18=new Box(700,80,45,39);
 	box19=new Box(655,80,45,39);
  box20=new Box(655,80,45,39);
  box21=new Box(655,80,45,39);
  box22=new Box(745,80,45,39);
  box23=new Box(745,80,45,39);
  box24=new Box(745,80,45,39);
  box25=new Box(610,150,45,39);
  box26=new Box(610,150,45,39);
  box27=new Box(790,150,45,39);
  box28=new Box(790,150,45,39);
  ball=new Polygon(120,213,39);
  joint=new Shooter(ball.body,{x:120,y:213});
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box1.score();
  box2.score()
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  ball.display();
  joint.display();
  textSize(30);
  fill("yellow");
  textFont("ar darling");
  text("Score = "+score,342,30);
}

function mouseDragged() {
  if(gameState!=="launched"){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased() {
 joint.go();
 gameState="launched";
}

function keyPressed() {
 if(keyCode===32) {
   joint.attach(ball.body);
   gameState="onSling";
 }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "bg1.png";
  }
  else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}