

"use strict";


function ShowTensor(tensor){
console.log(tensor);
console.log("shape :", tensor.shape);
console.log("rank :", tensor.rank);
console.log("size :", tensor.size);
tensor.print();
}



async function INITIAL() {

const canvas = document.querySelector("canvas#canvas")
const eraseBtn = document.querySelector(".eraseBtn")
const predictBtn = document.querySelector(".predictBtn")
const trainBtn = document.querySelector(".trainBtn")
const ctx = canvas.getContext("2d");
ctx.canvas.width=28;
ctx.canvas.height=28;
ctx.strokeStyle="#FFFFFF";
ctx.fillStyle="#FFFFFF";

console.log(ctx);

// //
// const t1 = tf.ones([2, 2]);
// const t2 = tf.ones([2, 2]);
// const t3 = t1.mul(255).add(t2).div(255);
// //
// ShowTensor(t1);
// ShowTensor(t2);
// ShowTensor(t3);


// //
// const t2d1 = tf.tensor([10, 20, 30, 40, 50, 60], [1, 6])
// const t2d2 = tf.tensor([1, 2, 3, 4, 5, 6], [6, 1])
// const t2d3 = t2d1.add(t2d2);

// //
// ShowTensor(t2d1);
// ShowTensor(t2d2);
// ShowTensor(t2d3);

// const t2d3CpuData = await t2d3.data();
// console.log(t2d3CpuData);





// //
// const t1d001 = tf.tensor([1.3, 2.4, 3.5]);
// const t1d002 = tf.tensor([10, 20, 30]);
// const t1d003 = t1d001.mul(t1d002);

// //
// ShowTensor(t1d001)
// ShowTensor(t1d002)
// ShowTensor(t1d003)

// let mnist_test_url = "./models/mnist/mnist_test.csv";
// let mnist_train_url = "./models/mnist/mnist_train.csv";

const model = tf.sequential();

model.add(tf.layers.flatten({inputShape: [28, 28]}));
model.add(tf.layers.dense({units: 128, activation: 'relu'}));
model.add(tf.layers.dropout({rate: 0.2}));
model.add(tf.layers.dense({units: 10, activation: 'softmax'}));


// fetch(mnist_test_url).then(res=>{
// return res.text();
// }).then(data=>{
//   console.log(data);
// });


// // Load MNIST dataset from local files
// const trainData = tf.data.csv(mnist_train_url, {
//   columnConfigs: {
//     label: { isLabel: true }
//   }
// });

// const testData = tf.data.csv(mnist_test_url, {
//   columnConfigs: {
//     label: { isLabel: true }
//   }
// });

// const mnistData = tf.data.csv(mnist_train_url, {
//   columnConfigs:{
//     // isLabel: true,
//     "duplicate_column_name" :"new_name_"+Math.random(),
//   },
// });
// // console.log(mnistData);

// mnistData.forEachAsync((row)=>{
// console.log(row);
// });



model.compile({optimizer: 'adam', loss: 'sparseCategoricalCrossentropy', metrics: ['accuracy']});


console.log("before training");
model.summary()


const trainModel=async()=>{

const data = tf.randomNormal([100, 784]).reshape([1, 28, 28]);
const labels = tf.randomUniform([100, 1], 0, 9, "int32");

console.log(data);
console.log(labels);

const dataset = tf.data.array([data, labels]);

console.log(dataset);
await model.fit(dataset, {
  epochs:10,
  batchSize: 32,
  callbacks:{
    onEpochEnd:(epoch, log)=>{
      console.log(`epochs \t ${epoch}:\n accuracy \t ${log.acc}:\n loss \t ${log.loss}: `);
    }
  },
});



// await model.fit(trainData, {
//   epochs:10,
//   validationData: testData,
//   callbacks:{
//     onEpochEnd:(epoch, log)=>{
//       console.log(`epochs \t ${epoch}:\n accuracy \t ${log.acc}:\n loss \t ${log.loss}: `);
//     }
//   },
// });


}

//1. A flatten layer to reshape the input data (28x28 images) into a 1D array.
//2. A dense layer with 128 units, ReLU activation, and dropout (20%).
//3. A final dense layer with 10 units (one for each digit class) and softmax activation.




const predictDigit=async()=>{

const imgDataArr = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height).data;

let inputArr = [];
for (let i =0;i<imgDataArr.length;i+=4){
const gray = (imgDataArr[i] + imgDataArr[i+1] + imgDataArr[i+2] / 3)
inputArr.push(gray);
}


let inputTensor = tf.tensor(inputArr, [1, 28, 28]);
console.log(inputTensor)

const outputTensor = model.predict(inputTensor);
console.log(outputTensor)

const predictions =await outputTensor.data()

console.log(predictions);


}


const eraseCanvas=()=>{

ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

}




ctx.canvas.addEventListener("touchstart", (e)=>{

const x = parseInt(e.changedTouches[0].clientX / ctx.canvas.width);
const y =parseInt((e.changedTouches[0].clientY/ctx.canvas.height))


ctx.beginPath();
ctx.fillRect(x, y, 1, 1);
ctx.closePath()
});



ctx.canvas.addEventListener("touchmove", (e)=>{

const x = parseInt(e.changedTouches[0].clientX / ctx.canvas.width);
const y =parseInt((e.changedTouches[0].clientY/ctx.canvas.height))


ctx.beginPath()
ctx.fillRect(x, y, 1, 1);
ctx.closePath()
});


ctx.canvas.addEventListener("touchend", (e)=>{


const x = parseInt(e.changedTouches[0].clientX / ctx.canvas.width);
const y =parseInt((e.changedTouches[0].clientY/ctx.canvas.height))

ctx.beginPath()
ctx.fillRect(x, y, 1, 1);
ctx.closePath();

});


//emiting clear canvas function
eraseBtn.addEventListener("click", ()=> eraseCanvas());

//emiting predict number function
predictBtn.addEventListener("click", predictDigit );

//emiting train model  function
trainBtn.addEventListener("click", trainModel );

}




try{

console.log(tf);
console.log(tf.data);
INITIAL()
}catch(err){
throw new Error(`javascript uncatch error ${err}`)
}