import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    props.onChangeFilteredYear(selectedYear);
  };
  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      {props.items.map((expense) => (<ExpenseItem key = {expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date}/>))}
      
    </div>
  );
}

export default Expenses;