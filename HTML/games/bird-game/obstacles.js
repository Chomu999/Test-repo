//bluePrint of piller

class Piller{
constructor(color,y,width,height){

//this.top= (Math.random() * cvs.height/3) + 20;
//this.bottom= (Math.random() * cvs.height/3) + 20;

this.width=width
this.height=height

this.x=cvs.width
this.y=y
this.color=color
//randint(40,4000)`hsl(${this.hue},100%,50%,1)`
this.speed={x:0,y:0}

}

draw(){


ctx.fillStyle=this.color
ctx.fillRect(this.x,this.y,this.width,this.height)

//ctx.fillRect(this.x,cvs.height - this.bottom,this.width,this.height)

}
update(){

this.draw()
this.x -= gameSpeed
//this.y += this.speed.y

}

}




let pillersTop=[]
let pillersBottom=[]

let boom={
img:undefined,
width:400,
height:400
// x:bird.x-bird.x/2,
// y:bird.y-bird.y/2
}

boom.img=new Image()
boom.img.src='boom.png'



function handlePillersTop(){

// display piller

if(frame1%50 ===0){

//top= Math.random() * cvs.height/3 + 20;
//bottom= Math.random() * cvs.height/3 + 20;





//randint(0,cvs.height/3) - cvs.height;


let twidth=bird.width
let theight=randint(twidth*4,twidth*12);
let top=0;


let bwidth=bird.width;
let bheight=theight;
let bottom=cvs.height - randint(theight/16,theight/2)


let color=`hsl(${randint(40,4000)},100%,50%,1)`
//this.speed={x:0,y:0}

//randint(0,cvs.height/3) - cvs.height;


pillersTop.unshift(new Piller(color,top,twidth,theight))


pillersBottom.unshift(new Piller(color,bottom,bwidth,bheight))

see('spwan Both pillers')


}





// remove last piller

if(pillersTop.length > 200){ pillersTop.pop()}
if(pillersBottom.length > 200){ pillersBottom.pop()}



}


//let u =document.createComment();
//console.log(u)(cvs)


//console.log(document.createComment(cvs))

