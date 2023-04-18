// import custom components
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 65.20,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Book',
    amount: 30,
    date: new Date(2020, 3, 6),
  },
  { id: 'e3', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e4',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 3, 28),
  },
  {
    id: 'e5',
    title: 'New Desk (Wooden)',
    amount: 400,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e6',
    title: 'SuperMarket',
    amount: 520.43,
    date: new Date(2021, 9, 12),
  },
  {
    id: 'e7',
    title: 'Pharmacy',
    amount: 100,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e8',
    title: 'Heat',
    amount: 75.30,
    date: new Date(2022, 2, 20),
  },
  {
    id: 'e9',
    title: 'Concert Tickets',
    amount: 140,
    date: new Date(2022, 10, 4),
  },
];


function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // data from child to parent: NewExpense -> App
  const addExpenseHandler = (expense) => {

    // when you depend from a previous data to add something, pass a function:
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h1>Expense Tracker $</h1> 
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;



// there are 2 options to build the components functions (you can choose which do you prefer):

// standard ->

/*

function App() {
  return (
    <div>
      <h1>Expense Tracker $</h1> 
      <Expenses />
    </div>
  );
}

*/


// arrow functions ->

/* 

const App = () => {
  return (
    <div>
      <h1>Expense Tracker $</h1> 
      <Expenses />
    </div>
  );
}

*/
