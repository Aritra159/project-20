var car,wall
var speed ,weight






function setup() {
  createCanvas(1600,400);
  speed=random(10,15);
  weight=random(0,1500);

 car=createSprite(20 ,200, 20, 20);
 car.velocityX=speed;
 car.shapeColor="white";

 wall=createSprite(1500,200,60,height/2);
 wall.shapeColor="white";
 

}

function draw() {
  background(0); 
 
  isTouching(car,wall);
  if(wall.x-car.x<(car.width+wall.width)){
    car.velocityX=0;
      
    var deformation=0.5*weight*speed*speed*22509
      
      if(deformation>180){
        car.shapeColor="green";
      }
      if(deformation<180 && deformation>100){
        car.shapeColor=(230,230,0);
      }
      if(deformation<100){
        car.shapeColor=(255,0,0);
      }

  }
  
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<=object2.width/2+object1.width/2
      && object2.x-object1.x<=object2.width/2+object1.width/2
     && object1.y-object2.y<=object2.height/2+object1.height/2
     && object2.y-object1.y<=object2.height/2+object1.height/2){
          return true
      }else {
          return false
      }
}