var x =640;
var y = 200;
var acceleration = 0;
var gravity = 0.1;
var s = 40;
var t = 450;

function setup(){
createCanvas(1280,500);  

}

function draw(){
  background(249,139,239);
  
  
 
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
    fill(269,159,259);
   ellipse(x,y,40,s);
   
 
}