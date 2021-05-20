function preload()
{
	ballImage = loadImage("images.jpeg");
	backImage = loadImage("download.jpeg");
}

function setup() {
	createCanvas(400, 400);




	//Create the Bodies Here.
	ball = createSprite(200, 200, 20, 20)
	ball.addImage(ballImage);
	ball.scale = 0.2;

	wall1 = createSprite(400, 1, 800, 10)
	wall2 = createSprite(400, 400, 800, 10)
	wall3 = createSprite(1, 400, 10, 800)
	wall4 = createSprite(400, 200, 10, 800)
     

	wall1.visibile = false;
	wall2.visibile = false;
	wall3.visibile = false;
	wall4.visibile = false;
}


function draw() {
//   rectMode(CENTER);
  background(0);
  imageMode(CENTER)
  image(backImage, 200, 110, 840, 570);

  ball.velocityX = 0
  ball.velocityY = 0

  if(keyDown(UP_ARROW)){
	ball.velocityX = 0
	ball.velocityY = -20
  }
  if(keyDown(DOWN_ARROW)){
	ball.velocityX = 0
	ball.velocityY = 20
}
if(keyDown(LEFT_ARROW)){
	ball.velocityX = -20
	ball.velocityY = 0
}
if(keyDown(RIGHT_ARROW)){
	ball.velocityX = 20
	ball.velocityY = 0
}
if (
	ball.isTouching(wall1) 
  ) {
	ball.x=200
	ball.y=200

  }

ball.bounceOff(wall1)
ball.bounceOff(wall2)
ball.bounceOff(wall3)
ball.bounceOff(wall4)
  drawSprites();
 
}



