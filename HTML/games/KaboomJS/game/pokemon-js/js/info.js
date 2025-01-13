
let body=document.body;
let game;
let mainBox=document.querySelector('#mainBox');

let miniBox=document.getElementById('miniBox');
let canvasDiv=document.querySelector('.canvasDiv');

let buttonDiv=document.querySelector('.buttonDiv');


let btnBox,btnTop,btnDown,btnLeft,btnRight,mainGameLoop;

//let hh


btnBox=document.getElementById('btnBox');

btnTop=document.querySelector('.btn2');
btnLeft=document.querySelector('.btn4');
btnRight=document.querySelector('.btn6');
btnDown=document.querySelector('.btn8');


let startBtn=document.querySelector('p.startGame');

//let mouse=document.querySelector('.mouse');



let cvs=document.querySelector(".cvs")

let ctx = cvs.getContext("2d");


console.log(ctx);

let touch=['touchstart','touchmove','touchend'];


let firing,enemieSwpaning,starSwpaning;

//btnBox=document.getElementById('btnBox')

//btnLeft=document.querySelector('.left');

//btnRight=document.querySelector('.right');




// btnBox=document.createElement('div');
// btnLeft=document.createElement('div');
// btnRight=document.createElement('div');

// btnBox.setAttribute('id','btnBox');
// btnLeft.setAttribute('class','btns left');
// btnRight.setAttribute('class','btns right');
let map;
let gameSpeed=2;

let numm = cvs.width;





// let playerParlicles=[];
// let enemiesParlicles=[];
// let enemies=[];
// let stars=[];
// let grasses=[];
// let allHouse=[];
// let arrows=[];




// let img = new Image()
// img.src="./imgs/playerImg.png"


// console.log(img);



let crr={

map:{
width:500,
height:500,
x:0,
y:0,
},

mainGrid:{
c:{
cn1:0,
cn2:0,
cn3:0,
},
r:{
rn1:0,
rn2:0,
rn3:0,
},
},
canvas:{
width:0,
height:0,
x:0,
y:0,
},

btnBox:{
width:0,
height:0,
},


food:{
width:0,
height:0,
x:0,
y:0,
},

}





//let mainHI=undefined;
let levelCount=0;
let mainGround,player,movabels;
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
speed:2.6,
};





//let iii = cvs.getBoundingClientRect().x;



//cvs.width=window.innerWidth;
//cvs.height=window.innerHeight;

let pathDeltais=[

{
id:0,
x:0,
y:0,
width:20,
height:20,
color:'#00042A',
},
{
id:1,
x:150,
y:0,
width:20,
height:20,
color:'#00042A',
},

{
id:2,
x:150,
y:300,
width:20,
height:20,
color:'#00042A',
},

{
id:3,
x:450,
y:300,
width:20,
height:20,
color:'#00042A',
},


];


let houseDeltais=[

{
name:'mukesh',
x:300,
y:150,
width:20,
height:20,
color:'#7800FF',
},

{
name:'rahul',
x:300,
y:300,
width:40,
height:20,
color:'#E600FF',
},

{
name:'ankit',
x:300,
y:450,
width:60,
height:20,
color:'tan',
},


];

setInterval(()=>{



const swapnPoint=['left','right','top','bottom']

const cc=swapnPoint[randint(0,swapnPoint.length)]



switch (cc) {

case 'left':
//console.log(`it's worked left`);


houseDeltais.push(
{
name:`aa-${randint(1,10000)}`,
x:houseDeltais[(houseDeltais.length-1)].x - randint(0,1000),
y:randint(-100,200),
width:60,
height:20,
color:`hsl(${randint(0,360)} 100% 50%)`,
}
)


break;

case 'right':
//console.log(`it's worked right`);
break;

case 'top':
//console.log(`it's worked top`);
break;

case 'bottom':
//console.log(`it's worked bottom`);
break;

}


//console.log('lol');



},1000)

