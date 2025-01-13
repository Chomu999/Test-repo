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

const ExpenseEntryItemListFn=(props)=>{

const [items, setItems] = useState(props.items);


function handleMouseEnter(e) {
 e.target.parentNode.classList.add("highlight");
}

function handleMouseLeave(e) {
 e.target.parentNode.classList.remove("highlight");
}

function handleMouseOver(e) {
 console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
}

function handleDelete(id, e) {
 e.preventDefault();
 console.log(id);
 let newItems = [];
 items.forEach((item, idx) => {
 if (item.id != id)
 newItems.push(item)
 })
 setItems(newItems);
}

function getTotal() {
 let total = 0;
 for (var i = 0; i < items.length; i++) {
 total += items[i].amount
 }
 return total;
}

const lists = items.map((item) =>
 <tr key={item.id} onTouchStart={handleMouseEnter} onTouchEnd={handleMouseLeave} onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}>
 <td>{item.name}</td>
 <td>{item.amount}</td>
 <td>{new Date(item.spendDate).toDateString()}</td>
 <td>{item.category}</td>
 <td><a href="#"
 onClick={(e) => handleDelete(item.id, e)}>Remove</a></td>
 </tr>
);

return (
<div className="wrapper">
 <div className="wrapper">{ props.header }</div>
 <table className="wrapper" onMouseOver={handleMouseOver}>
 <thead>
 <tr>
 <th>Item</th>
 <th>Amount</th>
 <th>Date</th>
 <th>Category</th>
 <th>Remove</th>
 </tr>
 </thead>
 <tbody>
 {lists}
 <tr>
 <td colSpan="1" style={{ textAlign: "right" }}>Total 
Amount</td>
 <td colSpan="4" style={{ textAlign: "left" }}>
 {getTotal()}
 </td>
 </tr>
 </tbody>
 </table>
 <div className="wrapper">{props.footer}</div>
</div>
 );

}

const items = [
{ id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food"},
{ id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category:"Food" },
{ id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category:"Entertainment" },
{ id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15",category: "Academic" },
{ id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category:"Food" },
{ id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category:"Cloth" },
{ id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category:"Entertainment" },
{ id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category:"Food" },
{ id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category:"Gadgets" },
{ id: 10, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category:"Academic" }
];



const App =()=> (
<div className="wrapper">
<div className="wrapper">
<h1>the time is : <b className="red"> {getCurrentTime()}</b></h1>
</div>

<Clock/>

<ExpenseEntryItemListFn

items={items}

header={
 <div><h1>Expense manager</h1></div>
}

footer={
<div style={{ textAlign: "left" }}>
<p style={{ fontSize: "12px" }}>Sample application</p>
</div>
}
/>

</div>
);


const root = ReactDOM.createRoot(document.getElementById("react-app"));

root.render(
<React.StrictMode>
<App/>
</React.StrictMode>
);

