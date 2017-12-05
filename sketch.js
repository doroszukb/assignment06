var myImg
var myImg1
var flag= []
var w = 0 
var n;
var myData;
var usa
var usa0
var italy
var italy0
var russia
var russia0
var koniec


function preload(){
  myImg= loadImage("./assets/earth.png");
  myImg1= loadImage("./assets/astronaut.png");
  myData = loadJSON('./assets/peopleinspace.json');
  usa = loadImage("./assets/american.png");
  italy = loadImage("./assets/italian.png");
  russia = loadImage("./assets/russian.png");
  usa0 = loadImage("./assets/american0.png");
  italy0 = loadImage("./assets/italian0.png");
  russia0 = loadImage("./assets/russian0.png");
 koniec = loadImage("./assets/station.png");
  //for(var nrastr=0; nrastr<1; nrastr++){
  //flag.push=loadImage("./assets/"+myData.people[nrastr].countryflag+".jpg")
 // }
}

function setup() {
 createCanvas(windowWidth,windowHeight);
   n=new Niebo(windowWidth,windowHeight);   
  console.log(myData)

}
 
function draw() {
 background(29, 30, 51);
  n.rysuj();
 
 

 

 
  for ( y =0; y<windowHeight*5; y+=20) {
    stroke(200);
    strokeWeight(4);
    line(windowWidth/2,0+2*y,windowWidth/2,20+2*y)
   }
   
   
   var p = -100
//ziemia 
  push();
  noStroke()
   fill(150,150,150,5)
//ellipse(windowWidth/2,windowHeight+w,(windowWidth-2*p))
 translate(0,windowHeight-windowWidth/2);

 image(myImg,0,0+w,windowWidth,windowWidth/2);
 pop();
 noStroke();


 


 //image(flag[0],0,0,200,200);
//textSize(30)
//textAlign(CENTER)
//text(myData.people[0].name,windowWidth, windowHeight)

//kropka astronauta


for(var astr=0; astr<myData.number; astr++){
  stroke(60)
  strokeWeight(1)
  fill(242, 255, 109)
ellipse(windowWidth/2,windowHeight-windowWidth/2-myData.people[astr].careerdays*7+w+p,18);


  
}
noStroke()

//if (myData.people[astr].country == 'russia'){
//  image(russia,windowWidth/2-windowWidth/8,windowHeight-windowWidth/2-windowWidth/8,windowWidth/4,windowWidth/4);

//}


 //kropka
   fill('red');
 ellipse(windowWidth/2,windowHeight-windowWidth/2,15);
 image(myImg1,windowWidth/2-windowWidth/8,windowHeight-windowWidth/2-windowWidth/8,windowWidth/4,windowWidth/4);

for(astr=0; astr<myData.number; astr++){

if (windowHeight-windowWidth/2 < windowHeight-windowWidth/2-myData.people[astr].careerdays*7+w+3+p && windowHeight-windowWidth/2 > windowHeight-windowWidth/2-myData.people[astr].careerdays*7+w-3+p){
  
  if (myData.people[astr].country=="usa"){
   
  image(usa0,windowWidth/2-windowWidth/8,windowHeight-windowWidth/2-windowWidth/8,windowWidth/4,windowWidth/4);

}

if (myData.people[astr].country=="russia"){
  image(russia0,windowWidth/2-windowWidth/8,windowHeight-windowWidth/2-windowWidth/8,windowWidth/4,windowWidth/4);

}

if (myData.people[astr].country=="italy"){
  image(italy0,windowWidth/2-windowWidth/8,windowHeight-windowWidth/2-windowWidth/8,windowWidth/4,windowWidth/4);

}


  
    textSize(15)
  textFont('Source Code Pro')
 fill(200)
  text('Hi! My name is '+myData.people[astr].name+'. ' + myData.people[astr].bio1,windowWidth/2-windowWidth/8-150,windowHeight-windowWidth/2-windowWidth/8, 170,200)
}
}

image(koniec,0,-1950+w,windowWidth,windowWidth);
push()
textFont('Source Code Pro')
textSize(15)
fill(120)
text('scroll through the experience of astronauts to find out more about them',windowWidth*3/4,0,windowWidth/4,200)
pop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
// console.log(event);
if (w<1950) {
 w += event.deltaY/17;
} else {w=1949}
  if (w<0) {
w=0 
} 




}


function Gwiazda(maxx,maxy) {
 this.x=random(maxx);
 this.y=random(-5*maxy,5*maxy);
 this.p=random(5,15);
 this.rysuj=function(){
  noStroke();
     fill(200);
  ellipse(this.x, this.y+w, this.p); 
 }
}

function Niebo(maxx,maxy) {
 var gwd= [];
 var ilosc=maxx*maxy/500;
 for (var i=0;i<ilosc;i++) {
 gwd.push(new Gwiazda(maxx,maxy));
 }
 this.rysuj=function(){
  for (var i=0;i<ilosc;i++) {
   gwd[i].rysuj();
  }
 }
}