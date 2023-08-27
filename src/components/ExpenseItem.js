import './ExpenseItem.css'

function ExpenseItem(props){
    const expenseDate = props.date
    const expenseTitle = props.title
    const expenseAmount = props.amount
    const LocationOfExpenditure = 'India'

    return(
        <div className='expense-item'>
            <div>March 28th 2023</div>
            <div className='expense-item_description'>
                <h2>Food</h2>
                <div className='expense-item_price'>Rs. 10</div>
            </div>
            <div className='expense-item_description'>
                <h2>Petrol</h2>
                <div className='expense-item_price'>Rs. 100</div>
            </div>
            <div className='expense-item_description'>
                <h2>Movies</h2>
                <div className='expense-item_price'>Rs. 200</div>
            </div>
            <div className='expense-item_description'>
                <h2>{expenseTitle}</h2>
                <h2>{expenseDate}</h2>
                <div className='expense-item_price'>Rs. {expenseAmount}</div>
                <div className='expense-item_price'>{LocationOfExpenditure}</div>
            </div>
        </div>
    )
}

export default ExpenseItem