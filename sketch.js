var box

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor = "purple";
}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW)){
  box.position.x = box.position.x+2
}
if(keyIsDown(LEFT_ARROW)){
  box.position.x = box.position.x-2
}
if(keyIsDown(UP_ARROW)){
  box.position.y = box.position.y-2
}
if(keyIsDown(DOWN_ARROW)){
  box.position.y = box.position.y+2
}

  drawSprites();

}




