// //////
const getData= async(url,type='text')=>{
const res= await fetch(url,{
header:{
method:'GET'
}
})

const c=type.toUpperCase();
if(c=='TEXT') return res.text();
else if(c=='JSON') return res.json();
else return null;

}

const add = (a,b)=>{ return a+b };
const sub = (a,b)=>{ return a-b };
const mul = (a,b)=>{ return a*b };
const div = (a,b)=>{ return a/b };

exports.modules = {add, sub, mul, div, getData};
//exports.modules = {getData};

// export.modules = {add};
// export.modules = {sub};
// export.modules = {mul};
// export.modules = {div};