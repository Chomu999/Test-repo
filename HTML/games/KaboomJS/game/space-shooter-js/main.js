

const app=()=>{


const canvas=document.getElementById("canvas")

kaboom({
canvas,
scale:1.5,
width: 260,
height: 300,
background:[25, 25, 25],
});




const player = add([
rect(20, 20),
color(255, 0, 0),
pos(50, 50),
"player",
]);

const alien = add([
rect(20, 20),
color(105, 200, 0),
pos(80, 50),
"alien",
]);



onDraw(()=>{

//Text()

});






}



window.addEventListener("load", ()=>{


app();

} );



