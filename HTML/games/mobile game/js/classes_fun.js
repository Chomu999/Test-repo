



//console.log('class');



class InputHandeler{
constructor(){
this.keys=[];
this.ISpress=false;
this.touchsCurrent={x:0,y:0};
this.kType={left:'left',right:'right',up:'up',down:'down'};
this.touchsDistens=50;

document.addEventListener('touchstart', e =>{

this.ISpress=true;
this.touchsCurrent.x = e.touches[0].pageX;
this.touchsCurrent.y = e.touches[0].pageY;

})

document.addEventListener('touchmove', e =>{


const ps={
    x:e.touches[0].pageX,
    y:e.touches[0].pageY
}



//up
if((this.touchsCurrent.y > (this.touchsDistens + ps.y)) && this.keys.indexOf('up') === -1){
this.keys=[]
this.keys.push('up');
}


//left
else if((this.touchsCurrent.x > (this.touchsDistens + ps.x)) && this.keys.indexOf('left') === -1){
this.keys=[]
this.keys.push('left');
}




//down
else if(((this.touchsCurrent.y + this.touchsDistens) < ps.y) && this.keys.indexOf('down') === -1){
this.keys=[]
this.keys.push('down');
}



//right
else if(((this.touchsCurrent.x + this.touchsDistens) < ps.x) && this.keys.indexOf('right') === -1){
this.keys=[]
this.keys.push('right');
}







//console.log(this.keys);

})



document.addEventListener('touchend', e =>{

this.ISpress=false;
/*
if(this.keys.indexOf('up') > -1){
this.keys.splice(this.keys.indexOf('up'),1);
}

if(this.keys.indexOf('left') > -1){
this.keys.splice(this.keys.indexOf('left'),1);
}

if(this.keys.indexOf('down') > -1){
this.keys.splice(this.keys.indexOf('down'),1);
}

if(this.keys.indexOf('right') > -1){
this.keys.splice(this.keys.indexOf('right'),1);
}
*/

this.keys=[]
this.touchsCurrent={x:0,y:0};

//console.log(this.keys);


})


}


}







/////////////////////////////////// ////////
class Box{
constructor(game){
this.game = game;
this.isDeath=false;
this.nextAnimate=0;
this.isJumping=false;
this.x=0;
this.y=0;
this.width=100;
this.height=100;
this.weight=0.2;
this.vel={x:0,y:0};
}

draw(ctx){
ctx.fillStyle='tan';
ctx.fillRect(this.x,this.y,this.width,this.height)
}

update(dt){

//animation


//for dailet
if(this.x <= (0 - this.width*2)) this.isDeath=true;
//for moving
this.x += this.vel.x * dt;
this.y += this.vel.y * dt;




if(this.y + this.height + this.vel.y <= this.game.height){
this.vel.y += this.weight;
}else{
this.vel.y = 0;

if(this.isJumping) this.vel.y = -28; this.isJumping=false;

}



}

}


function CTXtext(c,t,x=100,y=150,s=20){
ctx.font= `${s}px sans-serif`;
ctx.fillStyle=c;
ctx.fillText(`${t}`,x,y);
}


class Enemy{
constructor(game,maxFrame){
this.game = game;
this.isDeath=false;
this.frame={x:0,y:0};
this.maxFrame=maxFrame;
this.nextAnimate=0;
this.animationInterval=100;

}

draw(ctx){

ctx.drawImage(this.img, this.frame.x * this.sprite.width, this.frame.y * this.sprite.width, this.sprite.width, this.sprite.height, this.x - this.width/2, this.y - this.height/2, this.width, this.height);
}

update(dt){

//animation
if(this.animationInterval <= this.nextAnimate){

    if(this.frame.x >= this.maxFrame - 1) this.frame.x=0;
    else this.frame.x += 1;

this.nextAnimate=0;
}
else this.nextAnimate += dt;

//for dailet
if(this.x <= (0 - this.width*2)) this.isDeath=true;
//for moving
this.x += this.vel.x * dt;
this.y += this.vel.y * dt;


}

}

//child Worm
class Worm extends Enemy{
constructor(game,maxFrame){
super(game,maxFrame);
this.sprite={width:229,height:171}
this.width=this.sprite.width/2;
this.height=this.sprite.height/2;
this.img=wormimg;
this.x=this.game.width + this.width;
this.y=this.game.height - (this.height + 20);
this.vel={x:Math.random() * 0.2 + 0.2,y:0};
this.vel.x = -this.vel.x;
}


draw(ctx){
ctx.save()
//ctx.globalAlpha = 0.4;
super.draw(ctx);
ctx.restore()

}


update(dt){
super.update(dt);

//this.y += Math.sin(this.angle) * this.curve;
//this.angle += 0.05;
}

}

//child Ghost
class Ghost extends Enemy{
constructor(game,maxFrame){
super(game,maxFrame);
this.sprite={width:261,height:209}
this.width=this.sprite.width/2;
this.height=this.sprite.height/2;
this.img=ghostimg;
this.x=this.game.width + this.width;
this.y=Math.random() * this.game.height/1.2;
this.vel={x:Math.random() * 0.2 + 0.1,y:0};
this.angle=1;
this.curve=Math.random() * 3;
this.vel.x = -this.vel.x;
}


draw(ctx){
ctx.save()
ctx.globalAlpha = 0.4;
super.draw(ctx);
ctx.restore()

}

update(dt){
super.update(dt);

this.y += Math.sin(this.angle) * this.curve;
this.angle += 0.05;
this.curve=Math.random() * 3;
}

}


