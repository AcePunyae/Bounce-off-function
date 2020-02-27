var fixedrect;
var moverect;
var fixedrect2
var fixedrect3

function setup() {
  createCanvas(800,400);
    moverect=createSprite(400, 200, 50, 50);
    fixedrect=createSprite(200,100,200,20);
    fixedrect2=createSprite(300,43.65,45.9786,72);
    fixedrect3=createSprite(100,20,80,80);

}

function draw() {
  background(255,255,255);  

fixedrect.VelocityX=0
fixedrect2.velocityX=0
moverect.VelocityX=0
fixedrect2.VelocityY=3
fixedrect.VelocityY=-4
  moverect.VelocityY=5
  
  console.log(moverect.x-fixedrect.x);
  
if (Isittouching(fixedrect2,moverect)){

  moverect.shapeColor= "blue" ;
  fixedrect2.shapeColor= "blue";
  
}
  

  else {
moverect.shapeColor="black";
fixedrect2.shapeColor="black";


  }

  if (Isittouching(fixedrect3,moverect)){

    moverect.shapeColor= "blue" ;
    fixedrect3.shapeColor= "blue";
    
  }
    
  
    else {
  moverect.shapeColor="black";
  fixedrect3.shapeColor="black";
  
  
    }
  
    if (Isittouching(fixedrect,moverect)){

      moverect.shapeColor= "blue" ;
      fixedrect.shapeColor= "blue";
      
    }
      
    
      else {
    moverect.shapeColor="black";
    fixedrect.shapeColor="black";
    

    
    
      }
    
    if(bounceoff(fixedrect,fixedrect2))  {
     
      fixedrect.VelocityY=fixedrect.VelocityY*(-1);
      fixedrect2.VelocityY=fixedrect2.VelocityY*(-1);
    }
  drawSprites();
}


  
  
