let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.height=500;
canvas.width=500;

ctx.font = "30px Arial";
ctx.fillText("Nasobilka", 10, 50);

var gameWidth = canvas.width;
var gameHeight = canvas.height;

var startBtn={
  x:157,
  y:240,
  width: 190,
  height: 40,
} // start button pozicie
function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function isInside(pos, rect){
  return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.heigth && pos.y > rect.y
}

canvas.addEventListener('click', function(evt) {
  var mousePos = getMousePos(canvas, evt);
  if (isInside(mousePos,startBtn)) {
    
    requestAnimationFrame(draw);
  }
}, false);

//nacitavanie obrazkov
let BgImage=document.createElement('image');
let image6 = new Image;
BgImage=image6;
BgImage.src='imgs/background.png'

let menuImage=document.createElement('image');
let image5 = new Image;
menuImage=image5;
menuImage.src='imgs/playGame.png'

let image = document.createElement('image');
let imgProp= new Image;
image = imgProp;
image.src= 'imgs/head.png';

let rPoint = document.createElement('image');
let image2=new Image;
rPoint=image2;
rPoint.src='imgs/rpoint.png';

let wPoint = document.createElement('image');
let image3=new Image;
wPoint=image3;
wPoint.src='imgs/wpoint.png';

let appleImg = document.createElement('image');
let image4=new Image;
appleImg=image4;
appleImg.src='imgs/apple.png';

class Box{ //hlava hadika
    constructor(){
        this.x=200;
        this.y=150;
        this.vx=0;
        this.vy=0;
        this.image= image;
        this.dis=0;
    }
}

let box=new Box();

//vykreslovanie obrazkov
function rpoint() {
    ctx.drawImage(rPoint,50,100,100,100);
  }

function wpoint() {
   ctx.drawImage(wPoint,150,100,100,100);
 }

function apple() {
  ctx.drawImage(appleImg,300,300,50,50);
}

function Menu(){
  ctx.drawImage(menuImage, 0, 0, 500, 500);
  ctx.beginPath();
  ctx.rect(157, 240, 190, 40);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillStyle = 'rgba(225,225,225,0.5)';
  ctx.fillRect(25,72,32,32);
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#000000';
  ctx.stroke();
  ctx.closePath();
  requestAnimationFrame(Menu);
}
requestAnimationFrame(Menu);

function Bg(){
  ctx.drawImage(BgImage, 0, 0, 500, 500);
}

function showBox() {
    ctx.fillStyle = '#000';
    ctx.drawImage(box.image,box.x + box.vx,box.y + box.vy);
  }

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    Bg();
    rpoint();
    apple();
    wpoint();
    showBox();
    Menu();
    requestAnimationFrame(draw);
  }  

  function move(e){
    if(e.keyCode == 39){
      box.x += 5; 
    }
    if(e.keyCode == 37){
      box.x -= 5; 
    }
    if(e.keyCode == 38){
      box.y -= 5; 
    }
    if(e.keyCode == 40){
      box.y += 5; 
    }
    
  }
  document.onkeydown = move;

 