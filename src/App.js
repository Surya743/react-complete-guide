import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpenses";
const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses,setExpenses] = useState(dummy_expenses);
  const expenseHandler = (expenseData) => {
    setExpenses((previous_expense_data) =>{
      return [expenseData, ...previous_expense_data]
    });
  
  };

 
  
  const filterHandler = (selected_year) => {
    console.log(selected_year);
  };

  return (
    <div>
      <NewExpense onAddExpense={expenseHandler} />
      <Expenses items={expenses} onChangeFilteredYear={filterHandler} />
    </div>

  );
}

export default App;
