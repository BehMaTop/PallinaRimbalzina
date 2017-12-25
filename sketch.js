var x =640;
var y = 0;
var xp = 200;
var yp = 150;
var xp2 = 200;
var yp2 = 200;
var xp3 = 200;
var yp3 = 250;
var acceleration = 0;
var gravity = 0.1;
var variable = -0.89
var s = 40;
var t = 450;
var myfont;
var tot = 0; 
var start = false;
var settings = true;

function preload() {
    myfont = loadFont('Pacifico-Regular.ttf');
}

function setup () {
createCanvas(1280,500);  

}

function draw(){
  background(249,139,239);
  textFont(myfont);
  textSize(50);
  textAlign(CENTER);
  fill(50);
  text("Pallina Rimbalzina",645,105); 
  fill(255);
  text("Pallina Rimbalzina",640,100);
 
 if(start == true){ 

   ball();
   calcoli();

 }
 pulsante();
 pulsante2();
 pulsante3();
}

 
//BALL
function ball(){
   fill(269,159,259);
   ellipse(x,y,40,s);
}

function pulsante(){
 
 fill(0);
 textFont(myfont);
 textSize(40);
 textAlign(CENTER);
 text("High",xp+4,104);
 fill(255);
 text("High",xp,100);

 
 fill(50);
 ellipse(xp+2,yp-2.5,40,40);
 fill(255);
 ellipse(xp,yp-5,40,40);
 

 fill(0);
 textFont(myfont);
 textSize(20);
 textAlign(CENTER);
 text("150",xp,yp);
 noStroke();
 
 var dp= dist(xp,yp,mouseX,mouseY);
 if(dp<=20&&mouseIsPressed&&settings==true){
  y = 150;
  start = true;
  settings = false; 
 }
}

function pulsante2(){
 fill(50);
 ellipse(xp2+2,yp2-2.5,40,40);
 fill(255);
 ellipse(xp2,yp2-5,40,40);
 fill(0);
 textFont(myfont);
 textSize(20);
 textAlign(CENTER);
 text("200",xp2,yp2);
 noStroke();
 
 var dp2= dist(xp2,yp2,mouseX,mouseY);
 if(dp2<=20&&mouseIsPressed&&settings==true){
  y=200;
  start = true;
  settings = false; 
  
 }
}

function pulsante3(){
 fill(50);
 ellipse(xp3+2,yp3-2.5,40,40);
 fill(255);
 ellipse(xp3,yp3-5,40,40);
 fill(0);
 textFont(myfont);
 textSize(20);
 textAlign(CENTER);
 text("250",xp3,yp3);
 noStroke();
 
 var dp3= dist(xp3,yp3,mouseX,mouseY);
 if(dp3<=20&&mouseIsPressed&&settings==true){
  y=250;
  variable = -.88
  gravity = .2
  start = true;
  settings = false; 
  
 }
}

function calcoli(){
 
 y = y+acceleration; 
     acceleration = acceleration + gravity; 
      if (y > 500-10) { 
     acceleration = acceleration * variable;
     s = 20;
     t = t+2.5;
     tot += 1;
 
     
  }
       if(y< t){ s = 40; }

 
}


 
    
   
 
