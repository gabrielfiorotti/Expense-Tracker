import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css'


function Expenses(props) {

  const [year, setYear] = useState('2023');

  function filterChangeHandler (selectedYear) {
    // update the year that user selected
    setYear(selectedYear);
  };


  // filter() -> built in function that receives another function and returns a new array if it's true
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });



  return (
    <div>
      <Card className="expenses">

        <ExpensesFilter defaultYear={year} onChangeFilter={filterChangeHandler} />

        <ExpensesChart expenses={filteredExpenses}/>
        
        <ExpensesList items={filteredExpenses} />

      </Card>
    </div>

  );
}

export default Expenses;