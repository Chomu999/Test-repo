

let mouse = {x: 0, y: 0, r:8};


// points x,y,radius 
let p1 = {x: 60, y:40, r:8};
let p2 = {x: 200, y: 200, r:8};


const makeVideoElement=()=>{
let a = new Video();
console.log(a);
return a;
}

const initApp=async()=>{

const video = document.querySelector("video");
const canvas = document.querySelector("canvas");

const toggleCameraBtn = document.querySelector(".toggleCameraBtn");
const takePictureBtn = document.querySelector(".takePictureBtn");


const ctx = canvas.getContext("2d");

//console.log(ctx)

canvas.width = 200;
canvas.height = 200;

let cameraFace = "environment";

//outp.innerText = "bil";

//navigator

// const videoSRC_OBJ = await navigator.mediaDevices.getUserMedia({
// 	audio:false,
// 	video: {
// 		width:480,
// 		height:640,
// 		facingMode: "environment"
// 	}
// });


// video.srcObject = videoSRC_OBJ;





const update=(dt)=>{




//console.log("loop");
ctx.drawImage(video,
0, 0, video.videoWidth, video.videoHeight,
0,0,
canvas.width, canvas.height,
);


if(video.paused){
ctx.fillStyle="#f002";
ctx.fillRect(0, 0, canvas.width, canvas.height);


ctx.drawImage(video,
p1.x + p2.x, p1.y + p2.y, p2.x, p2.y,
p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);



ctx.beginPath();
ctx.strokeStyle="#f0f";
ctx.strokeRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);
ctx.stroke();
ctx.closePath();




ctx.beginPath();
ctx.arc(p1.x, p1.y, p1.r, 0, 2*Math.PI);
ctx.fillStyle="#00fa";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="#00fa";
ctx.arc(p2.x, p2.y, p2.r, 0, 2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="#0ff";
ctx.arc(mouse.x, mouse.y, mouse.r, 0, 2*Math.PI);
ctx.fill();
ctx.closePath();





}




}





let lt=0;
const animate=(ts)=>{

const dt = (ts - lt);
lt = ts;

update(dt);
requestAnimationFrame(animate);
};
animate();






toggleCameraBtn.addEventListener("click", async()=>{
cameraFace = (cameraFace==="environment")?"fontface":"environment";
let _src = await navigator.mediaDevices.getUserMedia({
	audio:false,
	video: {
		width:480,
		height:640,
		facingMode: cameraFace
	}
});



video.srcObject = _src;


});


takePictureBtn.addEventListener("click", ()=>{
(video.paused)?video.play():video.pause();
});




ctx.canvas.addEventListener("touchstart", (e)=>{

const o = e.changedTouches[0];

let l = canvas.offsetLeft;
let t = canvas.offsetTop;

let x = (o.clientX - l) + scrollX;
let y = (o.clientY - t) + scrollY;


p1.x= x;
p1.y= y;

});





ctx.canvas.addEventListener("touchend", (e)=>{

const o = e.changedTouches[0];

let l = canvas.offsetLeft;
let t = canvas.offsetTop;

let x = (o.clientX - l) + scrollX;
let y = (o.clientY - t) + scrollY;



p2.x= x;
p2.y= y;

});








}




try {
	initApp()
} catch (e) {
	console.log(`javascript uncatch error ${e}`);
}