import "./ExpenseItem.css";


function ExpenseItem(props){
    
    const year = props.date.getFullYear();
    
    let longMonth = props.date.toLocaleString('en-US', {month: 'long' });

    

    return (
        <div className="expense-item">
           <div>
            
           <div>{longMonth}</div>
           <div>{year}</div>
           
          
           
           </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            
        </div>
    );
    

    
}

export default ExpenseItem;

