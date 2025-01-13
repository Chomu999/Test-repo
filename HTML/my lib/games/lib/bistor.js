let cvs=document.querySelector('canvas');
let ctx = cvs.getContext('2d');

function randint(min,max){
return Math.floor(Math.random() * (max-min) + min)
}

function blockANDplayer(player,block){
return (
player.y - player.height + player.speed.y <= block.y + block.height &&

player.x + player.width + player.speed.x >= block.x &&

player.y + player.height + player.speed.y >= block.y &&


player.x - player.width + player.speed.x <= block.x + block.width
)

}



const gravity=0.5
const frection=0.69

class Mario{
constructor(width,height,color){
this.position={x: 0, y: 0}
this.velocity={x: 0, y: 0}
this.width=width
this.height=height
this.color=color
}

draw(){
ctx.fillStyle=this.color
ctx.fillRect(this.position.x, this.position.y, this.width,this.height)
}

update(){
this.draw()
this.position.x += this.velocity.x
this.position.y += this.velocity.y

if(this.position.y + this.height + this.velocity.y <= cvs.height ){
this.velocity.y += gravity
}
else{this.velocity.y = 0}
}

}







class Mario2{
constructor(width,height,color,health){
this.position={x: 0, y: 0}
this.velocity={x: 0, y: 0}
this.width=width
this.height=height
this.color=color
this.health=health
}

draw(){
ctx.fillStyle=this.color
ctx.fillRect(this.position.x, this.position.y, this.width,this.height)
}

update(){
this.draw()
this.position.x += this.velocity.x
this.position.y += this.velocity.y

if(this.position.y + this.height + this.velocity.y <= cvs.height ){
this.velocity.y += gravity
}
else{this.velocity.y = 0}
}

}



class flotItem1{
constructor(x,y,dx,dy,r,color){
this.x=x;
this.y=y;
this.dx=dx;
this.dy=dy;
this.r=r;
this.color=color;
}
draw(){

ctx.beginPath();
ctx.arc(this.x,this.y,this.r,0,Math.PI * 2,false);
ctx.strokeStyle='blue';
ctx.fillStyle=this.color
ctx.stroke();
ctx.fill()
}

update(){
this.draw()
if(this.x + this.r > cvs.width || this.x - this.r < 0){
this.dx = -this.dx
}
if(this.y + this.r > cvs.height || this.y - this.r < 0){
this.dy = -this.dy
}
this.x += this.dx * frection
this.y += this.dy * frection
}
}






//Player type 1
class Player{
constructor(width, height, color){
this.position={x: 0, y: 0}
this.velocity={x: 0, y: 0}
this.width=width
this.height=height
this.color=color
}
draw(){
ctx.fillStyle=this.color
ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
}
update(){
this.draw()
this.position.x += this.velocity.x
this.position.y += this.velocity.y
}
}



//Player type 3
class Player3{
constructor(width,height,color,health){
this.position={x: 0, y: 0}
this.velocity={x: 0, y: 0}
this.width=width
this.height=height
this.color=color
this.health=health
//this.heart={point: 0}
}

draw(){
ctx.fillStyle=this.color
ctx.fillRect(this.position.x, this.position.y, this.width,this.height)
}

update(){
this.draw()
this.position.x += this.velocity.x
this.position.y += this.velocity.y



if(this.position.y + this.height + this.velocity.y <= cvs.height ){
this.velocity.y += gravity
}
else{this.velocity.y = 0}
}

}

//Player type 4
class Player4{
constructor(width,height,color,health){
this.position={x: 0, y: 0}
this.speed={x: 0, y: 0}
this.width=width
this.height=height
this.color=color
this.health=health
//this.heart={point: 0}
}

draw(){
ctx.fillStyle=this.color
ctx.fillRect(this.position.x, this.position.y, this.width,this.height)
}

update(){
this.draw()
this.position.x += this.speed.x
this.position.y += this.speed.y



if(this.position.y + this.height + this.speed.y <= cvs.height ){
this.speed.y += gravity
}
else{this.speed.y = 0}
}

}


//Player5



class gvtBall1{
constructor(x,y,dy,r,color){
this.x=x;
this.y=y;
this.dy=dy;
this.r=r;
this.color=color;
}
draw(){
ctx.beginPath();
ctx.arc(this.x,this.y,this.r,0,Math.PI * 2,false);
ctx.fillStyle=this.color;
ctx.lineWidth=3;
ctx.stroke();
ctx.fill()
}

update(){
this.draw()

if(this.y + this.r + this.dy > cvs.height){
this.dy = -this.dy * frection
}
else{
this.dy += gravity
}

this.y += this.dy

}
}

class Player5{
constructor(width,height,color){
this.pos={x:0,y:0}
this.width=width;
this.height=height;
this.speed={x:0,y:0}
this.color=color;
}
draw(){
ctx.beginPath();
ctx.fillStyle=this.color
ctx.fillRect(this.pos.x,this.pos.y,this.width,this.height)
ctx.stroke();
ctx.fill()

}

update(){

this.draw()

if(this.pos.y + this.height + this.speed.y >= cvs.height && this.pos.x + this.width + this.speed.x <= cvs.width){
this.speed.y = -this.speed.y * frection
}


else{
this.speed.y += gravity
}


this.pos.x += this.speed.x
this.pos.y += this.speed.y


}
}







//Enemy type 1

class Enemy{
constructor(width,height,color){
this.position={x: 0, y: 0}
this.velocity={x: 0, y: 0}
this.width=width
this.height=height
this.color=color
}
draw(){
ctx.fillStyle=this.color
ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
}
update(){
this.draw()
this.position.x += this.velocity.x
this.position.y += this.velocity.y
}
}


