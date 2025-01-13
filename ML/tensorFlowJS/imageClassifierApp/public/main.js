"use strict";
import {IMAGENET_CLASSES} from "/sdcard/imagenet_classes.js"
// alert(document.body.innerHTML);

const loadFile=async(path,type="text")=>{
const file = await fetch(path);
return await file[type]();
}

//
const strToHtml=(html)=>{
const element = document.createElement("div");
element.innerHTML = html;
return  element.firstElementChild??undefined;
}



//sleep function helps to hold up workflow
const sleep=async (t=1) => new Promise( res => setTimeout( () => res(true), t*1000) );






////
const addPrediction=(predictIndex, predictMsg, predictValue)=>{
const predictContainer=document.querySelector(".predictContainer > ol");
if(!predictContainer) return;
const outElmt = strToHtml(`<li class="prediction">
<span class="probability probability_index">(${predictIndex})</span>

<span class="probability probability_name">${predictMsg}</span>

<span class="probability probability_value">probability : ${predictValue}</span>
</li>`);

predictContainer.appendChild(outElmt);
}






//
const clearPrediction=()=>{
const predictContainer=document.querySelector(".predictContainer > ol");
if(!predictContainer) return;
predictContainer.innerHTML="";
}





const LoadModel=async()=>{
const modelURL = "../../models/mobilenet/model.json";


const model = await tf.loadGraphModel(modelURL);

return model;
}




const selectModel=async()=>{
let modelName = modelSelector.selectedOptions[0].value;
if(modelName === "mobilenet"){
  window.model = await LoadModel();
  //console.log(model)
  //console.log(modelName)
}else{
throw new Error("model is not found or something else")
}

}





class ImageClassifier{
constructor(){
this.model;
}


async load(){

this.model = await LoadModel();


}


async processImage(img, channels=3){
const _width=224, _height=224;
const imgTensor=tf.browser.fromPixels(img, channels)
.resizeNearestNeighbor([_width, _height])
.toFloat();

const offsetScalar = tf.scalar(127.5);

return imgTensor.sub(offsetScalar).div(offsetScalar).expandDims();

}


async predict(ImageTensor){
const predictTensor = this.model.predict(ImageTensor);
return predictTensor;
}


async getTopPredictions(predict, top=3){

const finalOutput = tf.tidy(()=>{
const prediction = tf.softmax(predict).dataSync();

let predictionList = [];

for(let i =0;i<prediction.length;i++){
predictionList.push({
	value: prediction[i],
	index: i,
});
}

predictionList = predictionList.sort((a, b)=> b.value - a.value ).slice(0, top);

let out =  predictionList.map((x)=>{
	return {label: IMAGENET_CLASSES[x.index], value: x.value};
});

return out;

});


return finalOutput;
}


}


// INITIAL point aka starting point
const INITIAL = async ()=>{

console.log(tf.getBackend())

//



const takePictureBtn = document.querySelector(".takePictureBtn");
const predictBtn = document.querySelector(".predictBtn");

//const img = document.querySelector(".img2")
const camera = document.querySelector(".camera")


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 260;
canvas.height = 260;


camera.width = 260;
camera.height = 260;


try{
const cameraSrc = await navigator.mediaDevices.getUserMedia({
	audio:false,
	video:{
		width: 480,
		height:640,
		facingMode:"environment"
	}
});

camera.srcObject = cameraSrc;
}catch(err){
console.log("cameraSrc error : ", err);
}


const imageClassifier = new ImageClassifier();

try {
await imageClassifier.load();
} catch (err) {
console.log("imageClassifier unable to load model : ", err);
}



const __predictBtn = async()=>{

const pit = await imageClassifier.processImage(canvas, 3);

const pt = await imageClassifier.predict(pit);

const fr = await imageClassifier.getTopPredictions(pt, 5);

clearPrediction();

fr.forEach((element, index)=>{
addPrediction(index,element.label, element.value.toFixed(3) );
});


}

const __takePictureBtn = ()=>{

camera.paused?camera.play():camera.pause();

ctx.drawImage(camera,
0, 0, camera.videoWidth, camera.videoHeight,
0, 0, canvas.width, canvas.height);

}




predictBtn.addEventListener("click", __predictBtn);





takePictureBtn.addEventListener("click", __takePictureBtn);




}





;(async()=>{
try{

console.log("JS is Awesome");

//console.log(tf);

tf.setBackend("webgl");
await tf.ready();
await INITIAL();


}catch(err){
console.log(`JavaScript uncatch error : ${err.stack}`);
}

})();

