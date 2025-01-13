







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