var bullet,wall

var speed,weight,thickness

function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  bullet = createSprite(50,200,50,10)
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = color(80,80,80)
  bullet.velocityX = speed
  thickness = random(22,83) 
}

function draw() {
  background(0);

  if (wall.x - bullet.x < (wall.width + bullet.width)/2) {

    bullet.velocityX = 0

    if (0.5*weight*speed*speed/(thickness*thickness*thickness) <= 10) {
      wall.shapeColor = color(0,255,0)
    }

    else{
      wall.shapeColor = color(255,0,0)
    }
  }

  drawSprites();
}