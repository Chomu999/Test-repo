const player = new NewCircleFill(160,0,20, 'gold',10)

//const homeBlock = new NewBox(0,0,cvs.width*2,6,'#FF9000',100)


const LeftBlock = new NewBox(-30,0,2,crr.canvas.height)


const playerBox = new NewBox(160,0,player.radius*2)

const RightBlock = new NewBox(cvs.width+30,0,2,crr.canvas.height)


const DistroyBlock=new NewCircle(cvs.width/2,1400,cvs.width/2,'white')



const leftPad=new NewBox(0,0,0)

const rightPad=new NewBox(0,0,0)

const mouse=new NewBox(0,0,10)






//let parlicles=[]


//local storage
//console.log(localStorage)










let hiscore=localStorage.getItem("hiscore")

var hhiscore;


if(hiscore === null){

hhiscore=0;

localStorage.setItem("hiscore", JSON.stringify(hhiscore))


}else{

hhiscore = JSON.parse(hiscore);


//mainHI = hhiscore

}


























startBtn.addEventListener('click',startGame);






function startGame(){


reSize()

player.health=10;
allINFO[0].score=0;
levelCount=0;



enemies=[];
//stars=[];
arrows=[];
booms=[];
exposions=[];


mainBox.removeChild(startBtn)



starSwpaning = setInterval(swpanStars, 2*1000)



enemieSwpaning = setInterval(swpanEnemies, 1*900);





firing = setInterval(fire, 1*280);


// btnBox.appendChild(btnLeft)
// btnBox.appendChild(btnRight)
// miniBox.appendChild(btnBox)

//.style.display='none'

miniBox.requestFullscreen()


//main LOOP function here





function gameLoop(){

mainGameLoop = requestAnimationFrame(gameLoop)

//ctx.clearRect(0,0,cvs.width,cvs.height)
ctx.fillStyle='rgba(0,0,0,0.18)';
ctx.fillRect(0,0,cvs.width,cvs.height)



//




stars.forEach((star,i)=>{

star.update();
star.speed.y = 0.8;


})



stars.forEach((star, i)=>{


if(ISCircleCollision(star,DistroyBlock)){

if(i > -1){

stars.splice(i,1)

}

}



})







leftPad.update();

leftPad.width= crr.ctx.width;
leftPad.height= crr.ctx.left.height;
leftPad.x= crr.ctx.left.x;
leftPad.y= crr.ctx.left.y;


rightPad.update()

rightPad.width= crr.ctx.width;
rightPad.height= crr.ctx.right.height;
rightPad.x= crr.ctx.right.x;
rightPad.y= crr.ctx.right.y;


//

mouse.update()

mouse.x = MOUSE.x;
mouse.y = MOUSE.y;
//mouse.color='red'





//controlin code here

//update the playerBox
playerBox.update()

//update the player
player.update();
player.y = crr.playerY;


//moving between m0ve player as playerBox
playerBox.x = player.x -player.radius;
playerBox.y = player.y -player.radius;



//achayl moving function

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




arrows.forEach((arrow)=>{

arrow.speed.y = -3.80
arrow.update();

})

if(arrows.length >= 60)arrows.pop()









LeftBlock.update()
RightBlock.update()
DistroyBlock.update()



LeftBlock.height=crr.canvas.height;
LeftBlock.x= crr.poartl.leftx;


RightBlock.height=crr.canvas.height;
RightBlock.x=crr.poartl.rightx;



if(IScollision(playerBox,LeftBlock)){
player.x = crr.canvas.width -10;
}


if(IScollision(playerBox,RightBlock)){
player.x = -10;
}




DistroyBlock.radius=crr.canvas.width/2;
DistroyBlock.x=crr.canvas.width/2;
DistroyBlock.y=crr.canvas.height*2;






//update the enemiesBoxs


//update the enemies

enemies.forEach((enemy, i)=>{
enemy.update();
enemy.speed.y = 2.4;
})

exposions.forEach((epols, i)=>{
epols.update();
//enemy.speed.y = 2.4;


if(epols.size <= 1){
exposions.splice(i, 1)}

})







enemies.forEach((enemy, i)=>{
if(ISCircleCollision(enemy,DistroyBlock)){
if(i > -1){



player.losin=true
allINFO[0].score--;
player.health-=0.50;;
enemies.splice(i,1)
setTimeout(()=>{
player.losin=false;
},800);

}
EnemiesIsScapeCount++;
}
})






if(movin.goin===true && IScollision(mouse,leftPad)){
movin.left=true;
movin.right=false;
}
else if(movin.goin===true && IScollision(mouse,rightPad)){
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

arrowsAdds(enemy.x,enemy.y,enemy.color);

player.losin=true
allINFO[0].score--;
player.health-=0.50;
enemies.splice(i,1)
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

let mm=0,mn=5;

if(index > -1){

if(arrowIndex > -1){

//small enemies

arrowsAdds(enemy.x,enemy.y,enemy.color);

if(enemy.radius > 10 && mm==0){

for(let i=0;i<10;i++){

mn -= 1;

enemy.radius -= 1;

if(i >=9){

break;

mn=5;

}

}

setTimeout(()=>{

arrows.splice(arrowIndex, 1);
allINFO[0].score+=1;

},0)

    
}
//else part
else{

if(index > -1){

if(arrowIndex > -1){

setTimeout(()=>{

arrowsAdds(enemy.x,enemy.y,enemy.color);

enemies.splice(index, 1);

arrows.splice(arrowIndex, 1);

allINFO[0].score+=1;

if(allINFO[0].score > hhiscore){

hhiscore = allINFO[0].score;

localStorage.setItem("hiscore", JSON.stringify(hhiscore));

}

},0)

}

}

}

}

}

}

})

})





//level gen

if(enemies.length <= CurrSwpanEnemiesCount && CurrSwpanEnemiesCount >= swpanEnemiesCount[levelCount].level && swpanEnemiesCount[levelCount].level < allINFO[0].score){

if(levelCount >= swpanEnemiesCount.length -1){

levelCount=0;

CurrSwpanEnemiesCount=0;

}

else{

levelCount++;
player.health+=2;

}

}

//if player.health == 0 will gameOver

if(player.health <= 0 && player.losin){

cancelAnimationFrame(mainGameLoop);
clearInterval(starSwpaning);
clearInterval(enemieSwpaning);
clearInterval(firing);
stars.forEach(s=>s.speed.y=0);
enemies.forEach(e=>e.speed.y=0);
arrows.forEach(a=>a.speed.y=0);
player.speed.x=0;
//console.log(' gameOver');



//mainBox.removeChild(startBtn)
mainBox.appendChild(startBtn)
startBtn.innerHTML=`<pre>game over \n tap to play aegin</pre>`

}





//if(stars.length >= 600) stars.pop()





//DistroyBlock.update()

//fes


//set hiScore


//hue+=0.9
//sorce and display

pre.innerHTML=`score : ${allINFO[0].score} || <i style="color:#5400FF;">Level Name:${swpanEnemiesCount[levelCount].name}</i>, 
<i style="color:#59B100;">Health: ${player.health}</i> ,Kill Traget: ${swpanEnemiesCount[levelCount].level} ||
enemies scape : ${EnemiesIsScapeCount}
hiScore : ${hhiscore} Tap to Full-Screen mod`;

//ctx.fillStyle='#0022FF';
//ctx.fillRect(cvs.width/2,0,1,cvs.height)
//ctx.fillRect(0,cvs.height/2,cvs.width,1)





}





    gameLoop();



}
