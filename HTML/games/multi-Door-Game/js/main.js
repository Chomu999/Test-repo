
const canvasDiv = document.getElementById('canvasDiv');

let btnBox=document.querySelector('#btnBox');
let btn2=document.querySelector('div.btn2');
let btn4=document.querySelector('div.btn4');
let btn5=document.querySelector('div.btn5');
let btn6=document.querySelector('div.btn6');
let btn8=document.querySelector('div.btn8');

let mainGameLoop;

const canvas = document.getElementById('cvs2d');
const ctx = canvas.getContext('2d');

let gravity = 2;
let frection = 0.69;

let touch=['touchstart','touchmove','touchend']

canvas.width=canvasDiv.getBoundingClientRect().width;
canvas.height=canvasDiv.getBoundingClientRect().height;


const gameOver = () => {


cancelAnimationFrame(mainGameLoop)
}
//canvas.width=window.innerWidth;
//canvas.height=window.innerHeight;


const mouse={
    x:0,
    y:0
};


const movin={
speed:3.5,
top:false,
jump:false,
left:false,
atteck:false,
right:false,
down:false,
};



//localStorage




//console.log(localStorage)



















const game = new Game({width:canvas.width,height:canvas.height})





const gameLoop = () => {
mainGameLoop = window.requestAnimationFrame(gameLoop);

ctx.fillStyle='rgba(0,0,0,0.04)';
ctx.fillRect(0,0,canvas.width,canvas.height);


game.draw(ctx)
game.update()




}


gameLoop()