//child Player
class Player extends Enemy{
constructor(game,maxFrame){
super(game,maxFrame);
this.sprite={width:200,height:200}
this.width=this.sprite.width;
this.height=this.sprite.height;

this.img=playerimg;

this.x=this.width;
this.y=this.game.height - this.height;
this.vel={x:0,y:0};
this.weight=0.79;
this.isJumping=false;
this.animationInterval=40;
}


draw(ctx){
super.draw(ctx);

}

update(dt){

super.update(dt);


if(this.y + this.height + this.vel.y <= this.game.height){
this.vel.y += this.weight;

}else{

this.vel.y = 0; 
//this.y = this.game.height - this.height;
if(this.isJumping){

this.isJumping=false;
this.vel.y = -28;
}
}



}


}





class Background{
constructor(game){
this.game=game;
this.x=0;
this.y=0;
this.width=2400;
this.height=720;
this.img=backgroundimg;
}
update(dt){
if(this.x <= (0 - this.width)) this.x=0;

else this.x -= this.game.speed;
}

draw(ctx){

ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
ctx.drawImage(this.img,this.x + this.width,this.y,this.width,this.height);

}


}





class Game{
constructor(ctx,cw,ch){
this.ctx=ctx;
this.width=cw;
this.height=ch;

this.speed=1;

this.box= new Box(this);
this.inputHandler= new InputHandeler();

this.bg= new Background(this);
this.player= new Player(this,9);

this.enemies=[];


this.EnemyInterval=100;
this.EnemyTimer=0;
this.EnemyType=['worm','ghost','spider'];

}



update(dt){






this.enemies = this.enemies.filter(o => !o.isDeath);

this.bg.update(dt)


//swapn enemy in EnemyInterval
if(this.EnemyInterval < this.EnemyTimer){
this.#addEnemy();
this.EnemyTimer=0;
}else{
this.EnemyTimer += dt;

}
//

// updating all Array usin [...]
[...this.enemies].forEach((o) => o.update(dt));
//
this.box.update(dt);
//this.player.update(dt)



//



if(this.inputHandler.keys.indexOf('up')){
this.box.vel.y = -20;
}

else if(this.inputHandler.keys.indexOf('down')){
this.box.vel.y = 0;
}


}


draw(ctx){

this.bg.draw(ctx);

// drawing all Array usin [...]
[...this.enemies].forEach((o) => o.draw(ctx));


//this.player.draw(ctx)
this.box.draw(ctx)

CTXtext('red',this.inputHandler.keys,200,200,50);

}


#addEnemy(){

//this.enemies.push(new Ghost(t));

const randomEnemy = this.EnemyType[Math.floor(Math.random() * this.EnemyType.length)];

if(randomEnemy == 'worm'){
this.enemies.push(new Worm(this,6));
}
else if(randomEnemy == 'ghost'){
this.enemies.push(new Ghost(this,6));
}
else if(randomEnemy == 'spider'){
//this.enemies.push(new Spider(this));
}

this.enemies.sort((a,b)=>{ return a.y - b.y});

}

}






//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

class NewMob{
constructor(x,y,radius,color){
this.x=x;
this.y=y;
this.radius=radius;
this.color=color;
}
draw(ctx){



ctx.beginPath()
ctx.fillStyle=this.color;
ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
ctx.fill();
ctx.stroke();
ctx.closePath()


}



}

class NewFish extends NewMob{
constructor(x,y,radius,color,health=1){
super(x,y,radius,color);
this.speed=50;
this.health=health;
this.hunger=5;
this.enrgy=5;
}

update(mouse){
let dx = this.x - mouse.x;
let dy = this.y - mouse.y;

if(mouse.x != this.x){
this.x -= dx/this.speed;
}

if(mouse.y != this.y){
this.y -= dy/this.speed;
}

}

}




class NewEatabelFish extends NewMob{
constructor(x,y,radius,speed,enrgy,color){
super(x,y,radius,color);
this.speed=speed;
this.enrgy=enrgy;
}

update(){
//this.x += this.speed.x;
this.y += this.speed;
}

}








const hendelFishess = () =>{

let x=randint(30, canvas.width - 30)
let enrgy=Math.random() * 0.3;
let radius=randint(1,4) * 10;
fishess.unshift(new NewEatabelFish(x,canvas.height/3 * 4,radius,-Math.random() * 5,enrgy,'tan'))




}



//let movingC=0;



const ISCircleCollision = (ObjectA,ObjectB) => {
let dist=Math.hypot(ObjectA.x - ObjectB.x, ObjectA.y - ObjectB.y)

return (dist - ObjectB.radius - ObjectA.radius < 0.5)
}




const randint=(min,max)=>{
return Math.floor(Math.random() * (max-min) + min);
}


const CTXText = ({font='20px sans-serif',color='red',text='hello',pos={x:5,y:15}}) => {

this.font=font;
this.color=color;
this.text=text;
this.pos=pos;

ctx.beginPath();
ctx.font=this.font;
ctx.fillStyle=this.color;
ctx.fillText(this.text,this.pos.x,this.pos.y);
ctx.closePath();


}

const puaseGame = () => {

cancelAnimationFrame(mainGameLoop);
isGamePuase=true;
//startGame()

}
const resumeGame = () => {

//cancelAnimationFrame(mainGameLoop)
isGamePuase=false;
gameLoop();


}

/*

const continueGame = () => {

startGame()


}

const startNewGame = () => {

startGame()


}

const showHiSorce = () => {



}


const exit = () => {



}
*/