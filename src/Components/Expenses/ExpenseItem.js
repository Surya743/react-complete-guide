import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

import { useState } from "react";



function ExpenseItem(props){     
    

    let [title,setTitle] = useState(props.title) 
    const clickhandler = () =>{
        setTitle("Changed!");
    }
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                < button onClick={clickhandler} className="button1">Change</button>
                
            </div>
            
            
        </div>
    );
    

    
}

export default ExpenseItem;

