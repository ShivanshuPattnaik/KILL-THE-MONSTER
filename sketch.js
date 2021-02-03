// KILL THE MONSTER
// BY SHIVANSHU PATTNAIK

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// MAIN VARIABLES {ENGINE, WORLD}
var engine;
var world;

// BACKGROUND VARIABLE
var bg;

// OBJECT VARIABLES
var ground;
var hero;
var fly;
var monster;

// OBSTACLE VARIABLES
var o1, o2, o3, o4, o5, o6, o7, o8, o9, o10;
var o11, o12, o13, o14, o15, o16, o17, o18, o19, o20, o21;
var o21, o22, o23, o24, o25, o26, o27, o28, o29, o30, o31;

function preload() {

  bg = loadImage("images/GamingBackground.png");

}

function setup() {
  
  var canvas = createCanvas(2000, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1000, 700, 4000, 10);

  hero = new Hero(400, 400, 500, 200);

  fly = new Fly(hero.body, {x : 350, y : 200});

  o1 = new Box(800, 0, 70, 70);
  o2 = new Box(800, 200, 70, 70);
  o3 = new Box(800, 250, 70, 70);
  o4 = new Box(800, 250, 70, 70);
  o5 = new Box(800, 200, 70, 70);
  o6 = new Box(800, 200, 70, 70);
  o7 = new Box(800, 200, 70, 70);
  o8 = new Box(900, 200, 70, 70);
  o9 = new Box(900, 200, 70, 70);
  o10 = new Box(900, 200, 70, 70);
  o11 = new Box(900, 200, 70, 70);
  o12 = new Box(900, 200, 70, 70);
  o13 = new Box(900, 200, 70, 70);
  o14 = new Box(900, 200, 70, 70);
  o15 = new Box(1000, 200, 70, 70);
  o16 = new Box(1000, 200, 70, 70);
  o17 = new Box(1000, 200, 70, 70);
  o18 = new Box(1000, 200, 70, 70);
  o19 = new Box(1000, 200, 70, 70);
  o20 = new Box(1000, 200, 70, 70);
  o21 = new Box(1000, 200, 70, 70);
  o22 = new Box(1100, 200, 70, 70);
  o23 = new Box(1100, 200, 70, 70);
  o24 = new Box(1100, 200, 70, 70);
  o25 = new Box(1100, 200, 70, 70);
  o26 = new Box(1100, 200, 70, 70);
  o27 = new Box(1100, 200, 70, 70);
  o28 = new Box(1100, 200, 70, 70);

  monster = new Monster(1400, 500, 300, 300);

}

function draw() {
  
  background(bg);

  Engine.update(engine);

  ground.display();

  hero.display();

  o1.display();
  o2.display();
  o3.display();
  o4.display();
  o5.display();
  o6.display();
  o7.display();
  o8.display();
  o9.display();
  o10.display();
  o11.display();
  o12.display();
  o13.display();
  o14.display();
  o15.display();
  o16.display();
  o17.display();
  o18.display();
  o19.display();
  o20.display();
  o21.display();
  o21.display();
  o21.display();
  o21.display();
  o21.display();
  o22.display();
  o23.display();
  o24.display();
  o25.display();
  o26.display();
  o27.display();
  o28.display();

  monster.display();

}

function mouseDragged() {

  Matter.Body.setPosition(hero.body, {x : mouseX, y : mouseY});

}
