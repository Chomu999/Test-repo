

const app=()=>{


const canvas=document.getElementById("canvas")

kaboom({canvas:canvas, width: 380, height:300 })

const block_size=16;

const mapLL=addLevel(
[
"========================",
"=                      =",
"=                      =",
"=                      =",
"=                      =",
"=                      =",
"=                      =",
"=                      =",
"=====    ==  ===   =====",
"=                      =",
"=                      =",
"=                      =",
"=                      =",
"=                      =",
"=                      =",
"=                      =",
"========================",
],{
width:block_size, height:block_size,
pos: vec2(0, 0),
"=":()=>[
rect(block_size, block_size),
color(255, 0, 0),
area(),
"wall"
]
}
);




const dirs={
up:"up",
left:"left",
right:"right",
down:"down",
};

let current_dir=dirs.right;
let snake_lenght=3;
let snake_body=[];
let run_action=!1;
let isTouched=!1;
let _redius=90;

const respawn_snake=()=>{

destroyAll("snake")

snake_lenght=3;
snake_body=[];

for(let i=0;i<snake_lenght;i++){
	let segment=add([
		rect(block_size, block_size),
		pos(block_size, block_size),
		color(0, 0, 255),
		area(),
		"snake"
	]);
	snake_body.push(segment);
}

current_dir=dirs.right;

}

//
const respawn_All=()=>{
run_action=!1;
wait(0.5, ()=>{
	respawn_snake();
	respawn_food();
	run_action=!0;
});

}


respawn_All();

const movment_fun=(id, pos)=>{
//console.log(pos);

if(pos.y < pos.y + _redius){
debug.log("high")
}

else if(pos.y > pos.y - _redius){
debug.log("low")
}

}

onTouchStart((id, pos)=>{
isTouched = !0;
//movment_fun(id, pos);
})


//
onTouchMove((id, pos)=>{
if(!isTouched) return;
movment_fun(id, pos);
})


//
onTouchEnd((id, pos)=>{
isTouched = !1;
//movment_fun(id, pos);
})


let move_delay=0.5;
let timer=0;
onUpdate(()=>{
	if(!run_action) return;
	timer += dt()
	if(timer < move_delay) return;
	timer=0;
	// somthing
	let move_x=0, move_y=0;
	
	switch (current_dir) {
		case dirs.down:
			move_x=0;
			move_y=block_size;
			break;
		case dirs.up:
			move_x=0;
			move_y=-1*block_size;
			break;
		case dirs.left:
			move_x=-1*block_size;
			move_y=0;
			break;
		case dirs.right:
			move_x=block_size;
			move_y=0;
			break;
	}
	let snake_head=snake_body[snake_body.length - 1];
	let segment=add([
		rect(block_size, block_size),
		pos(snake_head.pos.x + move_x, snake_head.pos.y + move_y),
		color(0, 0, 255),
		area(),
		"snake"
	]);
	snake_body.push(segment);
	
	if(snake_body.length > snake_lenght){
		let tail=snake_body.shift();
		destroy(tail);
	}
})

//

let food;

const respawn_food=()=>{
	let new_pos=rand(vec2(1, 1), vec2(13, 13));
//vec2(4, 6);
	new_pos.x=Math.floor(new_pos.x);
	new_pos.y=Math.floor(new_pos.y);
	new_pos =new_pos.scale(block_size);
	
	if(food) destroy(food);
	
	food=add([
		rect(block_size, block_size),
		pos(new_pos.x, new_pos.y),
		color(0, 255, 255),
		area(),
		"food"
	])
}

onCollide("snake", "food", (s, f)=>{
	snake_lenght+=1;
	respawn_food();
});

onCollide("snake", "wall", (s, w)=>{
	run_action=!1;
	shake(12);
	respawn_All();
});

//onCollide("snake", "snake", (s, t)=>{
//	run_action=!1;
//	shake(12);
//	respawn_All();
//});



}




window.addEventListener("load", ()=>{


app()

} )



