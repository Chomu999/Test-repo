
//import "./style/style.css"


function Hi(){
return <p>aloo lelo piyaz lelo</p>
}

function App(){
return <h1> <Hi/> </h1>;
}





const root = ReactDOM.createRoot(document.getElementById('rootElement'));



root.render(<App />);
