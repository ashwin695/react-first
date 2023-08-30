import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import { useState } from 'react'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)
    const [amount, setAmount] = useState(props.amount)

    const handleClick = () => {
        setTitle("Updated!")
        console.log(title)
    }

    const handlClickAmount = () => {
        setAmount(amount + 100)
    }

    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>Rs. {amount}</div>
            </div>
            <button onClick={handleClick}>Change title</button>
            <button onClick={handlClickAmount}>Delete Button</button>
        </Card>
    )
}

export default ExpenseItem