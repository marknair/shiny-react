import "./ExpenseItem.css"

function ExpenseItem() {

    const expenseDate = new Date(2021, 11, 5);
    const expenseTitle = "Car Insurance"
    const expenseAmount = 245.00

    return (

        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div>
                <h2 className="expense-item__description">{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>)
}

export default ExpenseItem;