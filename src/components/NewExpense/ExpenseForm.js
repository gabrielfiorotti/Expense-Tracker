import React, {useState} from 'react';
import moment from 'moment-timezone';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    };


    // note that, just for example, I create this function in the standard way, and not with arrow function. Both ways works.
    function submitHandler(event) {
        event.preventDefault();

        const newExpenseData = {
            title: enteredTitle,
            // + -> It's added to convert the input from a string to a number 
            // and hence make sure that numbers are added (and not strings concatenated).
            amount: +enteredAmount,
            date: moment.tz(enteredDate, 'America/Sao_Paulo').toDate()        
        };


        // send the data from child to parent: ExpenseForm -> NewExpense
        props.onSaveNewExpenseData(newExpenseData);


        // change the state again to clear the inputs after submission: you have to insert the `value={}` in the input.
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={enteredTitle} 
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2019-01-01" 
                        max="2023-12-31" 
                        value={enteredDate}
                        onChange={dateChangeHandler} 
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;