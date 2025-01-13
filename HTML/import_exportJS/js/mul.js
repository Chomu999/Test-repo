<!DOCTYPE html>
<html>
 
<head>
<meta http-equiv="content-type" content="text/html charset=utf-8" />
<title>audio encode and decode example 1</title>


<!-- <meta name="viewport" content="width=device-width ,initial-scale=1.0, maximum-scale=1.0"> -->
<meta name="viewport" content="width=device-width, user-scalable=no ,initial-scale=1.0, maximum-scale=1.0">


<style>
*{ margin:0; padding:0; box-sizing:border-box; }

html{
font-size:10px;
}

body{
width:100%; height:100%;
background:#000;
}

main{
width:100vw; height: 70vh;



position: absolute; top: 50%; left:50%;
transform: translate(-50%, -50%);

display:grid;
grid-template-columns:repeat(1,1fr);
grid-template-rows:repeat(2,1fr);
}

div.box{
background:rgba(255, 255, 255, 0.5);
}


div.audioBox{
width:100%; height: 70%;
display:flex;
justify-content:center;
align-items:center;
background:rgba(74, 0, 88, 0.4);
}


textarea.outPut{
width:100%; height:70%;
}



div.parentBtn{
width:100%; height: 30%;
display:flex;
justify-content:space-around;
align-items:center;
}

.btns{
padding:1rem 2rem;
display:inline-block;
background:rgba(30, 88, 99, 0.6);
color:#FF0089;

text-align:center;
font-size:2rem;
text-transform: capitalize;
}



</style>


<!-- <script src="/storage/emulated/0/g_js_libs/dat.gui.min.js"></script> -->


</head>

<body>



<main id="main">

<div class="box box1">
 
<div class="audioBox">
 
<!-- <audio muted controls src="/storage/emulated/0/Download/y2mate.com - Eredaze  Not Like That Lyrics.mp3"></audio> -->

<audio controls src="/storage/emulated/0/Music/BillCipherLaugh.mp3"></audio>

</div>

<div class="parentBtn">
<div class="btns start">start</div>
<div class="btns pause">puase</div>
</div>

</div>

<div class="box box2">

<textarea placeholder="encode" class="outPut"></textarea>

<div class="parentBtn">

<div onclick="alert('enCode')" class="btns enCode">enCode</div>
<div onclick="alert('deCode')" class="btns deCode">deCode</div>

</div>

</div>


</main>


<script>





const app = (elements) => {

//let myAudio=new Audio("/storage/emulated/0/Music/BillCipherLaugh.mp3")
//console.log(myAudio);
//let Ade=new AudioDecoder(0b1,4949)
//let Aen=new AudioEncoder(myAudio)

//let data=new AudioData(elements.other.audio)
//let en=new AudioData()


//console.log(data);
//console.log(en);






//let urlOBJ=new webkitURL("http://google.com");
//console.log(urlOBJ);

//let obj={pos:{x: 20, y:22, z:35},width:30,height:30,}

//let idkOBJ= unescape();
//console.log(idkOBJ);

//let idkOBJ= eval(obj);
//console.log(idkOBJ);

//let idkOBJ=new URLSearchParams("oog");
//console.log(idkOBJ);

//let idkOBJ= escape ({x:9, y:99});
//console.log( idkOBJ);

//let idkOBJ=new Path2D("gg");
//console.log( idkOBJ);

//let idkOBJ=new Map();
//console.log( idkOBJ);

//let idkOBJ= print();
//console.log( idkOBJ);

//let idkOBJ= print();
//console.log( idkOBJ);

console.log(window);










elements.btn.start.addEventListener("click",()=>{

elements.other.audio.play()

});

elements.btn.pause.addEventListener("click",()=>{

elements.other.audio.pause()

});


}


const INIT=()=>{

let elements={ btn:{}, output:{}, other:{}, };

elements.btn.start=main.children[0].children[1].children[0];
elements.btn.pause=main.children[0].children[1].children[1];

elements.btn.encode=main.children[1].children[1].children[0];
elements.btn.decode=main.children[1].children[1].children[1];

elements.output.screen=main.children[1].children[0];

elements.other.audio=main.children[0].children[0].children[0];


//.querySelector()
//document.getElementById("main");


app(elements);

}

window.addEventListener("load", (event) => {


if (1) INIT();

})


</script>

</body>

</html>