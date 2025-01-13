
const getCurrentTime = () => new Date().toDateString();


const log=(e)=>{
console.log(e.target.innerHTML);
}

const handleMouseEnter=(e)=>{
e.target.parentNode.classList.add("highlight");
}

const handleMouseLeave=(e)=>{
 e.target.parentNode.classList.remove("highlight");
}

const handleMouseOver=(e)=>{
console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
}


const StateManagement=props=>{

const lists = props.items.map( (item) =>
 <tr key={item.id} onTouchStart={handleMouseEnter} onTouchEnd={handleMouseLeave} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
 <td>{item.name}</td>
 <td>{item.amount}</td>
 <td>{new Date(item.spendDate).toDateString()}</td>
 <td>{item.category}</td>
 </tr>
);

return (
 <table onMouseOver={handleMouseOver}>
 <thead>
 <tr>
 <th>Item</th>
 <th>Amount</th>
 <th>Date</th>
 <th>Category</th>
 </tr>
 </thead>
 <tbody>
 {lists}
 </tbody>
 </table>
 );;

};




const items = [
 { id: 1, name: "Pizza", amount: 80, spendDate: "2024-7-10", category: "Food"},
 { id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category:"Food" },
 { id: 3, name: "Cinema", amount: 210, spendDate: "2024-10-16", category:"Entertainment" },
 { id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15",category: "Academic" },
 { id: 5, name: "Mango Juice", amount: 35, spendDate: "2024-3-16", category:"Food" },
 { id: 6, name: "Dress", amount: 2000, spendDate: "2024-2-25", category:"Cloth" },
 { id: 7, name: "Tour", amount: 2555, spendDate: "2024-1-29", category:"Entertainment" },
 { id: 8, name: "Meals", amount: 300, spendDate: "2024-6-30", category:"Food" },
 { id: 9, name: "Mobile", amount: 3500, spendDate: "2024-4-02", category:"Gadgets" },
 { id: 10, name: "Exam Fees", amount: 1245, spendDate: "2023-11-04", category:"Academic" }
];



const App =()=> (
<div className="wrapper">
<div className="wrapper">
<h1>the time is : <b className="red"> {getCurrentTime()}</b></h1>
</div>

<StateManagement items={items}/>

</div>
);


const root = ReactDOM.createRoot(document.getElementById("react-app"));

root.render(
<React.StrictMode>
<App/>
</React.StrictMode>
);
