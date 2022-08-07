import './ExpenseForm.css'
import { useState } from 'react';


const ExpenseForm = (props) =>{
    const [enteredTitle,setEnteredTitle]= useState('');
    const [enteredAmount,setEnteredAmount]= useState('');
    const [enteredDate,setEnteredDate]= useState('');

    const titleChangehandler = (event)=>{
        setEnteredTitle(event.target.value);
    };
    const amountChangehandler = (event)=>{
        setEnteredAmount(event.target.value);
    };
    const dateChangehandler = (event)=>{
        setEnteredDate(event.target.value);
    };

const submitHandler = (event) =>{
    event.preventDefault();
    const expenseData = {
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
    };
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');

    props.onSaveExpenseData(expenseData);
};

return <form onSubmit={submitHandler}>
    <div className = "new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type='text' value ={enteredTitle} onChange={titleChangehandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type='number' step = "0.01" min = "0.01" value = {enteredAmount} onChange={amountChangehandler}></input>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type='date' min = '1990-08-06' max = '2025-08-06' value = {enteredDate} onChange={dateChangehandler}></input>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type='submit'>
            Add Expense
        </button>
    </div>
    
</form>
};

export default ExpenseForm;