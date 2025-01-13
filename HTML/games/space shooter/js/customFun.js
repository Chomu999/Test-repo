


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
draw(ctx){

ctx.fillStyle=this.color;
ctx.fillRect(this.x,this.y,this.width,this.height);

}




update(){
//this.draw();

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
draw(ctx){
ctx.beginPath()
//ctx.fillStyle=this.color;
ctx.strokeStyle=this.color;
ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2);
//ctx.fill()
ctx.stroke()
ctx.closePath()


}




update(){
//this.draw();

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






//custom img draw function

class NewSprite{
constructor({imgSrc,x,y,frame=1,width=16,height=16,scale=1}){

this.imgSrc=imgSrc;
this.img=new Image();
this.img.src=this.imgSrc;
this.frame=frame;
this.width=width;
this.height=height;

this.x=x;
//- this.width/4;
this.y=y;

this.scale=scale;
//- this.height/4;



}
draw(){
ctx.beginPath()

//ctx.drawImage(this.img,this.frame,0)



ctx.drawImage(this.img,0,0,64,64,this.x,this.y,this.scale * this.width,this.scale * this.height)


//ctx.fillStyle=this.color;
//ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
//ctx.fill()
ctx.closePath()


}




update(){
this.draw();



}


}













//


// arrow system


class Arrow{
constructor(x,y,radius,color){
this.x=x
this.y=y
this.color=color
this.radius=radius
this.speed={x:Math.random() * 3 - 1.5 ,y:Math.random() * 3 - 1.5}
}
draw(){
ctx.save()
ctx.beginPath();
//ctx.fillStyle=this.color;
ctx.strokeStyle=this.color;
ctx.arc(this.x,this.y,this.radius,45,Math.PI * 2,false)
//ctx.fill()
ctx.stroke()
ctx.closePath();
ctx.restore()
}

update(){
this.draw()

this.x += this.speed.x
this.y += this.speed.y


if(this.radius > 0.3){
this.radius -= 0.3;

}


}
}




























function arrowsAdds(x,y,radius,color){

for(let i=0;i<randint(4,12);i++){
let size=randint(2,radius/2)
exposions.push(new Arrow(x,y,size,color))
}
}




























//function handleEnemiesParlicles(left,right,y){

//enemiesParlicles.unshift(new Parlicle(left,right,y));

//}



//const spaceShip=new Image();

const bg=new Image();
bg.src='./img/Parallax100.png'

let BG={
y1:0,
y2:0,
width:0,
height:0
}








function handleBG(){

if(BG.y1 >= BG.height + gameSpeed/2){

BG.y1=0;
BG.y2= -BG.height;

}
else{

BG.y1 += gameSpeed/2;
BG.y2 += gameSpeed/2;

}


ctx.drawImage(bg,0,BG.y1,BG.width,BG.height);


ctx.drawImage(bg,0,BG.y2,BG.width,BG.height);

}





function swpanEnemies(time,cond){


if(time >= cond){
let health=3;
let tem=randint(1,4)

let size = 10 * tem

let x = randint(size,cvs.width -size);

enemies.unshift(new NewCircle(x, -3*size,size,`hsl(${randint(0,360)},100%,50%,1)`,health));





CurrSwpanEnemiesCount++;
}

}


//fire fun


function fire(time,cond){

if(time >= cond){

arrows.unshift(new NewCircle(
    player.x,
    player.y,3,'white'
))
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

//miniBox.style.width=window.innerWidth;
//miniBox.style.height=window.innerHeight;


let mw=window.innerWidth;
//miniBox.getBoundingClientRect().window
let mh=window.innerHeight;
//miniBox.getBoundingClientRect().height


let fw,fh;


fw= mw/100;
fh= mh/100;



if(mw <= mh){



cvs.width= fw*100;
cvs.height= fh*100;


//backgroundCvs.width=cvs.width
//backgroundCvs.height=cvs.height

controllCvs.width=cvs.width
controllCvs.height=cvs.height




crr.canvas.width = cvs.width;
crr.canvas.height = cvs.height;

crr.canvas.x=cvs.getBoundingClientRect().x
crr.canvas.y=cvs.getBoundingClientRect().y

BG.width = cvs.width
BG.height = cvs.height


BG.y2 = -BG.height
//BG.height = cvs.height


crr.distroyY= cvs.height*1 + 60;
crr.playerY= cvs.height/100 * 90;


MOUSE.y = crr.canvas.height/3 *2;



LeftBlock.height=crr.canvas.height;
LeftBlock.x=  -50;


RightBlock.height=crr.canvas.height;
RightBlock.x= crr.canvas.width + 30;





leftPad.width= cvs.width/100 *45;
leftPad.height= cvs.height
leftPad.x= 0
leftPad.y= 0




rightPad.width= cvs.width/100 *45;
rightPad.height= cvs.height;
rightPad.x= cvs.width - rightPad.width;
rightPad.y= 0






DistroyBlock.radius=crr.canvas.width/2;
DistroyBlock.x=crr.canvas.width/2;
DistroyBlock.y=crr.canvas.height*2;






}else{

cvs.width= fw*90;
cvs.height= fh*80;



//backgroundCvs.width=cvs.width
//backgroundCvs.height=cvs.height

controllCvs.width=cvs.width
controllCvs.height=cvs.height




crr.canvas.width = cvs.width;
crr.canvas.height = cvs.height;

crr.canvas.x=cvs.getBoundingClientRect().x
crr.canvas.y=cvs.getBoundingClientRect().y


crr.distroyY= crr.canvas.height*1 + 60;
crr.playerY= crr.canvas.height/100 * 80;
//crr.homeY= crr.canvas.height/100 * 100;

MOUSE.y = crr.canvas.height/3 *2;



LeftBlock.height=crr.canvas.height;
LeftBlock.x=  -50;


RightBlock.height=crr.canvas.height;
RightBlock.x= crr.canvas.width + 30;



leftPad.width= cvs.width/100 *45;
leftPad.height= cvs.height
leftPad.x= 0
leftPad.y= 0


rightPad.width= cvs.width/100 *45;
rightPad.height= cvs.height;
rightPad.x= cvs.width - rightPad.width;
rightPad.y= 0





}

}

