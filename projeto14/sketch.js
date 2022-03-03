var bow , arrow,  background, gbg, pbg, bbg, rbg, arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score =0;
function preload(){
  backgroundImage = loadImage("background.jpeg");

  arrowImage = loadImage("arrow.png");
  bowImage = loadImage("bow.png");
  green_balloonImage = loadImage("greenballoon.png");
  pink_balloonImage = loadImage("pinkballoon.png");
  blue_balloonImage = loadImage("blueballoon.png");
  red_balloonImage = loadImage("redballoon.png");
}

function setup() {
  createCanvas(400, 400);
  
  //criando fundo
  scene = createSprite(1,215,800,800);
  scene.addImage(backgroundImage);
  scene.scale = 0.6
  
  // criando arco para atirar flecha
  bow = createSprite(362,245,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.2;
  
   score = 0
   gbg = new Group();
   pbg = new Group();
   bbg = new Group();
   rbg = new Group();
   arrowGroup = new Group();

   scene.x = scene.width/4;



}

function draw() {
 background(0);
  // movendo chão
    scene.velocityX = -3 

    if (scene.x < 70){
      scene.x = scene.width/4;
    }
  
  //movendo arco
  bow.y = World.mouseY
  
   // soltar flecha quando barra de espaço é pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //criando inimigos continuamente
 
   var select_balloon = Math.round(random(1,3));
  
    if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

   if(arrowGroup.isTouching(gbg)){
     gbg.destroyEach();
     arrowGroup.destroyEach();
     score=score+10;
   }
   if(arrowGroup.isTouching(pbg)){
    pbg.destroyEach();
    arrowGroup.destroyEach();
    score=score+10;
  }
  if(arrowGroup.isTouching(bbg)){
    bbg.destroyEach();
    arrowGroup.destroyEach();
    score=score+10;
  }
  if(arrowGroup.isTouching(rbg)){
    rbg.destroyEach();
    arrowGroup.destroyEach();
    score=score+10;
  }


  drawSprites();
  text("Pontuação: "+ score, 300,50)
}


// Criando flechas para arco
 function createArrow() {
  var arrow= createSprite(200, 200, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.4
  arrowGroup.add(arrow);
  arrow.debug = false
  arrow.setCollider("rectangle", 0, 0, 20, 8);
}

  function redBalloon() {
   var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
   red.addImage(red_balloonImage);
   red.velocityX = 3;
   red.lifetime = 150;
   red.scale = 0.1;
   rbg.add(red);
  }

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  bbg.add(blue);

}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  gbg.add(green)
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  pbg.add(pink);
}








