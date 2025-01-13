
//some gobal variable
let player,mainGameLoop,gameLoop,isGamePlaying=false,isGamePuase=false;

let limits={

enrgy:30,
hunger:30,
playerSpeed:10,
playerSize:15*5,

};

let shopChoice;


let gameSpeed=2;

let fishess=[];


//let allBTNs=document.querySelectorAll('.btns');


//console.log(allBTNs);



const shopOptionBox=document.querySelector('#shopOptionBox');
const showDetails=document.querySelector('#showDetails');


shopOptionBox.style.display='none';

//const form=document.querySelector('#shop');
//const userInp=document.querySelector('#userInp');
//const itemNum=document.querySelector('#itemNum');
//const showDetails=document.querySelector('#showDetails');




const body = document.body;




const canvas=document.getElementById('cvs');
const ctx = canvas.getContext('2d');



const mainBox = document.querySelector('#mainBox');
const btnBox = document.querySelector('#btnBox');

const optionBox = document.querySelector('#optionBox');

optionBox.innerHTML=`

<div class="btns btn1 newGame">New Game</div>
<div class="btns btn4 continue">Continue</div>
<div class="btns btn5 showHiSorce">High Sorce</div>
<div class="btns btn6 exit">Exit</div>

`;



// optionBox.removeChild(allBTNs[1]);
// optionBox.removeChild(allBTNs[2]);





canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

//canvasPosition=canvas.getBoundingClientRect();

const mouse={
x: canvas.width/2, y: canvas.height/2,
clicked:false
};






//localStorage

let bufferData={

player:{
radius:5,
speed:50,
x: canvas.width/2,
y: canvas.height/2,
},

hungerBar:{
crr:5,
max:2,
},

enrgyBar:{
crr:5,
max:2,
},

sorce:{
exp:0,
money:500,
point:0,
ruby:9,
},

}

let backupData=bufferData;


let crrData,rawData;


//localStorage.setItem("FishGameData", JSON.stringify(bufferData));


rawData = localStorage.getItem("FishGameData");


if(rawData === null){

localStorage.setItem("FishGameData", JSON.stringify(bufferData));


rawData = localStorage.getItem("FishGameData");

}else{

crrData = JSON.parse(rawData);

}

crrData = JSON.parse(rawData);

