//my own lib
import * as bistor from "./lib/bistor.js";







let p=document.querySelector('p');
//p.innerHTML=bistor.a;


//let b2=bistor.a;
//console.log(b2)


let body,main,play_area,btn_box;

let mainheight,mainwidth;


let cls,clk,ani,px,id;

const cvsW=380;
const cvsH=380;

cls='class';
clk='click';
ani='animationend';
px='px';
id='id';



let btn_up,btn_down,btn_left,btn_right;


body=document.body;

main=document.getElementById('main');





let cvs = bistor.cvs;
let ctx = bistor.ctx;




mainwidth = window.innerWidth;
mainheight = window.innerHeight;

main.style.width=mainwidth;
main.style.height=mainheight;


let plyW,plyH;
plyW=39;
plyH=39;

cvs.width=cvsW;
cvs.height=cvsH;

cvs.style.margin='0 6.54px'





//let pl = new bPlayerS(38,38,'red')

//pl.update()






function r1(){
setInterval(()=>{


var r2 = bistor.randint(10, 30)


//p.innerHTML+=r2+'\n \n'

},1000)
}
r1()




let player = new bistor.Mario(plyW,plyH,'red')


//let enemy = new bistor.Enemy(plyW,plyH,'red')






let btnSize=97;


let btn_slort_1=document.querySelector(
'#btn_slort-1');


let btn_slort_2=document.querySelector(
'#btn_slort-2');

let btn_slort_3=document.querySelector(
'#btn_slort-3');



let btn_slort_4=document.querySelector(
'#btn_slort-4');

let btn_slort_5=document.querySelector(
'#btn_slort-5');

let btn_slort_6=document.querySelector(
'#btn_slort-6');




let btn_slort_7=document.querySelector(
'#btn_slort-7');

let btn_slort_8=document.querySelector(
'#btn_slort-8');

let btn_slort_9=document.querySelector(
'#btn_slort-9');






function makeKeys(){


let btn1 = new bistor.BTN1('div',cls,'btn up',btnSize,btnSize,btn_slort_2,player_UP)
btn1.update();


let btn2 = new bistor.BTN1('div',cls,'btn right',btnSize,btnSize,btn_slort_6,player_RIGHT)
btn2.update();


let btn3 = new bistor.BTN1('div',cls,'btn lett',btnSize,btnSize,btn_slort_4,player_LEFT)
btn3.update();


let btn4 = new bistor.BTN1('div',cls,'btn down',btnSize,btnSize,btn_slort_8,player_DOWN)
btn4.update();


}





//makeKeys();





let steps=4
let StopTime=320;


btn_slort_2.addEventListener(clk,player_UP)




btn_slort_4.addEventListener(clk,player_LEFT)




btn_slort_6.addEventListener(clk,player_RIGHT)




btn_slort_8.addEventListener(clk,player_DOWN)





//player up ↓
function player_UP(){
player.velocity.y -= steps*3;

setTimeout(()=>{
player.velocity.y=0
},StopTime)

}



//player down ↓
function player_DOWN(){
player.velocity.y += steps;

setTimeout(()=>{
player.velocity.y=0
},StopTime)

}



//player left ↓
function player_LEFT(){
player.velocity.x -= steps;

setTimeout(()=>{
player.velocity.x=0
},StopTime)

}



//player right ↓
function player_RIGHT(){
player.velocity.x += steps;

setTimeout(()=>{
player.velocity.x=0
},StopTime)

}











let keys={

up:{
pressed: false
},
left:{
pressed: false
},
right:{
pressed: false
},
down:{
pressed: false
}
}



function keypressedX(){
if(keys.right.pressed){
player.velocity.x = 0
}

else if(keys.left.pressed){
player.velocity.x -= steps
}
else{player.velocity.x = 0}
}


function keypressedY(){
if(keys.down.pressed){
player.velocity.y = 0
}

else if(keys.up.pressed){
player.velocity.y -= steps
}
else{player.velocity.y = 0}
}








function gameLoop(){


window.requestAnimationFrame(gameLoop);



ctx.clearRect(0,0,cvsW,cvsH);

player.update()

//enemy.update()













//keypressedX()
//keypressedY()











}






// setInterval(()=>{
// if (player.position.x >= cvsW ) {
// console.log('player stop at: '+player.velocity.x)
// }
// else{player.velocity.x=cvsW}


// },100)

// //keys()




gameLoop()



