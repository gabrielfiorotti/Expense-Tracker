import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    

    const saveExpenseDataHandler = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        };

        // data from child to parent: NewExpense -> App
        props.onAddExpense(expenseData);

        setIsEditing(false);
    }; 


    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>

            {/* if you are not editing, show the button */}
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}

            {/* if you are editing, show the form */}
            {isEditing && (
                <ExpenseForm 
                    onSaveNewExpenseData={saveExpenseDataHandler} 
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    )
};

export default NewExpense;

/*
/*send the data from child to parent: ExpenseForm -> NewExpense 
*/