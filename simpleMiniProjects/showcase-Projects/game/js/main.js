
const canvas=document.querySelector('canvas');
const ctx=canvas.getContext('2d');
canvas.width=innerWidth;
canvas.height=innerHeight;
let touch=['touchstart','touchmove','touchend']


/*
ISButtonEvent(cvs,touch[0],e=>{

bullet.x=e.changedTouches[0].clientX;
bullet.y=e.changedTouches[0].clientY;
//console.log(e.changedTouches[0])
})

ISButtonEvent(cvs,touch[1],e=>{
bullet.x=e.changedTouches[0].clientX;
bullet.y=e.changedTouches[0].clientY;
})



ISButtonEvent(cvs,touch[2],e=>{
bullet.x=e.changedTouches[0].clientX;
bullet.y=e.changedTouches[0].clientY;
})

*/

//ctx.stoke()

canvas.addEventListener('click', (e)=>{
//mouse.X = e.offsetX;
//mouse.Y = e.offsetY;
})







const game =new Game(canvas)
game.setup()



//setInterval(spawnEnemies,2000)
// ctx.drawFocusIfNeeded(canvas)
// ctx.drawFocusIfNeeded=true
let LastTime=1;

const gameLoop=(TimeStamp)=>{
    
    const deltaTime = TimeStamp - LastTime;
    LastTime = TimeStamp;
    
    requestAnimationFrame(gameLoop)
    // ctx.fillStyle=`hsl(${randint(0,360)}, 100%,50% ,1)`;
    // ctx.fillRect(0,0,canvas.width,canvas.height)
    game.draw(ctx)
    game.update(deltaTime)
    
    
    
    
}
gameLoop(0)


// console.log('main')
