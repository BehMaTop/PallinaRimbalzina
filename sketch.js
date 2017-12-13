var x =250;
var y = 200;
var acceleration = 0;
var gravity = 0.1;
var s = 40;
var t = 450;

function setup(){
createCanvas(500,500);  

}

function draw(){
  background(255);
  
  
 
 ball();

   y = y+acceleration; 
     acceleration = acceleration + gravity; 
      if (y > 500-10) { 
     acceleration = acceleration * -0.89;
     s = 20;
     t = t+2.5;
 
     
  }
       if(y< t){ s = 40; }


 
}

 
//BALL
function ball(){
    fill(64,64,64);
   ellipse(x,y,40,s);
   
 
}