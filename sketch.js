const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup(){
createCanvas(400,900);
engine = Engine.create();
    world = engine.world;
  ground = new Ground(200,890,400,20);
 // ground.shapeColor=(0,128,0);
 for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


 for (var j = 25; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinkos(j,75));
 }

 for (var j = 50; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinkos(j,175));
 }

  for (var j = 25; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinkos(j,275));
 }

  for (var j = 50; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinkos(j,375));
 }
 
}

function draw(){
  background(0);
  ground.display();
  Engine.update(engine);
  
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
    
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
}