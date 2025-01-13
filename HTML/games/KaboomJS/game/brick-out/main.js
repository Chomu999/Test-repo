

const app=()=>{


const canvas=document.getElementById("canvas")

kaboom({
canvas,
scale:0.5,
//width: window.innerWidth,
//height: window.innerHeight*0.6,
background:[25, 25, 25],
});

//loadSprite("s", "./bo_sprite.png")
let brick_width=36;

loadSpriteAtlas("./bo_sprite.png", {

"brick_a":{
x:0, y:0,
width:brick_width, height:20
},

"brick_b":{
x:brick_width*2, y:0,
width:brick_width, height:20
},

"brick_c":{
x:brick_width*2, y:20,
width:brick_width, height:20
},

"brick_d":{
x:0, y:20,
width:brick_width, height:20
},

"pallde":{
x:0, y:76,
width:64, height:20
},

"ball":{
x:0, y:40,
width:36, height:36
},

})

const LEVELS=[
[
"                        ",
"dddddddddddddddddddddddd",
"cccccccccccccccccccccccc",
"bbbbbbbbbbbbbbbbbbbbbbbb",
"aaaaaaaaaaaaaaaaaaaaaaaa",
"bbbbbbbbbbbbbbbbbbbbbbbb",
"cccccccccccccccccccccccc",
"dddddddddddddddddddddddd",
"                        ",
"                        ",
"                        ",
"                        ",
"     o     o      o     ",
"                        ",
"                        ",
"           @            ",
],

[
"                        ",
"aaaaaaaaaaaaaaaaaaaaaaaa",
"a                      a",
"a bbbbbbbbbbbbbbbbbbbb a",
"a b                  b a",
"a b  ccccc   ccccc   b a",
"a b       ddd        b a",
"a b  ccccc   ccccc   b a",
"a b                  b a",
"a bbbbbbbbbbbbbbbbbbbb a",
"a                      a",
"aaaaaaaaaaaaaaaaaaaaaaaa",
"       o   o      o     ",
"                        ",
"                        ",
"                        ",
"                        ",
"                        ",
"                        ",
"           @            ",
],

[
"a          a            ",
"           o            ",
"           a            ",
"                        ",
"                        ",
"                        ",
"                        ",
"                        ",
"           @            ",
],

];




const LEVELOPT={
width:32, height:16,

"a":()=>[
	sprite("brick_a"),
	area(),
	"brick",
	"bouncy",
	{point:1},
],


"b":()=>[
	sprite("brick_b"),
	area(),
	"brick",
	"bouncy",
	{point:2},
],

"c":()=>[
	sprite("brick_c"),
	area(),
	"brick",
	"bouncy",
	{point:4},
],

"d":()=>[
	sprite("brick_d"),
	area(),
	"brick",
	"bouncy",
	{point:8},
],


//pallde

"@":()=>[
	sprite("pallde"),
	color(132, 0, 0),
	area(),
	origin("center"),
	"pallde",
	"bouncy",
	{speed: 400},
],

//ball

"o":()=>[
	sprite("ball"),
	color(255, 255, 0),
	area(),
	origin("center"),
	"ball",
	{h_speed: 100, v_speed:50},
]



}


scene("game", ({levelIndex, score, lives})=>{

addLevel(LEVELS[levelIndex], LEVELOPT);

const pallde = get("pallde")[0];
//console.log(pallde)

onTouchMove((id, pos)=>{
let _m= pos; // mousePos();
//console.log(_m)
pallde.pos.x = _m.x;


});



// 
onCollide("ball", "bouncy", (ball, bouncy)=>{

ball.v_speed = -ball.v_speed;

});



//
onUpdate("ball", (ball)=>{

if(ball.pos.x + ball.width > width() || ball.pos.x - ball.width <= 0){
ball.h_speed= -ball.h_speed;
}

if(ball.pos.y - ball.height <= 0){
ball.v_speed= -ball.v_speed;
}


if(ball.pos.y > height()){
lives -= 1;

if(lives <= 0){
go("lose", {score : score})
}
else{
ball.pos.x = width()/2;
ball.pos.y = height()/2;
}


}

ball.move(ball.h_speed, ball.v_speed);

});


//
onCollide("ball", "brick", (ball, brick)=>{


brick.destroy();
score += brick.point;

ball.v_speed = -ball.v_speed;
//ball.h_speed = -ball.h_speed;


//level end
if(get("brick").length === 0){
console.log("1 ff")
// go to next level
if(levelIndex < LEVELS.length){
go("game", {
levelIndex:levelIndex+1,
score:score,
lives:lives,
});

console.log("2 ff")
}

else{

console.log("1 ee")

go("win", {score: score });

}

}

//debug.log(brick.pos)
})



// ui
onDraw(()=>{

drawText({
text: `SCORE : ${score}`,
size:28,
color: RED,
});


drawText({
text: `LIVES : ${lives}`,
color: RED,
size:26,
pos: vec2(width()*0.5, 0)
});



})




})

scene("lose", ({ score})=>{



// ui

add([
text(`game over\n your final score was : ${score}`, {
size:30, width:width()
}),
pos(12),
])

add([
text(`press any key to restart`, {
size:30,
width:width()}),
pos(width()/2, height()*.4)
])

onKeyPress(start_game);
onMousePress(start_game);
onTouchEnd(start_game)

})

scene("win", ({ score})=>{



// ui

add([
text(`you win\n your final score was : ${score}`, {
size:30, width:width()
}),
pos(12),
])

add([
text(`press any key to restart`, {
size:30,
width:width()}),
pos(width()/2, height()*.4)
])

onKeyPress(start_game);
onMousePress(start_game);
onTouchEnd(start_game)

})

//go("lose", {score:4})

const start_game=()=>{
go("game", {
levelIndex:0,
score:0,
lives:2,
});
//debug.log("alu")
}

start_game()




}




window.addEventListener("load", ()=>{


app()

} )



