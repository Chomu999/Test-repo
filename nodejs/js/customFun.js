


class NewBox{
constructor(x,y,size,color='rgba(0,0,0,0.0001)',health=1){

this.x=x;
this.y=y;
this.size=size;
this.color=color;
this.width=this.size;
this.height=this.size;
this.speed={x:0,y:0};
this.losin=false;
this.health=health;
}
draw(){

ctx.fillStyle=this.color;
ctx.fillRect(this.x,this.y,this.width,this.height);

}




update(){
this.draw();

this.x += this.speed.x;
this.y += this.speed.y;



}


}




class NewCircle{
constructor(x,y,radius,color='rgba(0,0,0,0)',health=1){

this.x=x;
this.y=y;
this.radius=radius;
this.color=color;
this.speed={x:0,y:0};
this.losin=false;
this.health=health;
}
draw(){
ctx.beginPath()
//ctx.fillStyle=this.color;
ctx.strokeStyle=this.color;
ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
//ctx.fill()
ctx.stroke()
ctx.closePath()


}




update(){
this.draw();

this.x += this.speed.x;
this.y += this.speed.y;



}


}



class NewCircleFill{
constructor(x,y,radius,color='rgba(0,0,0,0)',health=1){

this.x=x;
this.y=y;
this.radius=radius;
this.color=color;
this.speed={x:0,y:0};
this.losin=false;
this.health=health;
}
draw(){
ctx.beginPath()
ctx.fillStyle=this.color;
ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
ctx.fill()
ctx.closePath()


}




update(){
this.draw();

this.x += this.speed.x;
this.y += this.speed.y;



}


}









//

class Parlicle{
constructor(left,right,y){

this.left=left;
this.right=right;


this.y=y;
this.size=randint(1,4);
this.colorAlpha=randint(1,999);
this.color=`rgba(255,255,255,0.${this.colorAlpha}`;
this.speed={x:0,y:0};
}
draw(){
ctx.fillStyle=this.color;
ctx.beginPath();
//for left smoke
ctx.arc(this.left,this.y,this.size,0,Math.PI * 2);

//for right smoke
ctx.arc(this.right,this.y,this.size,0,Math.PI * 2);

ctx.fill();
}

update(){
    
this.draw()
//this.y += gameSpeed;
//this.speed.y -= this.weight
this.x += this.speed.x



if(this.size >= 0.3){ this.size += 0.14}

}

}


// arrow system


class Arrow{
constructor(x,y,color){
this.x=x
this.y=y
this.color=color
this.size=randint(2,10)
this.speed={x:Math.random() * 3 - 1.5 ,y:Math.random() * 3 - 1.5}
}
draw(){

ctx.beginPath();
//ctx.fillStyle=this.color;
ctx.strokeStyle=this.color;
ctx.arc(this.x,this.y,this.size,45,Math.PI * 2,false)
//ctx.fill()
ctx.stroke()

ctx.closePath();
}

update(){
this.draw()

this.x += this.speed.x
this.y += this.speed.y


if(this.size > 0.3){
this.size -= 0.1;
}

}


}

function arrowsAdds(x,y,color){

for(let i=0;i<randint(10,19);i++){
exposions.push(new Arrow(x,y,color))
}
}


























function handlePlayerParlicles(left,right,y){

playerParlicles.unshift(new Parlicle(left,right,y));

playerParlicles.forEach((parlicle)=>{
//ctx.fillStyle='rgba(255,175,55,1)'
parlicle.update();
parlicle.y += gameSpeed;

})

if(playerParlicles.length > 16){ playerParlicles.pop()}

}



//function handleEnemiesParlicles(left,right,y){

//enemiesParlicles.unshift(new Parlicle(left,right,y));

//}







//handleParlicles()


