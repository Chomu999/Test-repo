// console.log('main');






const game = new Game(ctx,canvas.width,canvas.height);

 
let lastTime=1;

const gameLoop=(ts)=>{


const dt = ts - lastTime;

lastTime = ts;



//ctx.fillStyle='black'
//ctx.fillRect(0,0,this.width,this.height);
ctx.clearRect(0,0,canvas.width,canvas.height);



game.draw(ctx);
game.update(dt);

//console.log(game.enemies.length);



window.requestAnimationFrame(gameLoop);
}
gameLoop(0);