class Enemy2{
constructor(width,height,color,position,speed){
this.position=position
this.speed=speed
this.width=width
this.height=height
this.color=color
}
draw(){
ctx.fillStyle=this.color
ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
}
update(){
this.draw()
this.position.x += this.speed.x
this.position.y += this.speed.y
}
}






class Arrow{
constructor(x,y,radius,color,velocity,enrgy){
this.x=x
this.y=y
this.radius=radius
this.color=color
this.velocity=velocity
this.enrgy=enrgy
}

draw(){
ctx.beginPath()
ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
ctx.fillStyle=this.color
ctx.fill()
}
update(){
this.draw()
this.x += this.velocity.x
this.y += this.velocity.y


}

}




class Arrow2{
constructor(x,y,radius,color,speed){
this.x=x
this.y=y
this.radius=radius
this.color=color
this.speed=speed
}

draw(){
ctx.beginPath()
ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
ctx.fillStyle=this.color
ctx.fill()

}
update(){
this.draw()
this.x += this.speed.x
this.y += this.speed.y


}

}






//button type 1
class BTN1{
constructor(tag,cls,clsN,width,height,append,func){
this.tag=tag
this.cls=cls
this.clsN=clsN
this.width=width
this.height=height
this.append=append
this.func=func
}
update(){
let btn=document.createElement(this.tag)
btn.setAttribute(this.cls,this.clsN)
btn.style.width=this.width
btn.style.height=this.height
this.append.appendChild(btn)
btn.addEventListener('click',this.func)

}
}



//button type 2
class BTN2{
constructor(tag,cls,clsN,width,height,append,on,func){
this.tag=tag
this.cls=cls
this.clsN=clsN
this.width=width
this.height=height
this.append=append
this.on=on
this.func=func
}
update(){
let btn=document.createElement(this.tag)
btn.setAttribute(this.cls,this.clsN)
btn.style.width=this.width
btn.style.height=this.height
this.append.appendChild(btn)
btn.addEventListener(this.on,this.func)

}
}




//button type 3

class BTN3{
constructor(tag,cls,clsN,width,height,append,on1,func1,on2,func2){
this.tag=tag
this.cls=cls
this.clsN=clsN
this.width=width
this.height=height
this.append=append
this.on1=on1
this.func1=func1
this.on2=on2
this.func2=func2
}
update(){
let btn=document.createElement(this.tag)
btn.setAttribute(this.cls,this.clsN)
btn.style.width=this.width
btn.style.height=this.height
this.append.appendChild(btn)
btn.addEventListener(this.on1,this.func1)
btn.addEventListener(this.on2,this.func2)

}
}


//button type 4

class BTN4{
constructor(tag,cls,clsN,width,height,append,on1,func1,on2,func2,on3,func3){
this.tag=tag
this.cls=cls
this.clsN=clsN
this.width=width
this.height=height
this.append=append
this.on1=on1
this.func1=func1
this.on2=on2
this.func2=func2
this.on3=on3
this.func3=func3
}
update(){
let btn=document.createElement(this.tag)
btn.setAttribute(this.cls,this.clsN)
btn.style.width=this.width
btn.style.height=this.height
this.append.appendChild(btn)
btn.addEventListener(this.on1,this.func1)
btn.addEventListener(this.on2,this.func2)
btn.addEventListener(this.on3,this.func3)

}
}


//button type 5

class BTN5{
constructor(tag,cls,clsN,append,on1,func1,on2,func2){
this.tag=tag
this.cls=cls
this.clsN=clsN
this.append=append
this.on1=on1
this.func1=func1
this.on2=on2
this.func2=func2
}
update(){
let btn=document.createElement(this.tag)
btn.setAttribute(this.cls,this.clsN)
btn.style.width=this.width
btn.style.height=this.height
this.append.appendChild(btn)
btn.addEventListener(this.on1,this.func1)
btn.addEventListener(this.on2,this.func2)

}
}

class NewEnemy{
constructor(x,y,radius,color,speedX){
this.x=x;
this.y=y;
this.radius=radius;
this.color=color;
this.speedX=speedX;
}
draw(){
ctx.beginPath();
ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
ctx.fillStyle=this.color;
ctx.fill();
ctx.closePath();
}


update(){
this.x += this.speedX;
//this.y += this.speed.y;
}
}




//collision system

function IScollision(ObjectA,ObjectB){
return (ObjectA.x + ObjectA.width >= ObjectB.x &&
ObjectA.x <= ObjectB.x + ObjectB.width &&
ObjectA.y + ObjectA.height >= ObjectB.y &&
ObjectA.y <= ObjectB.y + ObjectB.height)
}

//button clicking system


function ISButtonEvent(traget,condion,fun){
traget.addEventListener(condion,fun)
}



function DrawSpite(img,sX,sY,sW,sH,dX,dY,dW,dH){
ctx.drawImage(img,sX,sY,sW,sH,dX,dY,dW,dH)
}

























export {cvs, ctx};


export {BTN1,BTN2,BTN3,BTN4,BTN5};
export {Mario, Mario2};
export {Enemy,Enemy2,NewEnemy};
export {IScollision};
export {ISButtonEvent};
export {blockANDplayer};
export {DrawSpite};
export {randint};
export {gvtBall1};

export {Arrow,Arrow2};
export {flotItem1};

export {Player, Player3,Player4,Player5};




const authorPragraph= `If you use this libeary \n nice wtach this `;

(()=>{


console.log(authorPragraph)

})();