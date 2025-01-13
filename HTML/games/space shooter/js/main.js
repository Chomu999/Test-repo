//makin player
const player = new NewCircleFill(160,0,20, 'gold',10)


const LeftBlock = new NewBox(-30,0,2,crr.canvas.height)


const playerBox = new NewBox(160,0,player.radius*2)

const RightBlock = new NewBox(cvs.width+30,0,2,crr.canvas.height)




const DistroyBlock=new NewCircle(cvs.width/2,1400,cvs.width/2,'white')



const leftPad=new NewBox(0,0,3)

const rightPad=new NewBox(0,0,3)

const mouse=new NewBox(0,0,10)







let hiscore=localStorage.getItem("hiscore");

let hhiscore;

if(hiscore === null){

hhiscore=0;

localStorage.setItem("hiscore", JSON.stringify(hhiscore))


}else{

hhiscore = JSON.parse(hiscore);


//mainHI = hhiscore

}
// delete document.body;



















//let spaceShipT='./img/spaceShipSheet.png'





startBtn.addEventListener('click',startGame);






function startGame(){


mainBox.requestFullscreen()

reSize()

player.health=10;
allINFO.score=0;
levelCount=0;



enemies=[];
arrows=[];
exposions=[];


mainBox.removeChild(startBtn)








//main LOOP function here



//let then = Date.now();
let now=0;


function gameLoop(){

mainGameLoop = requestAnimationFrame(gameLoop)


enemiesTimer++
if(enemiesTimer >= enemiesEnter +1){
enemiesTimer=0
}


now++
if(now >= firingSpeed +1){
now=0
}






//ctx.clearRect(0,0,cvs.width,cvs.height)






//backgroundCtx.fillStyle='rgba(0,0,0,1)';
//backgroundCtx.fillRect(0,0,cvs.width,cvs.height)

//handleBG()


//controllCtx.fillStyle='rgba(0,0,0,0)';
controllCtx.clearRect(0,0,cvs.width,cvs.height)


//ctx.fillStyle='rgba(0,0,0,0.48)';
ctx.clearRect(0,0,cvs.width,cvs.height)





handleBG()








leftPad.draw(controllCtx);
//leftPad.update();


rightPad.draw(controllCtx)
//rightPad.update()


//

mouse.draw(controllCtx)
mouse.update()

mouse.x = MOUSE.x;
mouse.y = MOUSE.y;
//mouse.color='red'





//controlin code here

//update the playerBox
playerBox.draw(ctx)
playerBox.update()

//update the player
player.draw(ctx);
player.update();
player.y = crr.playerY;



//moving between m0ve player as playerBox
playerBox.x = player.x -player.radius;
playerBox.y = player.y -player.radius;



//player moving function

if(movin.left && !movin.right){
player.speed.x = -movin.speed;
}
else if(movin.right && !movin.left){
player.speed.x = movin.speed;
}
else{
player.speed.x = 0;
}








//enemies function

fire(now,firingSpeed)

swpanEnemies(enemiesTimer,enemiesEnter)




arrows.forEach((arrow,i)=>{

arrow.draw(ctx);
arrow.update();
})


arrows.forEach((arrow,i)=>{

arrow.speed.y = -3.80;

if(arrow.y <= 0 - arrow.radius){
arrows.splice(i,1);
}

})







LeftBlock.draw(ctx);
LeftBlock.update();

RightBlock.draw(ctx);
RightBlock.update();

DistroyBlock.draw(ctx);
DistroyBlock.update();



if(IScollision(playerBox,LeftBlock)){
player.x = crr.canvas.width -10;
}


if(IScollision(playerBox,RightBlock)){
player.x = -10;
}





exposions.forEach((epols, i)=>{
epols.draw(ctx);
epols.update();


if(epols.radius <= 0.4)exposions.splice(i,1)

})






enemies.forEach((enemy, i)=>{

enemy.draw(ctx);
enemy.update();
enemy.speed.y = 2.4;




if(ISCircleCollision(enemy,DistroyBlock)){

if(i > -1){
player.losin=true;

allINFO.score--;

player.health-=0.5;

enemies.splice(i,1);



setTimeout(()=>{
player.losin=false;
},800);

}

EnemiesIsScapeCount++;
}

})











if(movin.goin && IScollision(mouse,leftPad)){
movin.left=true;
movin.right=false;
}
else if(movin.goin && IScollision(mouse,rightPad)){
movin.right=true;
movin.left=false;
}else{
movin.right=false;
movin.left=false;
}



enemies.forEach((enemy,i)=>{


if(ISCircleCollision(enemy,player)){

if(!player.losin){

if(i > -1){

arrowsAdds(enemy.x,enemy.y,enemy.radius,enemy.color);

player.losin=true;

allINFO.score--;

player.health-=0.50;

enemies.splice(i,1);

setTimeout(()=>{

player.losin=false;

},800);

}

}

}

})




//shoot and desipair





enemies.forEach((enemy, index)=>{



if(index > -1){


if(enemy.radius <= 10){

enemies.splice(index,1);

}



}


arrows.forEach((arrow,arrowIndex)=>{


if(ISCircleCollision(arrow,enemy)){

if(index > -1){

if(arrowIndex > -1){

//small enemies
if(enemy.radius > 10){

arrowsAdds(enemy.x,enemy.y,enemy.radius,enemy.color);

enemy.radius -= 10;



setTimeout(()=>{

arrows.splice(arrowIndex, 1);

arrowsAdds(arrow.x,arrow.y,arrow.radius,arrow.color)
allINFO.score+=1;

},0)


}



}

}

}

})

})







//level gen

if(enemies.length <= CurrSwpanEnemiesCount && CurrSwpanEnemiesCount >= swpanEnemiesCount[levelCount].level && swpanEnemiesCount[levelCount].level < allINFO.score){

if(levelCount > swpanEnemiesCount.length-1){

levelCount=0;

CurrSwpanEnemiesCount=0;

}

else{

levelCount++;
player.health+=2;

}

}





if(allINFO.score > hhiscore){

localStorage.setItem("hiscore", JSON.stringify(allINFO.score))



}else{

hhiscore = JSON.parse(hiscore);

}



//if player.health == 0 will gameOver

if(player.health <= 0 && player.losin){

cancelAnimationFrame(mainGameLoop);



enemies.forEach(e=>e.speed.y=0);
arrows.forEach(a=>a.speed.y=0);
player.speed.x=0;



mainBox.appendChild(startBtn)
startBtn.innerHTML=`<pre>game over \n tap to play aegin</pre>`

}

else if(allINFO.score >= swpanEnemiesCount[9].level){

cancelAnimationFrame(mainGameLoop);


enemies.forEach(e=>e.speed.y=0);
arrows.forEach(a=>a.speed.y=0);
player.speed.x=0;



mainBox.appendChild(startBtn)
startBtn.innerHTML=`<pre>You Won \n tap to play aegin</pre>`

}








//DistroyBlock.update()





pre.innerHTML=`score : ${allINFO.score} || <i style="color:#5400FF;">Level Name:${swpanEnemiesCount[levelCount].name}</i>, 
<i style="color:#59B100;">Health: ${player.health}</i> ,Kill Traget: ${swpanEnemiesCount[levelCount].level} || enemies scape : ${EnemiesIsScapeCount}
hiScore : ${hhiscore} Tap to Full-Screen mod`;





}





//cvs.onload = setInterval(gameLoop,500);

gameLoop()

}
