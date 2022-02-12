import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import Newexpense from './components/NewExpense/NewExpense';

const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 998.21,
    date: new Date(2021, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 538.5,
    date: new Date(2021, 3, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 230.98,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 782.9,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [newExpenses, setnewExpenses] = useState(initialExpenses);
  const addExpenseHandler = (Data) => {
    // const expenseData = Data;
    // console.log('expense data in app has arrived', expenseData);
    // setExpenses([Data, ...expenses]);
    setnewExpenses((prevExpenses) => {
      return [Data, ...prevExpenses];
    });
    // console.log(newExpenses);
    // console.log(Data);
  };

  return (
    <div>
      <Newexpense onAddExpense={addExpenseHandler} />
      <Expenses items={newExpenses} />
    </div>
  );
}

export default App;
