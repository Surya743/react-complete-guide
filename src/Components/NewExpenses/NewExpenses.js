import React from "react";
import './NewExpenses.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{
    const saveExpenseHandler = (enteredData) =>{
        const expenseData ={
            ...enteredData,
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };


    return <div className = "new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
    </div>
};

export default NewExpense;