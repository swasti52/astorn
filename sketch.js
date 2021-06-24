var bath;

function preload(){
  bath = loadAnimation("brush.png","bath1.png","bath2.png");
back=loadImage("iss.png")
gym=loadAnimation("gym1.png","gym2.png","gym11.png","/gym12.png")
eat=loadAnimation("eat1.png","eat2.png")
move=loadAnimation("move.png","move.png","move1.png","move1.png")
}
function setup() {
  createCanvas(1300,800);
  astor=createSprite(610, 400, 50, 50);
 
}

function draw() {
  background(back);  
 edges=createEdgeSprites();
  
  astor.bounceOff(edges)
 if (keyDown("LEFT_ARROW")) {
   astor.addAnimation("hi",bath)
   astor.changeAnimation("hi",bath);
   astor.scale=0.2
   astor.velocityY=0
   astor.velocityX=0
 }
 if (keyDown("DOWN_ARROW")) {
  astor.addAnimation("eh",gym)
  astor.changeAnimation("eh",gym);
  astor.scale=0.2
  astor.velocityY=0
  astor.velocityX=0
}
if (keyDown("RIGHT_ARROW")) {
  astor.addAnimation("pw",eat)
  astor.changeAnimation("pw",eat);
  astor.scale=0.2
  astor.velocityY=0
  astor.velocityX=0
  astor.x=610
  astor.y= 400
}
if (keyDown("m")) {
  astor.addAnimation("nj",move)
  astor.changeAnimation("nj",move);
  astor.scale=0.2
  astor.velocityY=1
  astor.velocityX=2
  
}


  drawSprites();
}