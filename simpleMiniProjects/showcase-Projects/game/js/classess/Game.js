// import {InputHandler} form './'
class Game{
constructor(canvas){

this.canvas=canvas;
this.width=this.canvas.width
this.height=this.canvas.height

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

this.MainMap=new Map({position:{x:0,y:0},width:5900,height:6000})

this.player=new Player({color:'orange',position:{x:this.width/2,y:this.height/2},radius:30})

this.villagers=[]
this.houses=[]
this.monsters=[]
this.foods=[]


this.offSet={
    x:-this.MainMap.width/2,
    y:-this.MainMap.height/2
}

this.everyThing=[]
let len=40,i=0//randint(10,this.MainMap.height/10)


while(true){

// this.#spawnHouse()

break

if(this.houses.length == len) break
}

// this.houses.filter((h,i,a)=>{
// console.log(a);
// })

// for (let i = 0; i < len; i++) {
//   this.#spawnHouse(i)
// }

// for (let i = 0; i < 3; i++) {
//     this.#spawnVillager()
// }

// for (let i = 0; i < 3; i++) {
//     this.#spawnMonster()
// }


}
    
setup(){
    this.MainMap.position.x=this.offSet.x
    this.MainMap.position.y=this.offSet.y
this.#spawnHouse()
// this.abc='abc'
// this.xyz='xyz'
}

draw(c){
c.fillStyle=`#000000`;
c.fillRect(0,0,this.width,this.height)

const everyThing=[...this.houses,this.MainMap,...this.foods,...this.villagers]


everyThing.sort((a,b)=> a.position.y - b.position.y)
//this.everyThing=[...[this.MainMap,...this.foods],...this.villagers]


everyThing.forEach(et => et.draw(c))
this.player.draw(c)



// this.everyThing.forEach(e=>e.draw(c))
// this.villagers.forEach((o)=>{

// o.draw(c)

// })

// this.player.draw(c)

}

update(dt){


const everyThing=[...this.houses,this.MainMap,...this.foods,...this.villagers]

everyThing.forEach(et => et.update())
this.player.update()

// this.everyThing.forEach(e=>e.update())


//everyThing movin code here
if(this.inputHandler.move.up){
everyThing.forEach((et)=>{
et.velocity.y = -this.inputHandler.move.speed;
})

}
//
else if(this.inputHandler.move.left){
everyThing.forEach((et)=>{
et.velocity.x = -this.inputHandler.move.speed;
})
}
//
else if(this.inputHandler.move.down){
everyThing.forEach((et)=>{
et.velocity.y = this.inputHandler.move.speed;
})
}
//
else if(this.inputHandler.move.right){
everyThing.forEach((et)=>{
et.velocity.x = this.inputHandler.move.speed;
})
}
// 
else{
everyThing.forEach((et)=>{
et.velocity.x =0
et.velocity.y =0
})
}






// this.villagers.forEach((o)=>{

// o.update()


// });


// this.player.update()


////////////////////
///move code here///
////////////////////

//this.villagers.position.x = this.inputHandler.touchs.position.x
//this.villagers.position.y = this.inputHandler.touchs.position.y
// this.villagers.position.y = this.inputHandler.touchs.position.y




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
//this.#spawnVillager();
}else this.spawnRole.villager.timer += dt;






}




#spawnFood(){



}

#spawnHouse(){

HouseMaps.forEach((d)=>{

this.houses.push(new House({
position:{
    x:d.position.x,
    y:d.position.y,
},
    color:`rgba(${randint(0,255)},${randint(0,255)},${randint(0,255)},1)`,
    width:50,height:50
}))

})

}

#spawnVillager(){

this.villagers.push(new Villager({
position:{
x:randint(20,200),
y:randint(20,200)
},
color:`rgba(${randint(0,255)},${randint(0,255)},${randint(0,255)},1)`,
radius:20
}))

//this.villagers.sort((a,b)=>{ return a.position.y - b.position.y});

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