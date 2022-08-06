const ExpenseForm = () =>{
return <form>
    <div className = "new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type='text'></input>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type='number' step = "0.01" min = "0.01"></input>
        </div>
        <div className="new-expense__control">
            <label>Title</label>
            <input type='date' min = '1990-08-06' max = '2025-08-06'></input>
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