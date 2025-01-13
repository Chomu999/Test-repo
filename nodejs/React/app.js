
//import "./style/style.css"

//import Hi from "./components/c1.js"
//var c1 = require("components/c1.js");
 

// function require(path){
// import out from path;
// console.log(out);
// }




function Lol(){
return (<q>lol guy's</q>);
}



function App(){
return (
<div>
	<Lol />
</div>
);
}





const root = ReactDOM.createRoot(document.getElementById('rootElement'));



root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);

console.log(App);