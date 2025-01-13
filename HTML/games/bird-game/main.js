//here the gol

let sorce=0;
let hue=0;
let trans=0;
var gameSpeed=2;
var gameStart=false;
let frame1=0;
let frame2=0;
let movin=false;
let angle=0;


let bgimg=new Image();
bgimg.src="bg.png";


// console.log();
function see(see){
console.log(see);
}



function randint(min,max){
return Math.floor(Math.random() * (1+max-min) + min);
}



function ISButtonEvent(traget,condion,fun){
traget.addEventListener(condion,fun);
}

function showBoom(c){

ctx.drawImage(boom.img,
0,0,
boom.width,boom.height,
c.x - c.x/8,
c.y - c.y/2,
30,30
)
}

function IScollision(ObjectA,ObjectB){
return(ObjectA.x + ObjectA.width >= ObjectB.x &&
ObjectA.x <= ObjectB.x + ObjectB.width &&
ObjectA.y + ObjectA.height >= ObjectB.y &&
ObjectA.y <= ObjectB.y + ObjectB.height)
}


function CTXtext(c,t,x=cvs.width/1.76,y=15){
ctx.font="14px sans-serif"
ctx.fillStyle=c;
ctx.fillText(`${t}`,x,y);
}


const cvs=document.getElementById('cvs')
const ctx = cvs.getContext('2d');



let mainBox=document.getElementById('mainB0x'),
gameBox=document.getElementById('gameBox');

let gamePlay=document.querySelector('.gamePlay');


cvs.width=300;
cvs.height=300;



const bg=new Image();
//bg.src='birdspritesheet.png'
bg.src='BG.png'

let BG={
x1:0,
x2:cvs.width,
y:0,
width:cvs.width,
height:cvs.height
}


function gameOver(){

//document.createCommend
CTXtext('#00E1FF',`Game Is Over your source : ${sorce}`,0,cvs.height/2)
//appendChianed
//console.log(document.createComment(cvs))


document.createComment(document.body)

//h1.appendChild(c1)


}


function handleBG(){

if(BG.x1 <= -BG.width + gameSpeed/2) BG.x1= BG.width;
else BG.x1 -= gameSpeed/2;


if(BG.x2 <= -BG.width + gameSpeed) BG.x2= BG.width
else BG.x2 -= gameSpeed/2


ctx.drawImage(bg,BG.x1,BG.y,BG.width,BG.height)
ctx.drawImage(bg,BG.x2,BG.y,BG.width,BG.height)
}



function LetsPlay(){








// swpan new piller every 1 sacend
/*

setInterval(()=>{
pillers.unshift(new Piller())
},gameSpeed * 500)
*/

function gameLoop(){
window.requestAnimationFrame(gameLoop)
ctx.fillStyle='black'
ctx.fillRect(0,0,cvs.width,cvs.height)
//ctx.fillRect(60,80,40,40)


handleBG()

//display the bird
bird.update()

//display the Parlicles
handleParlicles()


//display the Pillers
handlePillersTop()




//display the pointBlock
block.draw()
HealthLosinBar.draw()




/*
pillers.forEach((piller)=>{
piller.update()
if(bird.x < piller.x + piller.width &&
bird.x + bird.width > piller.width &&
((bird.y < 0 + piller.top && bird.y + bird.height > 0) ||
(bird.y > cvs.height - piller.bottom &&
bird.y + bird.height < cvs.height ))){

//console.log('boom')
//ctx.drawImage(boom.img,bird.x - bird.x,bird.y - bird.y,boom.width,boom.height)

CTXtext('brown',`source : 0`,0,cvs.height/2)


}

})
*/





//display the diswapnBlock
Endblock.draw()
/*
pillers.forEach((piller)=>{
if(IScollision(block,piller)){
sorce++
}
//
//if Endblock and piller touch piller has diswapn

if(IScollision(Endblock,piller)){
pillers.pop()
see('pop')
}

})
*/


//if bird touch the piller game will over
/*
pillers.forEach((piller)=>{
if(IScollision(bird,piller)){
//pillers.pop()
//see('pop')
pillers='a'

document.write('gameOver\n')
//gameOver
}
})

*/



pillersBottom.forEach((piller)=>{

piller.update()

if(IScollision(HealthLosinBar,piller) && IScollision(bird,piller) && !bird.losin){


if(bird.lifePoint <= 0) gameOver()

showBoom(bird)
bird.losin=true
bird.lifePoint--

setTimeout(()=>{
bird.losin=false
},5000);
}


})


pillersTop.forEach((piller)=>{
piller.update()

if(IScollision(HealthLosinBar,piller) && IScollision(bird,piller) && !bird.losin){

if(bird.lifePoint <= 0) gameOver()

showBoom(bird)
bird.losin=true
bird.lifePoint--

setTimeout(()=>{
bird.losin=false
},5000);
}


})








CTXtext('#00E1FF',`source : ${sorce++}`,150,15)



CTXtext('#FF0051',`LIFE : ${bird.lifePoint}`,0,15)

angle+=0.3;
frame1++
//frame2++
hue+=3;


/*
ctx.drawImage(bgimg,0,0,
400,800,
20,20,
60,120
)*/


/*


ctx.drawImage(gg,
this.frameX*this.tileBlockWidth,
this.frameY*this.tileBlockHeight,
this.tileBlockWidth,
this.tileBlockHeight,
this.x,this.y,
this.width,this.height
)

if(this.frameX<this.TColumn-1){ this.frameX++}
else{ this.frameX=0}
}

*/

}gameLoop()


//gameLoop()

//ontouchend

ISButtonEvent(gameBox,'touchstart',()=>{
movin=true;
})


ISButtonEvent(gameBox,'touchend',()=>{
movin=false;
})

}

//main Start button

gamePlay.addEventListener('click',()=>{

gameBox.requestFullscreen()
LetsPlay()
gamePlay.style.display='none';



})


