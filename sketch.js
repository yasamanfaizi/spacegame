var score = 0;
function preload(){
  playerImg = loadImage("image-removebg-preview (5).png")
  bgImg = loadImage("bg.jpeg")
  bullet1 = loadImage("bullet1-removebg-preview.png")
  enemY = loadImage("enemy1.png")
  eneMy = loadImage("enemy2.png")
  enEmy = loadImage("enemy3.png")
}

function setup() {
createCanvas(windowWidth, windowHeight);
player = createSprite(width/2, height-100, 30,30)
player.addImage(playerImg)
player.scale = 0.5
e1 = createGroup()
e2 = createGroup()
e3 = createGroup()
b = createGroup()
}
function draw() {
  background(bgImg); 
   player.velocityX = 0;
if (keyDown("left")){
 player.velocityX = -5
}
if (keyDown("right")){
player.velocityX =5
}
if (keyDown("space") && frameCount%30 === 0){
  bullet = createSprite(player.x,player.y)
  bullet.addImage(bullet1)
  bullet.velocityY = -5
  bullet.scale = 0.1
  b.add(bullet)
}
  enemies();
  for (var i = 0; i<b.length; i++){
  if(b.get(i).isTouching(e1)){
    e1.destroyEach()
    b.get(i).destroy()
    score = score +1
  }
}
for (var i = 0; i<b.length; i++){
  if(b.get(i).isTouching(e2)){
    e2.destroyEach()
    b.get(i).destroy()
    score = score +2
  }
}
for (var i = 0; i<b.length; i++){
  if(b.get(i).isTouching(e3)){
    e3.destroyEach()
    b.get(i).destroy()
    score = score +3
  }
}
  drawSprites();
  fill("white")
  textSize(20)
  text("Score: "+score, 30, 50)
}

function enemies(){
  if (frameCount%50 === 0){
    var enemy = createSprite(random(100,width-100), 10)
    switch(Math.round(random(1,3))){
      case 1: enemy.addImage(enemY)
      enemy.scale = 0.5
      enemy.velocityY = 10
      e1.add(enemy)
      break
      case 2: enemy.addImage(eneMy)
      enemy.scale = 0.8
      enemy.velocityY = 15
      e2.add(enemy)
      break
      case 3: enemy.addImage(enEmy)
      enemy.scale = 0.1
      enemy.velocityY = 20
      e3.add(enemy)
      break
    }
    enemy.lifetime = 200
  }
}