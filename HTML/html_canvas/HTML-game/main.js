let cvs=document.querySelector('.cvs');
let ctx=cvs.getContext('2d');

// cvs.width= window.innerWidth;
// cvs.height=window.innerHeight;
let btn2=document.querySelector('.btn2');
let btn4=document.querySelector('.btn4');
let btn6=document.querySelector('.btn6');
let btn8=document.querySelector('.btn8');

let speed=2.6;

cvs.width=330;
cvs.height=330;

let touch=['touchstart','touchmove','touchend']


function ISButtonEvent(traget,mothed,fun){
traget.addEventListener(mothed,fun)
}

class Block{
constructor(x,y,color){
this.pos={x:x,y:y}
this.width=16
this.height=16
this.color=color
}
draw(){
ctx.fillStyle=this.color
ctx.fillRect(this.pos.x,this.pos.y,this.width,this.height)
}
}

class Player{
constructor(color){
this.pos={x:32,y:32}
this.speed={x:0,y:0}
this.size=4
this.color=color
}
draw(){
ctx.fillStyle=this.color
ctx.beginPath()
ctx.arc(this.pos.x,this.pos.y,this.size,0,Math.PI * 2)
ctx.fill()
ctx.closePath()
}

update(){
this.draw()

this.pos.x += this.speed.x
this.pos.y += this.speed.y


}

}







let maps=
[
['a','a','a','a','a','a','a','a','a','a','a','a','a'],
['a',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','a'],
['a',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','a'],
['a',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','a'],
['a',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','a'],
['a',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','a'],
['a',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','a'],
['a',' ',' ',' ','a',' ',' ',' ',' ',' ',' ',' ','a'],
['a','a',' ','a','a','a',' ',' ',' ',' ',' ',' ','a'],
['a',' ',' ',' ','a',' ',' ',' ',' ',' ',' ',' ','a'],
['a',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','a'],
['a',' ',' ',' ',' ',' ',' ',' ',' ',' ','a',' ','a'],
['a',' ',' ',' ',' ',' ',' ',' ',' ','a','a','a','a'],
['a',' ',' ',' ',' ',' ',' ',' ',' ',' ','a',' ','a'],
['a',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','a'],
['a',' ',' ',' ','a',' ',' ',' ',' ',' ',' ',' ','a'],
['a','a','a','a','a','a','a','a','a','a','a','a','a']
];
let blocks=[];



// let block_dirt=new Block('brown')

// block_dirt.draw()

maps.forEach((row,i)=>{

row.forEach((symbol,j)=>{

switch (symbol) {
case 'a':
blocks.push(new Block(16 * j,16 * i,'brown'))


break;

}

})


})








let player = new Player('purple');


ISButtonEvent(btn2,touch[0],upS)
ISButtonEvent(btn4,touch[0],leftS)
ISButtonEvent(btn6,touch[0],rightS)
ISButtonEvent(btn8,touch[0],downS)


ISButtonEvent(btn2,touch[2],upM)
ISButtonEvent(btn4,touch[2],leftM)
ISButtonEvent(btn6,touch[2],rightM)
ISButtonEvent(btn8,touch[2],downM)



function upS(){
player.speed.y = -speed
}

function rightS(){
player.speed.x = speed
}

function leftS(){
player.speed.x = -speed
}

function downS(){
player.speed.y = speed
}


function upM(){
player.speed.y = 0
}

function rightM(){
player.speed.x = 0
}

function leftM(){
player.speed.x = 0
}

function downM(){
player.speed.y = 0
}









// cvs.addEventListener(touch[1],(e)=>{

// player.pos.x=e.changedTouches.clientX
// player.pos.y=e.changedTouches.clientY

// //console.log(e.changedTouches)

// })






function gameLoop() {
window.requestAnimationFrame(gameLoop)

ctx.fillStyle='#C5FFFC'
ctx.fillRect(0,0,cvs.width,cvs.height)

blocks.forEach((block)=>{
block.draw()






if(

player.pos.y - player.size + player.speed.y <= block.pos.y + block.height &&

player.pos.x + player.size + player.speed.x >= block.pos.x &&

player.pos.y + player.size + player.speed.y >= block.pos.y &&


player.pos.x - player.size + player.speed.x <= block.pos.x + block.width
){
console.log('is colliding')
player.speed.x=0
player.speed.y=0

}
















})

player.update()

}
gameLoop();



