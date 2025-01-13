const {useState, useEffect} = React;


const getCurrentTime = () => new Date().toDateString();


const Clock=()=>{

const [currentDateTime, setCurrentDateTime] = useState(new Date());

useEffect(()=>{

let setTime=()=>{
console.log("setTime is called");
setCurrentDateTime(new Date());

}
let interval = setInterval(setTime, 1000);

return ()=>{
clearInterval(interval);
}

}, []);

return (
<div className="wrapper">
<p> the time current is:<b className="blue"> {currentDateTime.toString()}</b> </p>
</div>
);

}


const ExpenseForm=()=>{

const inputRef=React.createRef();
const amountRef=React.createRef();
const dateRef=React.createRef();
const categoryRef=React.createRef();





const onSubmit = (e) => {
 e.preventDefault();
let item={};
item.name=inputRef.current.value;
item.amount=amountRef.current.value;
item.date=dateRef.current.value;
item.category=categoryRef.current.value;
alert(JSON.stringify(item));
}

return (
<div className="wrapper" id="expenseForm">

<form className="wrapper" onSubmit={ onSubmit}>


<label for="name">Title</label>

<input type="text" id="name" name="name" ref={inputRef} placeholder="Enter expense title"/>

<label for="amount">Amount</label>

<input type="number" id="amount" name="amount" ref={amountRef} placeholder="Enter expense amount" />

<label for="date">Spend Date</label>

<input type="date" id="date" name="date" ref={dateRef} placeholder="Enter date" />

<label for="category">Category</label>

<select id="category" name="category" ref={categoryRef} >

<option value="">Select</option>

<option value="Food">Food</option>

<option value="Entertainment">Entertainment</option>

<option value="Academic">Academic</option>

</select>


<input type="submit" value="Submit" />

</form>

</div>
);



}





const App =()=> (
<div className="wrapper">
<div className="wrapper">
<h1>the time is : <b className="red"> {getCurrentTime()}</b></h1>
</div>

<ExpenseForm />

</div>
);


const root = ReactDOM.createRoot(document.getElementById("react-app"));

root.render(
<React.StrictMode>
<App/>
</React.StrictMode>
);

