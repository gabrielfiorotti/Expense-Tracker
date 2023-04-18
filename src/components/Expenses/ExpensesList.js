import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

const ExpensesList = props => {

    // if it's empty, show a message
    if (props.items.length === 0) {
        return <p className="expenses-list__fallback">Found no expenses.</p>
    }

    // else:
    return <ul className="expenses-list">
        {props.items.map((expense) => (
        <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}
            />
        ))}
    </ul>
};

export default ExpensesList;