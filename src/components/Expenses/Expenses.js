import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../UI/ExpensesFilter';
import Expenseslist from './ExpensesList';
import Expenseschart from '../ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState('2021');

  const changeExpenseFitlerHandler = (selectedYear) => {
    console.log(selectedYear);
    setfilteredYear(selectedYear);
  };

  //   const checkfilteredExpenses = (x) =>{
  //     return x.date.getFullYear().toString() === filteredYear;
  // }

  // const checkYear = (prop) => { return prop.date.getFullYear().toString() === filteredYear }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  const getFilteredData = props.items.filter(
     (prop) =>  prop.date.getFullYear().toString() === filteredYear 
    // checkYear
  );



  // Define a constant and set its value based on array.length to show expenses or special message.
  // let expensesContent = <p style={{color: "red"}}>No expenses found</p>;
  // if(getFilteredData.length > 0){
  //   expensesContent = getFilteredData.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeExpenseFilter={changeExpenseFitlerHandler}
        />

        {/* Using array map method of JS to create list of data */}
        {/* JS is going to return the part after && if condition is met and by using this
        we can simplify the ternary operator and add condition of checking array.length */}
        
        {/* If no expense is found with applied filter then return statement after && */}
        {/* {getFilteredData.length === 0 && <p style={{color: "red"}}>No expenses found</p>} */}
        
        {/* If any expense is found withe applied filter then return statement after && i.e the expenses */}
        {/* {getFilteredData.length > 0 && (getFilteredData.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )))}  */}
        
        {/* {getFilteredData.length === 0 ? (<p style={{color: "red"}}>No expenses found</p>) : (getFilteredData.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )))}  */}
        {/* {expensesContent} */}
        <Expenseschart expenses = {getFilteredData}/>
        <Expenseslist items={getFilteredData} />
      </Card>
    </div>
  );
};

export default Expenses;
