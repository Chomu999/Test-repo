
let body=document.body;

let mainBox=document.querySelector('#mainBox');

let miniBox=document.getElementById('miniBox');

let startBtn=document.querySelector('.startGame');

let pre=document.querySelector('.gameStutes');


const cvs=document.querySelector("#cvs");
//let backgroundCvs=document.querySelector("#backgroundCvs");

const controllCvs=document.querySelector("#controllCvs")

const controllCtx = controllCvs.getContext("2d");

//const backgroundCtx = backgroundCvs.getContext("2d");

const ctx = cvs.getContext("2d");




let touch=['touchstart','touchmove','touchend'];
let mouseT=['mousedown','mousemove','mouseup'];

//let btnBox,btnLeft,btnRight,
let mainGameLoop;


const spaceShip='./spaceShipSheet.png'




let enemieSwpaning,starSwpaning;


let firingSpeed=22;

let lastTime=0;
let enemiesTimer=0;
let enemiesEnter=62;

let gameSpeed=2;

let allShipBoxs=[];
let enemies=[];
let arrows=[];
let exposions=[];




let swpanEnemiesCount=[
{level:30,name:'Raid 1'},
{level:60,name:'Raid 2'},
{level:90,name:'Raid 3'},
{level:120,name:'Raid 4'},
{level:150,name:'Raid 5'},
{level:180,name:'Raid 6'},
{level:210,name:'Raid 7'},
{level:240,name:'Raid 8'},
{level:270,name:'Raid 9'},
{level:300,name:'Raid 10'},

];



let CurrSwpanEnemiesCount=0;


let allINFO={
enemyKillTraget:0,
score:0,
enemySwpanRate:0

}





let crr={
canvas:{
width:0,
height:0,
x:0,
y:0,
},



distroyY:0,
playerY:0,




};


//let mainHI=undefined;
let levelCount=0;
let EnemiesIsScapeCount=0;
let LevelUP=false;

let fireSpeed=270;
let EnemiesSwpanSpeed=1000;




let movin={
goin:false,
top:false,
left:false,
right:false,
down:false,
speed:3.6,
};

let MOUSE={
x:undefined,
y:undefined,
}




