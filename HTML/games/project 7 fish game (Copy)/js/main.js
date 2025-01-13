
//localStorage.setItem("FishGameData", JSON.stringify(bufferData));

//rawData = localStorage.getItem("FishGameData");


//crrData = JSON.parse(rawData);



//console.table(crrData);







//const player=new NewFish(crrData.player.x,crrData.player.y,crrData.player.radius,'pink');



const startGame = () => {

isGamePlaying=true;

player=new NewFish(crrData.player.x,crrData.player.y,crrData.player.radius,'pink');


player.enrgy=crrData.enrgyBar.crr;
player.hunger=crrData.hungerBar.crr;
player.speed=crrData.player.speed;


gameLoop = () => {

mainGameLoop=requestAnimationFrame(gameLoop);

ctx.fillStyle='rgba(0,0,130,0.28)';

ctx.fillRect(0,0,canvas.width,canvas.height);


player.draw(ctx);
player.update(mouse);



fishess.forEach((fish)=>{
fish.draw(ctx)
fish.update()
})


fishess.forEach((fish,i)=>{

if(fish.y < 0 - fish.radius*2){
fishess.splice(i,1);

//player.enrgy -= 1;

//if(player.radius >= 4) player.radius -= 4.6;
}

})


fishess.forEach((fish,i)=>{
if(ISCircleCollision(player,fish) || ISCircleCollision(fish,player)){

if(i > -1){

fishess.splice(i,1);

crrData.sorce.point += 1;
crrData.sorce.money += randint(1,7);

//player.hunger += 0.5;

//player.enrgy += fish.enrgy;


}

}
})





ctx.beginPath();
ctx.fillStyle='#25FF00';
for(let i=0;i<crrData.enrgyBar.crr;i++){
ctx.fillRect(20 + i*10,canvas.height - 40,4,10)
}
ctx.closePath();



ctx.beginPath();
ctx.fillStyle='#983000';
for(let i=0;i<crrData.hungerBar.crr;i++){
ctx.fillRect(20 + i*10,canvas.height - 20,4,10)
}
ctx.closePath();






CTXText({text:`sorce : ${crrData.sorce.point}`,color:'orange'
});

CTXText({
text:`money : ${crrData.sorce.money}`,color:'#00FF1E',pos:{x:5,y:35}
});




if(gameSpeed%190 === 0) hendelFishess();


//update the localStorage Data
if(gameSpeed%2 == 0){
bufferData = crrData;
localStorage.setItem("FishGameData", JSON.stringify(bufferData));
}





gameSpeed++;



}

gameLoop()


}