function Isittouching(stationary, moving){
    if((moving.x-stationary.x)<=((moving.width/2)+(stationary.width/2))
    && (stationary.x-moving.x)<=((moving.width/2)+(stationary.width/2))
    &&(moving.y-stationary.y)<=((moving.height/2)+(stationary.height/2))
    &&(stationary.y-moving.y)<=((moving.height/2)+(stationary.height/2))){
  
      return true;
    }
  
      else{
        return false;
      }
  }

  function bounceoff(bouncemove,bouncefixed){
    if((bouncemove.x-bouncefixed.x)<=((bouncemove.width/2)+(bouncefixed.width/2))
    && (bouncefixed.x-bouncemove.x)<=((bouncemove.width/2)+(bouncefixed.width/2))
    &&(bouncemove.y-bouncefixed.y)<=((bouncemove.height/2)+(bouncefixed.height/2))
    &&(bouncefixed.y-bouncemove.y)<=((bouncemove.height/2)+(bouncefixed.height/2))){
  
      return true
    }
      else{
        return false;
      }
    }