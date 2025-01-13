let cvs=document.querySelector('canvas');
let ctx = cvs.getContext('2d');


let a = 90;


function lols1(){
console.log('lol work')
}

function randint(low,high){
return Math.floor(Math.random() * (high) + low)
}




const gravity=0.5

class Mario{
constructor(width,height,color){
this.position={x: 0, y: 0}
this.velocity={x: 0, y: 0}
this.width=width
this.height=height
this.color=color
}

draw(){
ctx.fillStyle=this.color
ctx.fillRect(this.position.x, this.position.y, this.width,this.height)
}

update(){
this.draw()
this.position.x += this.velocity.x
this.position.y += this.velocity.y
if(this.position.y + this.height + this.velocity.y <= cvs.height ){
this.velocity.y += gravity
}
else{this.velocity.y = 0}
}

}




class Player3{
constructor(width,height,color,health){
this.position={x: 0, y: 0}
this.velocity={x: 0, y: 0}
this.width=width
this.height=height
this.color=color
this.health=health
}

draw(){
ctx.fillStyle=this.color
ctx.fillRect(this.position.x, this.position.y, this.width,this.height)
}

update(){
this.draw()
this.position.x += this.velocity.x
this.position.y += this.velocity.y
if(this.position.y + this.height + this.velocity.y <= cvs.height ){
this.velocity.y += gravity
}
else{this.velocity.y = 0}
}

}








class Player{
constructor(width, height, color){
this.position={x: 0, y: 0}
this.velocity={x: 0, y: 0}
this.width=width
this.height=height
this.color=color
}
draw(){
ctx.fillStyle=this.color
ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
}
update(){
this.draw()
this.position.x += this.velocity.x
this.position.y += this.velocity.y
}
}




class Enemy{
constructor(width,height,color){
this.position={x: 0, y: 0}
this.velocity={x: 0, y: 0}
this.width=width
this.height=height
this.color=color
}
draw(){
ctx.fillStyle=this.color
ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
}
update(){
this.draw()
this.position.x += this.velocity.x
this.position.y += this.velocity.y
}
}






class BTN1{
constructor(tag,cls,clsN,width,height,append,functions){
this.tag=tag
this.cls=cls
this.clsN=clsN
this.width=width
this.height=height
this.append=append
this.functions=functions
}
update(){
let btn=document.createElement(this.tag)
btn.setAttribute(this.cls,this.clsN)
btn.style.width=this.width
btn.style.height=this.height
this.append.appendChild(btn)
btn.addEventListener('click',this.functions)

}
}



class BTN2{
constructor(tag,cls,clsN,width,height,append,on,func){
this.tag=tag
this.cls=cls
this.clsN=clsN
this.width=width
this.height=height
this.append=append
this.on=on
this.func=func
}
update(){
let btn=document.createElement(this.tag)
btn.setAttribute(this.cls,this.clsN)
btn.style.width=this.width
btn.style.height=this.height
this.append.appendChild(btn)
btn.addEventListener(this.on,this.func)

}
}

class BTN3{
constructor(tag,cls,clsN,width,height,append,on1,func1,on2,func2){
this.tag=tag
this.cls=cls
this.clsN=clsN
this.width=width
this.height=height
this.append=append
this.on1=on1
this.func1=func1
this.on2=on2
this.func2=func2
}
update(){
let btn=document.createElement(this.tag)
btn.setAttribute(this.cls,this.clsN)
btn.style.width=this.width
btn.style.height=this.height
this.append.appendChild(btn)
btn.addEventListener(this.on1,this.func1)
btn.addEventListener(this.on2,this.func2)

}
}

































export {BTN1,BTN2,BTN3}

export {Mario, Enemy, Player, randint, lols1, a}


export {Player3}


export {cvs, ctx}


const authorPragraph= `If you use this libeary \n nice wtach this `;

(()=>{


console.log(authorPragraph)

})();