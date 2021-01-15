const engine = Matter.engine;
const world = Matter.World;
const bodies = Matter.Bodies;

var divisionHeight = 300;

var particles = [for (var p= 0; p <10; p= p+10) {
  particles.push(new particle(p,150));
}];

var plinkos = [ for (var j = 40; j <= width; j=j+50) {
  plinkos.push(new plinko(j,75)),
}
  for (var j = 15; j <= width-10; j=j+50) {
  plinkos.push(new plinko(j,175)),
}

  for (var j= 55; <= width-20; j=j+50) {
  plinkos.push(new plinko(j,275)),
}

  for (var j= 75; <= width-30; j=j+50) {
  plinkos.push(new plinko(j,375))
}

];

var divisions = [ for (var k = 100; k < 100; k = k+80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}
];

function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  if(frameCount%60===0) {
    particles.push(new particle(random(width/2-10)))
  }

  plinkos[j].display();
  divisions[k].display();
  particles[p].display();

  drawSprites();
}