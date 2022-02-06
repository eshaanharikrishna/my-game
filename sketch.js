var play, help, playImage, helpImage
var gameState = "start"
var back, backImage
var player1, player2;
var ground;
var cock;
var net;
var playerscore = 0;
var compscore = 0
function preload() {
  playImage = loadImage("images/play1.png")
  helpImage = loadImage("images/help.png")
  backImage = loadImage("images/back.png")
  robotImage = loadImage("images/robot.png")
  playerImage = loadImage("images/player.png")

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  play = createSprite(windowWidth / 2 - 40, windowHeight / 2 - 100, 50, 50);
  //play.debug = true
  play.setCollider("rectangle", 0, 0, 400, 150)
  play.addImage("play", playImage)

  help = createSprite(windowWidth / 2 - 40, windowHeight / 2 + 80)
  //help.debug = true
  help.setCollider("rectangle", 0, 0, 400, 150)
  help.addImage("help", helpImage)

  help.scale = 0.6
  play.scale = 0.8

  back = createSprite(100, 100)
  back.debug = true
  back.setCollider("rectangle", 0, 0, 300, 150)
  back.addImage("back", backImage)
  back.scale = 0.6

  player1 = createSprite(windowWidth / 2 - 250, windowHeight / 2 + 250, 50, 50)
  player1.debug = true
  player1.addImage("player", playerImage)
  player1.scale = 0.5
  player1.setCollider("rectangle", 0, 0, 200, 150)


  player2 = createSprite(windowWidth / 2 + 250, windowHeight / 2 + 250, 50, 50)
  player2.debug = true
  player2.addImage("robot", robotImage)

  ground = createSprite(windowWidth / 2, windowHeight / 2 + 300, windowWidth, 10)
  //ground.debug = true;

  cock = createSprite(windowWidth / 2 - 250, windowHeight / 2 + 280, 10, 10)
  //cock.debug = true;
  cock.setCollider("circle", 0, 0, 1);

  net = createSprite(windowWidth / 2, windowHeight / 2 + 250, 5, 150)
  net.visible = false


}

function draw() {
  background("black");
  if (gameState === "start") {
    play.visible = true
    help.visible = true
    back.visible = false
    player1.visible = false
    player2.visible = false
    cock.visible = false
    if (mousePressedOver(play)) {
      gameState = "play"
      play.visible = false
      help.visible = false

    }

    if (mousePressedOver(help)) {
      gameState = "help"
      play.visible = false
      help.visible = false
    }

  }
  if (gameState === "play") {
    /*if(keyDown("space")){
      player1.velocityY=-10
    }
    player1.velocityY=player1.velocityY+0.8*/

    player1.visible = true
    player2.visible = true


    player1.collide(ground)
    cock.collide(ground)
    cock.visible = true
    net.visible = true
    //cock.velocityX=-3
    //cock.velocityY=+4

    if (cock.isTouching(player1) && keyDown("space")) {
      cock.velocityX = random(4, 5)
      cock.velocityY = random(-4, -5)

    }

    if (cock.x > windowWidth / 2 - 100) {
      cock.velocityY = cock.velocityY + 0.3
    }
    if (cock.x > windowWidth / 2 + 250) {
      cock.x = windowWidth / 2 + 300
      cock.y = windowHeight / 2 + 280

    }
    if (cock.x < windowWidth / 2 - 250) {
      cock.x = windowWidth / 2 - 250
      cock.y = windowHeight / 2 + 280

    }
    textSize(30)
    text("Score-" + playerscore, windowWidth / 2 - 100, windowHeight / 2 - 250)
    text("Score-" + compscore, windowWidth / 2 + 50, windowHeight / 2 - 250)


    if (keyDown("left")) {
      player2.x = player2.x - 5
    }
    if (keyDown("up")) {
      player2.y = player2.y - 5
    }
    if (keyDown("right")) {
      player2.x = player2.x + 5
    }
    if (keyDown("down")) {
      player2.y = player2.y + 5
    }
    if (cock.isTouching(player2)) {
      cock.velocityX = random(-4, -5)
      cock.velocityY = random(-10, -11)
      console.log("hi")

    }
    if (keyDown("a")) {
      player1.x = player1.x - 5
    }
    if (keyDown("w")) {
      player1.y = player1.y - 5
    }
    if (keyDown("d")) {
      player1.x = player1.x + 5
    }
    if (keyDown("s")) {
      player1.y = player1.y + 5
    }

    if (cock.isTouching(net)) {
      cock.velocityY = 0
      cock.velocityX = 0
      cock.y = cock.y + 5
      //cock.collide(ground)

      console.log("hello")
    }
    // if(cock.istouching(ground) ){
    //   compscore
    // }

    // if (cock.isTouching(ground)) {
    //   console.log("s");
    //   compscore += 1;
    // }

    back.visible = true

    if (mousePressedOver(back)) {
      gameState = "start"
      back.visible = false
      net.visible = false
    }
  }

  if (gameState === "help") {
    back.visible = true
    if (mousePressedOver(back)) {
      gameState = "start"


    }
  }

  drawSprites();
}