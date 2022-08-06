import './ExpenseDate.css';
function ExpenseDate(props){
    const year = props.date.getFullYear();    
    let longMonth = props.date.toLocaleString('en-US', {month: 'long' });
    const days = String(props.date.getDate()).padStart(2, '0');

    return (<div className='expense-date'>
        <div className='expense-date__day'>{days}</div>
        <div className='expense-date__month'>{longMonth}</div>
        <div className='expense-date__year'>{year}</div>
        
       
        
        </div>);
};

export default ExpenseDate;