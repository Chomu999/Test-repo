

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


const ISRectCollision = (ObjectA,ObjectB) => {
return (ObjectA.pos.x + ObjectA.size.width >= ObjectB.pos.x &&
ObjectA.pos.x <= ObjectB.pos.x + ObjectB.size.width &&
ObjectA.pos.y + ObjectA.size.height >= ObjectB.pos.y &&
ObjectA.pos.y <= ObjectB.pos.y + ObjectB.size.height)
}


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

const bufferData={
h:{
min:10,
max:10,
}
}




//console.log(localStorage)











class NewBox{
constructor({pos,size,color='orange'}){

this.pos=pos;
this.size=size;
this.color=color;
}
draw(ctx){

ctx.fillStyle=this.color;
ctx.fillRect(this.pos.x,this.pos.y,this.size.width,this.size.height);
}

}






class NewHuman extends NewBox{
constructor({pos,size,color}){

super({pos,size,color});

this.speed={x:0,y:0};
this.isJumping=false

}

update(){



this.pos.x += this.speed.x;
this.pos.y += this.speed.y;



if(this.pos.y + this.size.height + this.speed.y <= canvas.height){
this.speed.y += gravity;
}else{
this.speed.y = 0;

if(this.isJumping) this.speed.y = -28;

}


}


}






















const player = new NewHuman({pos:{x:200,y:0},size:{width:40,height:40},color:"#FF00D3"});

const LeftPiller = new NewBox({pos:{x:-80,y:0},size:{width:40,height:canvas.height},color:"#FF7800"});

const RightPiller = new NewBox({pos:{x:canvas.width + 3*40,y:0},size:{width:40,height:canvas.height},color:"#FF7800"});



player.color=`hsl(${Math.floor(Math.random() * 360)},100%,50%,1)`;

const gameLoop = () => {
mainGameLoop = window.requestAnimationFrame(gameLoop);

ctx.fillStyle='rgba(0,0,0,0.04)';
ctx.fillRect(0,0,canvas.width,canvas.height);


LeftPiller.draw(ctx);
RightPiller.draw(ctx);

player.draw(ctx);

player.update();



if(movin.top){
//player.speed.y = -movin.speed;

//for(let i=0;i<9;i++){ player.speed.y -= 3.9;}

}


else if(movin.left){
player.speed.x = -movin.speed;
}


else if(movin.right){
player.speed.x = movin.speed;
}


else if(movin.down){
player.speed.y = movin.speed;
}





if(ISRectCollision(LeftPiller,player)){
player.pos.x = canvas.width+player.size.width;
}
if(ISRectCollision(RightPiller,player)){
player.pos.x =  -player.size.width;
}







ctx.fillStyle="#00FF44";
ctx.fillRect(canvas.width/2,0,1,canvas.height);
ctx.fillRect(0,canvas.height/2,canvas.width,1);



}


gameLoop()








canvas.addEventListener('touchmove', (e)=>{
//arrowsAdds(e.changedTouches[0].clientX,e.changedTouches[0].clientY)


//let angle=Math.atan2(canvas.height / 2 - e.touches[0].clientY,canvas.width / 2 - e.touches[0].clientX);
//let Fangle=Math.round(angle * (180/Math.PI))

player.pos.x = e.touches[0].clientX;
player.pos.y = e.touches[0].clientY;

//mouse.x = e.x || e.touches[0].clientX - (window.innerWidth/2);
//mouse.y = e.y || e.touches[0].clientY - (window.innerHeight/2);
//mouse.y = changedTouches[0].clientY;
//console.log("x : ",mouse.x);
//console.log("y : ",mouse.y);
//console.log("angle : ",Math.floor(angle));

//window.console.log(window.Math.floor(window.Math.random() * 67 + 1))


})



btnBox.addEventListener(touch[0],(e)=>{

e.preventDefault()


if(e.target.classList[0] == "btns"){
e.target.classList.add('btnsEffects');
}

if(e.target.classList[2] == "jump"){
//if(player.speed.y == 0) 
player.isJumping=true;
}

if(e.target.classList[2] == "left"){
movin.left=true;
}
if(e.target.classList[1] == "btn5"){

}

if(e.target.classList[2] == "right"){
movin.right=true;
}

if(e.target.classList[2] == "down"){
//movin.down=true;
}




});


btnBox.addEventListener(touch[2],(e)=>{


e.preventDefault()



e.target.classList.remove('btnsEffects');


if(e.target.classList[2] == "jump"){

player.isJumping=false;

//player.speed.y=0;

}

if(e.target.classList[2] == "left"){
movin.left=false;
player.speed.x=0;
}

if(e.target.classList[1] == "btn5"){
//player.isJumping=false;
}

if(e.target.classList[2] == "right"){
movin.right=false;
player.speed.x=0;
}

if(e.target.classList[2] == "down"){
movin.down=false;
}


});


