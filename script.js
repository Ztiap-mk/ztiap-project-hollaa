let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.height=500;
canvas.width=500;

ctx.font = "30px Arial";
ctx.fillText("Nasobilka", 10, 50);

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

class Box{
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

function rpoint() {
    ctx.drawImage(rPoint,50,100,100,100);
  }

function wpoint() {
   ctx.drawImage(wPoint,150,100,100,100);
 }

function apple() {
  ctx.drawImage(appleImg,300,300,50,50);
}

function showBox() {
    ctx.fillStyle = '#000';
    ctx.drawImage(box.image,box.x + box.vx,box.y + box.vy);
    if((box.x-=3) <= 0){
      box.x=500;
    }
    if(box.x==500){
      box.y-=100;
    }
    if(box.x==500){
      box.y+=100;
    }
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.font='30pt Pixel';
    ctx.fillStyle = 'Black';
    ctx.fillText('Násobilka s hadíkom Edom',30,100);
    rpoint();
    apple();
    wpoint();
    showBox();
  
    requestAnimationFrame(draw);
  }
  
  requestAnimationFrame(draw);




