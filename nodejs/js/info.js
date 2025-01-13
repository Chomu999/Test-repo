
let body=document.body;

let mainBox=document.querySelector('#mainBox');

let miniBox=document.getElementById('miniBox');

let startBtn=document.querySelector('.startGame');

let pre=document.querySelector('pre');



let cvs=document.querySelector("canvas")

let ctx = cvs.getContext("2d");




let touch=['touchstart','touchmove','touchend'];
let mouseT=['mouseenter','mousemove','mouseup'];

let btnBox,btnLeft,btnRight,mainGameLoop;


let firing,enemieSwpaning,starSwpaning;


let gameSpeed=2;

let playerParlicles=[];
let enemies=[];
let stars=[];
let arrows=[];
let booms=[];
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


let allINFO=[

{
enemyKillTraget:0,
score:0,
enemySwpanRate:0

}





];


let crr={
canvas:{
width:0,
height:0,
x:0,
y:0,
},

ctx:{
width:0,

left:{
height:0,
x:0,
y:0,
},

right:{
height:0,
x:0,
y:0,
},

},

distroyY:0,
playerY:0,
homeY:0,

EnemiesParlicle:{
left:0,
right:0,
y:0,
},


poartl:{
leftx:0,
rightx:0,


},

};


//let mainHI=undefined;
let levelCount=0;
let EnemiesIsScapeCount=0;
let LevelUP=false;

let fireSpeed=300;
let EnemiesSwpanSpeed=1000;





//let sorce=0;
let hue=0;
let level=1;
//let player;


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





//let iii = cvs.getBoundingClientRect().x;



//cvs.width=window.innerWidth;
//cvs.height=window.innerHeight;



/*



enemies.forEach((enemy, i)=>{


projectiles.forEach((projectile, j)=>{

//kill enemies

let dist=Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)

if(dist - enemy.radius - projectile.radius < 1){

setTimeout(()=>{

if(i > -1){
if(j > -1){

enemies.splice(i, 1);
projectiles.splice(j, 1);
}
}

},0)}

})

})



*/