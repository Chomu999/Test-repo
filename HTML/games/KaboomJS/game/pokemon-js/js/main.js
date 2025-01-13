



startBtn.addEventListener('click', e => startGame());





const startGame=()=>{


reSize()


//miniBox.style.gridTemplateColumns=`${crr.mainGrid.c.cn1}px ${}px ${}px`;

game = new Game();

mainBox.removeChild(startBtn)




const gameLoop=(ts)=>{

mainGameLoop = requestAnimationFrame(gameLoop)



game.draw(ctx);
game.update();










}





    gameLoop(0)


}
