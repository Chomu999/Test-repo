import {Utils} from "utils.js";

Utils.Hi()

const getCurrentTime = () => new Date().toDateString();


const App =()=> (
<div className="wrapper">
<div className="wrapper">
<h1>the time is : <b className="red"> {getCurrentTime()}</b></h1>
</div>
</div>
);


const root = ReactDOM.createRoot(document.getElementById("react-app"));

root.render(
<React.StrictMode>
<App/>
</React.StrictMode>
);
