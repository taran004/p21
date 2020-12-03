
var bullet; 
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet= createSprite(50,200,30,10); 
  bullet.shapeColor = color("white")
  thickness = random(22,83)
 wall = createSprite(1200,200,thickness,height/2)
 wall.shapeColor = color(80,80,80);
 bullet.velocityX = speed*speed/thickness
}

function draw() {
  background("black");  

if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness *  thickness * thickness);
 
if(damage>10){
wall.shapeColor = color(255,0,0);
}

if(damage<10){
  wall.shapeColor = color(0,255,0)
}
console.log(damage)
}
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false
}













