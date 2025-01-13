






class NPC{

constructor({maxFarme=0,position={x:0,y:0},width=20,height=20,img}){

this.position=position;
this.img=img;
this.width=width;
this.height=height;
this.speed={x:0,y:0};
this.maxFarme=maxFarme;
this.isLoaded=false;

this.img.onload=()=>{
this.width=this.img.width/this.maxFarme
this.height=this.img.height/this.maxFarme
this.isLoaded=true;
console.log('Loaded');
}


}
draw(c){

//c.fillStyle=this.color;
//c.fillRect(this.position.x,this.position.y,this.width,this.height);
if(this.isLoaded){
c.drawImage(this.img,this.width,this.height)
}

}

update(){

this.position.x += this.speed.x;
this.position.y += this.speed.y;

}

}


class Util{

constructor({position={x:0,y:0},width=20,height=20,color='red'}){

this.position=position;
this.color=color;
this.width=width;
this.height=height;
this.speed={x:0,y:0};
}
draw(c){

c.fillStyle=this.color;
c.fillRect(this.position.x,this.position.y,this.width,this.height);

}

update(){
this.position.x += this.speed.x;
this.position.y += this.speed.y;

}

}






//house bluePrint


class NewHouse extends Util{

constructor({position={x:0,y:0},width=20,height=20,color='red',name='adem'}){
super({position,width,height,color})
this.name=name
//this.center={x:this.x,y:this.y};
}



draw(c){
super.draw(c)

// ctx.fillStyle=this.color;
// ctx.fillRect(this.position.x,this.position.y,this.width,this.height);

}



update(){
super.update()

// this.position.x += this.speed.x;
// this.position.y += this.speed.y;
}

}









//








class Game{
constructor(){


//this.player = new NewHouse({position:{x:160,y:160},height:50,width:50,color:'#FF006E'})

this.player= new NPC({maxFarme:4,img:playerPNG,position:{x:60}})

this.NyInput={
up:false,
left:false,
down:false,
right:false,
}

this.allHouse=[]
this.grasses=[]



this.mainGround=new NewHouse({position:{x: crr.map.x,y: crr.map.y},width:600,height:crr.map.height,color:'blue'})

//this.testBlock=new NewBox(30,78,70,70,'orangered')

//miniBox.requestFullscreen()

// for (let i = 0; i < houseDeltais.length; i++) {


// let x,y,width,height,color;



// x=houseDeltais[i].x;
// y=houseDeltais[i].y;
// width=houseDeltais[i].width;
// height=houseDeltais[i].height;
// color=houseDeltais[i].color;


// allHouse.unshift(new NewHouse(x,y,width,height,color))


// }


houseDeltais.forEach((h,i)=>{

this.allHouse.push(new NewHouse({
    position:{x:h.x, y:h.y},
    width:h.width,height:h.height,
    color:h.color,name:h.name
})
);
console.log('house is buliding');
})

//allHouse.unshift(new NewHouse(detail.x,detail.y,detail.width,detail.height,detail.color))




//console.log(allHouse)


for (let i = 0; i <= 300; i++) {




let x,y,w,h;

x=randint(0,this.mainGround.width);
y=randint(2,this.mainGround.height);
w=randint(2,8);
h=randint(2,8);


this.grasses.push(new NewHouse({
    position:{x,y},height:h,width:w,
    color:`hsl(${randint(0,360)} 100% 50%)`}))

}





//Object
//singleObject = [testBlock,mainGround]

//multiObject = [grasses]







}

//draw

draw(c){
const everyThing=[this.mainGround,...this.grasses,...this.allHouse,this.player];


c.fillStyle='rgba(0,0,0,.1)';
c.fillRect(0,0,c.canvas.width,c.canvas.height);





everyThing.forEach((alls) =>{

alls.draw(c);
})



}



//update
update(){


this.player.update()

const everyThing=[...this.allHouse,this.mainGround,...this.grasses];

everyThing.forEach((alls) =>{

alls.update();
})







//for top
if(this.NyInput.top){

everyThing.forEach((single)=>{
single.speed.y = movin.speed;
})


}


//for left
else if(this.NyInput.left){

everyThing.forEach((single)=>{
single.speed.x = movin.speed;
})




}


//for right
else if(this.NyInput.right){

everyThing.forEach((single)=>{
single.speed.x = -movin.speed;
})



}


//for down
else if(this.NyInput.down){

everyThing.forEach((single)=>{
single.speed.y = -movin.speed;
})

}
else{

everyThing.forEach((single)=>{
single.speed.x = 0
single.speed.y = 0
})


}







}



}















 
//custom function




function randint(min,max){
return Math.floor(Math.random() * (max-min) + min)
}





function IScollision(ObjectA,ObjectB){
return (ObjectA.position.x + ObjectA.width >= ObjectB.position.x &&
ObjectA.position.position.x <= ObjectB.position.x + ObjectB.width &&
ObjectA.position.y + ObjectA.height >= ObjectB.position.y &&
ObjectA.position.y <= ObjectB.position.y + ObjectB.height)
}

/// console.log();
function see(see){
console.log(see);
}



function CTXtext(c,t,x=cvs.width/1.76,y=15){
ctx.fillStyle=c;
ctx.fillText(`${t}`,x,y);
}



function ISButtonEvent(traget,condion,fun){
traget.addEventListener(condion,fun);
}




//for reSize the window
const reSize=()=>{



let mw=window.innerWidth;
let mh=window.innerHeight;
let fw,fh;


fw= mw/100;
fh= mh/100;



if(mw <= mh){

//cvs.width= fw*90;
//cvs.height= fw*90;




//crr.canvas.width = cvs.width;
//crr.canvas.height = cvs.height;

//crr.canvas.x=cvs.getBoundingClientRect().x
//crr.canvas.y=cvs.getBoundingClientRect().y





//crr.mainGrid.c.cn1=fw*80




// miniBox.style.gridTemplateColumns=`${1}fr`;
// miniBox.style.gridTemplateRows=`${fh*6}px ${fh*50}px ${fh*40}px`;


cvs.width=canvasDiv.getBoundingClientRect().width;
cvs.height=canvasDiv.getBoundingClientRect().height;





btnBox.style.width=buttonDiv.getBoundingClientRect().height;


btnBox.style.height=buttonDiv.getBoundingClientRect().height;



btnBox.style.margin='auto';
//left= buttonDiv.getBoundingClientRect().height/2 - btnBox.getBoundingClientRect().width;



//crr.gamer.width=cvs.width/12;
//crr.gamer.height=cvs.height/12;








}else{

//cvs.width= fw*60;
//cvs.height= fh*90;


//crr.canvas.width = cvs.width;
//crr.canvas.height = cvs.height;

//crr.canvas.x=cvs.getBoundingClientRect().x
//crr.canvas.y=cvs.getBoundingClientRect().y

//crr.btnBox.width = fh*90;
//crr.btnBox.height = fh*90;







//miniBox.style.gridTemplateColumns=`${crr.mainGrid.c.cn1}px ${}px ${}px`;



}

}

