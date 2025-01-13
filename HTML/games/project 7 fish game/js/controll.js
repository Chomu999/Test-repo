

//touch events

canvas.addEventListener('touchstart',(e)=>{
mouse.x = e.touches[0].clientX;
mouse.y = e.touches[0].clientY;
mouse.clicked=true;
})


canvas.addEventListener('touchmove',(e)=>{
mouse.x = e.changedTouches[0].clientX;
mouse.y = e.changedTouches[0].clientY;
mouse.clicked=true;

})

canvas.addEventListener('touchend',(e)=>{
mouse.x = e.changedTouches[0].clientX;
mouse.y = e.changedTouches[0].clientY;
mouse.clicked=false;

})

console.log('controls load ');


//mouse events

canvas.addEventListener('mouseenter',(e)=>{
mouse.x = e.x || e.changedTouches[0].clientX;
mouse.y = e.y || e.changedTouches[0].clientY;
mouse.clicked=true;
//console.log('mouse down')
})


canvas.addEventListener('mousemove',(e)=>{
mouse.x = e.x || e.changedTouches[0].clientX;
mouse.y = e.y || e.changedTouches[0].clientY;
mouse.clicked=true;

})

canvas.addEventListener('mouseout',(e)=>{
mouse.x = e.x || e.changedTouches[0].clientX;
mouse.y = e.y || e.changedTouches[0].clientY;
mouse.clicked=false;
//console.log('mouse up')
})


//change,input,click;

shopOptionBox.addEventListener('change',(e)=>{

let msg=e.target.value; //|| e.target.innerText;

showDetails.innerHTML=`item Number : ${shopChoice}`;
if(msg >= 0){
shopChoice = new  Number( msg );
}

})




shopOptionBox.addEventListener('click',(e)=>{

let msg=e.target.innerText;

console.log(msg)
//console.log(typeof msg)

msg = msg.toLowerCase()

if(msg == 'radius'&& player.radius <= limits.playerSize){



if(crrData.sorce.money >= (2 * (shopChoice * 100))){

player.radius += shopChoice;
crrData.player.radius += shopChoice;
crrData.sorce.money -= (2 * (shopChoice * 100));
}

}


else if(msg == 'speed' && player.speed <= limits.playerSpeed){

if(crrData.sorce.money >= (shopChoice * 100) ){

player.speed -= shopChoice;
crrData.player.speed -= shopChoice;
crrData.sorce.money -= (shopChoice * 100);
}

}


else if(msg == 'enrgy' && crrData.enrgyBar.crr <= limits.enrgy){


if(crrData.sorce.money >= (shopChoice * 100) ){

//player.speed -= shopChoice;
crrData.enrgyBar.crr += shopChoice;
crrData.sorce.money -= (shopChoice * 100);
}


}


else if(msg == 'hunger' && crrData.hungerBar.crr <= limits.hunger){




if(crrData.sorce.money >= (shopChoice * 100) ){

//player.speed -= shopChoice;
crrData.hungerBar.crr += shopChoice;
crrData.sorce.money -= (shopChoice * 100);
}



}


if(msg == 'buy !'){

console.log('buy !');

}









shopOptionBox.style.display='none';
optionBox.style.display='grid';


})



//advenc


/*
userInp.addEventListener('click',(e)=>{


showDetails.innerHTML=`you want to buy ${itemNum.value} ${userInp.value} `;

// userInp
// itemNum
});


form.addEventListener('submit',(e)=>{

e.preventDefault();

const msg=userInp.value.toLowerCase();

let num = new  Number( itemNum.value );


if(msg == "speed"){

if(crrData.sorce.money >= (num * 100) ){

//crrData.enrgyBar.max = crrData.sorce.point;
//crrData.enrgyBar.crr += num;
player.speed -= num;
crrData.player.speed -= num;
//crrData.hungerBar.max = crrData.sorce.point;
//crrData.hungerBar.crr += crrData.hungerBar.max;
crrData.sorce.money -= (num * 100);
}

}


else if(msg == "radius"){
if(crrData.sorce.money >= (2 * (num * 100)) && player.radius <= 15*5){

player.radius += num;
crrData.player.radius += num;

crrData.sorce.money -= (2 * (num * 100));




}
}

else{

showDetails.innerHTML=`try agian something wrong `;

}






userInp.value=''

})



*/


optionBox.addEventListener('touchstart',(e)=>{

if(e.target.classList[0] == "btns"){
e.target.classList.toggle('btnsEffects');
}
});






optionBox.addEventListener('click',(e)=>{


//this code for overWrite localStorage data & write default bufferData to localStorage

if(e.target.classList[2] == "newGame"){
localStorage.clear()
//localStorage.removeItem("FishGameData");

localStorage.setItem("FishGameData", JSON.stringify({hell:69}));



localStorage.setItem("FishGameData", JSON.stringify(backupData));


rawData = localStorage.getItem("FishGameData");


crrData = JSON.parse(rawData);

fishess=[];

startGame();

}
//this code for puase the Game

if(e.target.classList[2] == "puase"){

puaseGame();

}

//this code for resume the Game

if(e.target.classList[2] == "resume"){

resumeGame();

}

if(e.target.classList[2] == "shop"){

//resumeGame();


shopOptionBox.style.display='grid';
optionBox.style.display='none';

setTimeout(()=>{
mainBox.appendChild(btnBox)

}, 10);




}




//this code for continue the Game


if(e.target.classList[2] == "continue"){

startGame();

}

if(e.target.classList[2] == "showHiSorce"){

//showHiSorce()

}


if(e.target.classList[2] == "exit"){

//exit()

}


mainBox.removeChild(btnBox)


});



optionBox.addEventListener('touchend',(e)=>{

if(e.target.classList[0] == "btns"){
e.target.classList.toggle('btnsEffects');
}

})



window.addEventListener('dblclick',(e)=>{

if(isGamePlaying){
mainBox.appendChild(btnBox);

puaseGame();

//isGamePlaying=false;
//adding some btn 

optionBox.innerHTML=`

<div class="btns btn1 newGame">New Game</div>
<div class="btns btn3 resume">Resume</div>
<div class="btns btn3 shop">Shop</div>
<div class="btns btn5 showHiSorce">High Sorce</div>
<div class="btns btn6 exit">Exit</div>




`;

}


})
window.addEventListener('close',(e)=>{

alert('back');
});