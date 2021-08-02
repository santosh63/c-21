var fixedRectangle, movingRectangle,fixedRectangle1,fixedRectangle2,fixedRectangle3;


function setup() {
  createCanvas(800,400);
 fixedRectangle= createSprite(400, 200, 50, 50);
 movingRectangle=createSprite(600, 200, 50, 50);
  fixedRectangle.shapeColor ="red"
  movingRectangle.shapeColor = "red"

  fixedRectangle1= createSprite(100, 200, 50, 50);
  fixedRectangle1.shapeColor ="red"

  fixedRectangle2= createSprite(200, 200, 50, 50);
  fixedRectangle2.shapeColor ="red"

  fixedRectangle3= createSprite(300, 200, 50, 50);
  fixedRectangle3.shapeColor ="red"





}

function draw() {
        background(255,255,255); 
        
      
        movingRectangle.x=World.mouseX
        movingRectangle.y=World.mouseY
       
    if  ( isTouching(movingRectangle,fixedRectangle3)){
      fixedRectangle3.shapeColor ="black"
      movingRectangle.shapeColor = "black"
  
    }
    else{
      fixedRectangle3.shapeColor ="red"
      movingRectangle.shapeColor = "red"
    }
  drawSprites();

}
function isTouching(object1,object2){
  if(object1.x-object2.x<
    object2.width/2+object1.width/2
    && object2.x-object1.x<
    object2.width/2+object1.width/2
    &&
    object1.y-object2.y<
    object2.height/2+object1.height/2
    && object2.y-object1.y<
    object2.height/2+object1.height/2
    )
              {
                   return true;
              }
              else{
                   return false;
              }
 }



















