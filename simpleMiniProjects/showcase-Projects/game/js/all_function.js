
const randint=(min,max)=>{
return Math.floor(Math.random() * (max-min) + min)
}


const randchoice=(arr)=>{
return arr[randint(0,arr.length)];
}

const texts=(text,x=90,y=78)=>{
ctx.fillStyle='#919191';
ctx.fillText(`${text}`,x,y);
}

//Word Counting function output a obj
const WordCounter=(str)=>{
if(!str)return -1;
const arr =str.split(' ')
const obj={}
arr.forEach( v => obj[v] = str.split(v).length-1 )
return obj;
}

//random STR gen function output a string
const RandSTRGen=(str,loop)=>{
if(!str)return -1;
str=str.split(' ')
let result=[]
for(let i=0;i<loop;i++){
    result.push(str[randint(0,str.length)])
}
result=result.toString().split(',').join(' ')
return result;
}

//canvorting str into no.
const StrToNo=(str)=>{
if(!str)return -1;
let result = str.split(' ')
result = new Number(result[0])
return result;
}


//event firer
const AddEvent=(traget,condition,fun)=>{
traget.addEventListener(condition,fun);
}

//
const ISRectCollision=(ObjectA,ObjectB)=>{
return (ObjectA.position.x + ObjectA.width >= ObjectB.position.x &&
ObjectA.position.x <= ObjectB.position.x + ObjectB.width &&
ObjectA.position.y + ObjectA.height >= ObjectB.position.y &&
ObjectA.position.y <= ObjectB.position.y + ObjectB.height)
    }


const ISCircleCollision = (ObjectA,ObjectB) => {
let dist=Math.hypot(ObjectA.position.x - ObjectB.position.x, ObjectA.position.y - ObjectB.position.y)

return (dist - ObjectB.radius - ObjectA.radius < 0.5)
}



// let colors='alpha red green blue alpha beta lowda leshsn'


// let result=RandSTRGen(colors,randint(10,100))

//console.log(result)
// const HarshMap=WordCounter((result))
// console.table(HarshMap)

// for(let i in HarshMap){

// let j= (i == i ? HarshMap[i]:-1);

// for(;j>0;j--){
// console.log(j)
// }

// }


// console.log(typeof colors,'\n',colors);
// colors=colors.split(' ').join(',')
// console.log(typeof colors,'\n',colors);
///

// colors=colors.split('e').length-1
// console.log(typeof colors,'\n',colors);
///
// colors=colors.split(' ')
// console.log(typeof colors,'\n',colors);



// let MyResult=StrToNo(WordCounter(colors,'alpha'))
