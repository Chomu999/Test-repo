

class InputHandler{
constructor(){
this.keys=[];
this.ISpress=false;
this.touchs={position:{x:0,y:0}};
this.keyType={left:'left',right:'right',up:'up',down:'down'};
this.touchsDistens=50;

document.addEventListener('touchstart', e =>{

this.ISpress=true;
this.touchs.position.x = e.touches[0].pageX;
this.touchs.position.y = e.touches[0].pageY;

})

document.addEventListener('touchmove', e =>{


this.touchs.position.x = e.touches[0].pageX;
this.touchs.position.y = e.touches[0].pageY;


const ps={
    x:e.touches[0].pageX,
    y:e.touches[0].pageY
}



//up
if((this.touchs.position.y > (this.touchsDistens + ps.y)) && this.keys.indexOf('up') === -1){
this.keys=[]
this.keys.push('up');
}


//left
else if((this.touchs.position.x > (this.touchsDistens + ps.x)) && this.keys.indexOf('left') === -1){
this.keys=[]
this.keys.push('left');
}




//down
else if(((this.touchs.position.y + this.touchsDistens) < ps.y) && this.keys.indexOf('down') === -1){
this.keys=[]
this.keys.push('down');
}



//right
else if(((this.touchs.position.x + this.touchsDistens) < ps.x) && this.keys.indexOf('right') === -1){
this.keys=[]
this.keys.push('right');
}







//console.log(this.keys);

})



document.addEventListener('touchend', e =>{

this.ISpress=false;
/*
if(this.keys.indexOf('up') > -1){
this.keys.splice(this.keys.indexOf('up'),1);
}

if(this.keys.indexOf('left') > -1){
this.keys.splice(this.keys.indexOf('left'),1);
}

if(this.keys.indexOf('down') > -1){
this.keys.splice(this.keys.indexOf('down'),1);
}

if(this.keys.indexOf('right') > -1){
this.keys.splice(this.keys.indexOf('right'),1);
}
*/

this.keys=[]
//this.touchs.Current={x:0,y:0};

//console.log(this.keys);


})


}


}



class Text{
constructor({backgroundcolor='#000',color='#fff',position={x:50,y:50},width=50,height=60,text='hi'}){
this.position=position;
this.width=width;
this.height=height;
this.text=text;
this.color=color
this.backgroundcolor=backgroundcolor
}
draw(c){

c.beginPath()
c.fillStyle=this.color
c.fillText(this.text,this.position.x,this.position.y)
c.fill()
c.closePath()
}


}




class NPC{
constructor({position={x:50,y:50},health=100,width=50,height=60}){
this.position=position;
this.width=width;
this.height=height;
this.health=health;
this.color=`hsl(${randint(0,360)}, 100%,50% ,1)`;
this.speed={x: 0, y: 0};
}
draw(c){
// c.beginPath()
c.fillStyle=this.color;
c.fillRect(this.position.x,this.position.y,this.width,this.height);

c.strokeStyle='cyan'
c.strokeRect(this.position.x,this.position.y,this.width,this.height);
c.stroke()
// c.closePath();
}
update(){
this.position.x += this.speed.x;
this.position.y += this.speed.y;
}

}


class Villager extends NPC{
constructor({position={x:50,y:50},health=100,width=50,height=60,name='robin'}){
super({position,health,width,height,})
this.name=name;
this.hunger=100;
this.ISattect=false;


this.hitbox={
position:{
 x:this.position.x + (this.width/2),
 y:this.position.y + (this.height/2)
},
 radius:this.width,
 color:`rgba(${randint(0,255)},${randint(0,255)},${randint(0,255)},${0.5})`
}

this.areabox={
position:{
 x:this.position.x + (this.width/2),
 y:this.position.y + (this.height/2)
},
 radius:this.width*3,
 color:`rgba(${randint(0,255)},${randint(0,255)},${randint(0,255)},${0.5})`
}


}

draw(c){
c.save()
c.beginPath()
c.fillStyle=this.hitbox.color
c.arc(this.hitbox.position.x,this.hitbox.position.y,this.hitbox.radius,0,Math.PI*2)
c.fill()
super.draw(c)
c.closePath()

c.globalAlpha=0.4;
this.drawArea(c)
c.restore()

}

update(){
super.update()

this.areabox.position = this.hitbox.position = this.position



}

drawArea(c){
if(this.ISattect){
c.fillStyle=this.areabox.color
c.arc(this.areabox.position.x,this.areabox.position.y,this.areabox.radius,0,Math.PI*2)
c.fill()
}

}


}












class Game{
constructor(canvas){
this.canvas=canvas;

this.spawnRole={
villager:{
interval:1500,
timer:0,
},
monster:{
interval:1500,
timer:0,
},
}

this.inputHandler=new InputHandler()
this.player=new Villager({})

this.villagers=[]
this.monsters=[]
this.foods=[]

for (let i = 0; i < 3; i++) {
    this.spawnVillager()
}


}
    
setup(){
this.abc='abc'
this.xyz='xyz'
}

draw(c){
c.fillStyle=`#000000`;
c.fillRect(0,0,this.canvas.width,this.canvas.height)

[...this.villagers].forEach((o)=>{

o.draw(c)

})

// this.player.draw(c)

}

update(dt){

[...this.villagers].forEach((o)=>{

o.update()


});


// this.player.update()


////////////////////
///move code here///
////////////////////

//this.player.position = this.inputHandler.touchs.position
//this.player.position.y = this.inputHandler.touchs.position.y




//this.villagers = this.villagers.filter(v => v.health <= 0)

//////////?//?/
//this.villagers.forEach((v)=>{

// if(ISCircleCollision(this.player.hitbox,v.hitbox)){
// console.log(' player collision');
// }

//})


/////////
// spawnin code here maybe?

if(this.spawnRole.villager.interval < this.spawnRole.villager.timer){
this.spawnRole.villager.timer=0;
// this.#spawnVillager();
}else{
this.spawnRole.villager.timer += dt;
}


}




#spawnFood(){



}

spawnVillager(){

this.villagers.push(new Villager({
position:{
x:randint(20,300),
y:randint(20,400)
},
name:`karan-${randint(10,2000)}`
}))

this.villagers.sort((a,b)=>{ return a.position.y - b.position.y});

}


#spawnMonster(){


this.monsters.push(new Villager({
position:{
x:150,
y:randint(20,400)
}
//collisionEntities:[...this.villagers]
}))

}

}