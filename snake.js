// made by Comrade_Alyx
// spoce no usee my codee, im watching you
//canvas cars
var canvas;
var ctx;
//sneek vars
var head;
var apple;
var ball;
// apple and score vars
var dots;
var apple_x;
var apple_y;
var Score;
//directions
var leftDirection = false;
var rightDirection = true;
var upDirection = false;
var downDirection = false;
var inGame = true;
//gameloop vars
const dotSize = 10;
const allDots = 900;
const maxRand = 29;
const DELAY = 140;
const cHeight = 450;
const cWidth = 450;
//control vars
const LEFT_KEY = 65;
const RIGHT_KEY = 68;
const UP_KEY = 87;
const DOWN_KEY = 83;
const A = 37;
const D = 39;
const W = 38;
const S = 40;


//dot arrays
var x = new Array(allDots);
var y = new Array(allDots);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//does the inatial setup
function init() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    Score = 0;
    
    loadImages();
    createSnake();
    locateApple();
    setTimeout("gameCycle()", DELAY);
}
// music functions chrome is very retar and wont let me play on page load cause "you have to interact with it"
	function playMusic() {
		document.getElementById('music').play();
	}
	function pauseMusic(){
	  document.getElementById('music').pause();
	}
		function hurt() {
		document.getElementById('hurt').play();
	}
		function collect() {
		document.getElementById('collect').play();
	}
	//loads base images can be changed ;)
function loadImages() {
    head = new Image();
    head.src = 'head.png';
    
    ball = new Image();
    ball.src = 'dot.png';
    
    apple = new Image();
    apple.src = 'apple.png';
}

////////////////////////////////////////////////////////////////////////////////

//makes mah boi sneek
function createSnake() {

    dots = 4;
    for (var z = 0; z < dots; z++) {
        x[z] = 50 - z * 10;
        y[z] = 50;
    }
    
}
// checks the apple state 1/2
function checkApple() {

    if ((x[0] == apple_x) && (y[0] == apple_y)) {

        dots+= 1;
        locateApple();
    }
}

//tells the context thing what to do
function doDrawing() {
    
    ctx.clearRect(0, 0, cWidth, cHeight);
//     for (let i = 0; i < 10; i++) {
//       ctx.fillRect(0 + i*10, 0, 1, cHeight);
// }
    if (inGame) {

        ctx.drawImage(apple, apple_x, apple_y);
        for (var z = 0; z < dots; z++) {
            
            if (z == 0) {
                ctx.drawImage(head, x[z], y[z]);
            } else {
                ctx.drawImage(ball, x[z], y[z]);
                
            }
        }
    } else {
      // head = new Image();
      // head.src = 'dedr.png';
       gameOver();
    }
}
//ends game when you lose
function gameOver() {
    
    ctx.fillStyle = 'green';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font = "30px Comic Sans MS";
    pauseMusic();
    hurt();
    ctx.fillText('Sneek did a ouch', cWidth/2, cHeight/2);
    newGame();
}
//nothing lol
function cheat(amount){
  
  score+= amount;
  document.getElementById("score").innerHTML = Score;
  dots+= amount;
 
}
//checks apples and calls other functions 2/2
function checkApple() {

    if ((x[0] == apple_x) && (y[0] == apple_y)) {

        dots += 1;
        locateApple();
        Score += 1;
        document.getElementById("score").innerHTML = Score;
        playMusic();
        collect();
        win();
    }
}
//the movement code
function move() {

    for (var z = dots; z > 0; z--) {
        x[z] = x[(z - 1)];
        y[z] = y[(z - 1)];
    }

    if (leftDirection) {
        x[0] -= dotSize;
        head = new Image();
          head.src = 'headr.png';
    }

    if (rightDirection) {
        x[0] += dotSize;
        head = new Image();
          head.src = 'headrr.png';
    }

    if (upDirection) {
        y[0] -= dotSize;
        head = new Image();
        head.src = 'headu.png';
    }

    if (downDirection) {
        y[0] += dotSize;
        head = new Image();
        head.src = 'headd.png';
    }
}
//collison check might be a little bu- feture filled
function checkCollision() {

    for (var z = dots; z > 0; z--) {

        if ((z > 4) && (x[0] == x[z]) && (y[0] == y[z])) {
            inGame = false;
        }
    }

    if (y[0] >= cHeight) {
        inGame = false;
    }

    if (y[0] < 0) {
       inGame = false;
    }

    if (x[0] >= cWidth) {
      inGame = false;
    }

    if (x[0] < 0) {
      inGame = false;
    }
}
//locate the apple/ and spawns it
function locateApple() {

    var r = Math.floor(Math.random() * maxRand);
    apple_x = r * dotSize;

    r = Math.floor(Math.random() * maxRand);
    apple_y = r * dotSize;
}
// does the cylcle of the game drawing and calling all game funcions
function gameCycle() {
    
    if (inGame) {
        checkApple();
        checkCollision();
        move();
        doDrawing();
        setTimeout("gameCycle()", DELAY);
    }
}
//makes the new game button avalible on ouch - gotta keep it family friendly 'round here
function newGame() {
  document.getElementById('newGame').style.display = "block";
}
//draws the E P I C board
function drawBoard(){
    for (var x = 0; x <= dotSize; x += 40) {
        context.moveTo(0.5 + x + 10, 10);
        context.lineTo(0.5 + x + 10, dotSize + 10);
    }

    for (var x = 0; x <= dotSize; x += 40) {
        ctx.moveTo(10, 0.5 + x + 10);
        ctx.lineTo(dotSize + 10, 0.5 + x + 10);
    }
    ctx.strokeStyle = "black";
    ctx.stroke();
    
}

//keylisteners for the movement code
onkeydown = function(e) {
    
    var key = e.keyCode;
    
    if ((key == LEFT_KEY || key == A) && (!rightDirection)) {
        
        leftDirection = true;
        upDirection = false;
        downDirection = false;
    }

    if ((key == RIGHT_KEY || key == D) && (!leftDirection)) {
        
        rightDirection = true;
        upDirection = false;
        downDirection = false;
    }

    if ((key == UP_KEY || key == W) && (!downDirection)) {
        
        upDirection = true;
        rightDirection = false;
        leftDirection = false;
    }

    if ((key == DOWN_KEY || key == S) && (!upDirection)) {
        
        downDirection = true;
        rightDirection = false;
        leftDirection = false;
    }
};
//scraped fetures :'<,(
// function myFunction() {
//   var x = document.getElementById("bruh");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
// document.addEventListener('keyup', function(e){
//   if(e.keyCode == 192)
//     debugMenu();
// })
//the press r to restart button- works at anytime ;)
document.addEventListener('keyup', function(e){
  if(e.keyCode == 82)
    window.location.reload();
})
//not working win condition
function win(){
  if (dots >= allDots) {
    ctx.fillStyle = 'green';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font = "30px Comic Sans MS";
    pauseMusic();
    ctx.fillText('Sneek did a win :)', cWidth/2, cHeight/2);
  }
}