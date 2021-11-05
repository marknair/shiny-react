import "./ExpenseItem.css"

function ExpenseItem() {
    return (
        <div>
            <div>November 4, 2021</div>
            <div>
                <h2 className="expense-item">Car Insurance</h2>
                <div className="expense-item__price">$254.00</div>
            </div>
        </div>)
}

export default ExpenseItem;