function swpanEnemies(){



let health=3;

let size = randint(9,50)

let x = randint(size,cvs.width -size);

enemies.unshift(new NewCircle(x, -3*size,size,`hsl(${randint(0,360)},100%,50%,1)`,health));






CurrSwpanEnemiesCount++;

}


//fire fun


function fire(){
arrows.unshift(new NewCircle(
    player.x,
    player.y,3,'white'
))
}




function swpanStars(){

for(let i=0;i < randint(10,30);i++){
let gap=randint(-5,-20)

let x=randint(0,cvs.width -gap)
let y=randint(0, -cvs.height)
let size=randint(2,player.radius/4)

stars.unshift(new NewCircleFill(x+gap,y+gap,size,'#A3B5B8'));


}


}






 
//custom function




function randint(min,max){
return Math.floor(Math.random() * (max-min) + min)
}




function DrawSpite(img,sX,sY,sW,sH,dX,dY,dW,dH){
ctx.drawImage(img,sX,sY,sW,sH,dX,dY,dW,dH)
}





function IScollision(ObjectA,ObjectB){
return (ObjectA.x + ObjectA.width >= ObjectB.x &&
ObjectA.x <= ObjectB.x + ObjectB.width &&
ObjectA.y + ObjectA.height >= ObjectB.y &&
ObjectA.y <= ObjectB.y + ObjectB.height)
}






function ISCircleCollision(ObjectA,ObjectB){


let dist=Math.hypot(ObjectA.x - ObjectB.x, ObjectA.y - ObjectB.y)

return (dist - ObjectB.radius - ObjectA.radius < 1)

}







/// console.log();
function see(see){
console.log(see);
}



function CTXtext(c,t,x=cvs.width/1.76,y=15){
ctx.fillStyle=c;
ctx.fillText(`${t}`,x,y);
}



function ISButtonEvent(traget,condion,fun){
traget.addEventListener(condion,fun);
}




//for reSize the window
const reSize=()=>{



let mw=window.innerWidth;
let mh=window.innerHeight;
let fw,fh;


fw= mw/100;
fh= mh/100;



if(mw <= mh){

cvs.width= fw*90;
cvs.height= fh*85;




crr.canvas.width = cvs.width;
crr.canvas.height = cvs.height;

crr.canvas.x=cvs.getBoundingClientRect().x
crr.canvas.y=cvs.getBoundingClientRect().y



crr.distroyY= cvs.height*1 + 60;
crr.playerY= cvs.height/100 * 90;
crr.homeY= cvs.height/100 * 100;


MOUSE.y = crr.canvas.height/3 *2;

crr.poartl.leftx= -50;
crr.poartl.rightx= crr.canvas.width +30;


crr.ctx.width=crr.canvas.width/100 *45;



crr.ctx.left.height = crr.canvas.height;
crr.ctx.left.x = 0;
crr.ctx.left.y = 0;


crr.ctx.right.height = crr.canvas.height;
crr.ctx.right.x = crr.canvas.width - crr.ctx.width;
crr.ctx.right.y = 0;



}else{

cvs.width= fw*60;
cvs.height= fh*90;


crr.canvas.width = cvs.width;
crr.canvas.height = cvs.height;

crr.canvas.x=cvs.getBoundingClientRect().x
crr.canvas.y=cvs.getBoundingClientRect().y


crr.distroyY= cvs.height*1 + 60;
crr.playerY= cvs.height/100 * 80;
crr.homeY= cvs.height/100 * 100;

MOUSE.y = crr.canvas.height/3 *2;

crr.poartl.leftx= -50;
crr.poartl.rightx= crr.canvas.width +30;

crr.ctx.width=crr.canvas.width/100 *45;

crr.ctx.left.height = crr.canvas.height;
crr.ctx.left.x = 0;
crr.ctx.left.y = 0;

crr.ctx.right.height = crr.canvas.height;
crr.ctx.right.x = crr.canvas.width - crr.ctx.width;
crr.ctx.right.y = 0;



}

}

