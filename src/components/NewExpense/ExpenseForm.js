import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  
  const [EnteredTitle, setEnteredTitle] = useState('');
  const [EnteredAmount, setEnteredAmount] = useState('');
  const [EnteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // whenever your state update depends upon previous state then use the following function approach (not above one).
    // setUserInput((prevState)=>{
    //   return{ ...prevState, enteredTitle : event.target.value };
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {

    event.preventDefault();

    const expenseData = {
      title: EnteredTitle,
      amount: +EnteredAmount,
      date: new Date(EnteredDate),
    };

    props.onSubmitExpenseForm(expenseData);

    // console.log(expenseData);
    // Adding Two-Way binding to clear the form after submission.
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

  };

  const cancelHandler = (event) => {
    event.preventDefault();
    props.onCancelingExpenseForm(false);
  }

  return (
    <form>
      <div className="new-expense__controls">
        {/* Title field */}
        <div className="new-expense__control">
          <label>title</label>
          <input 
          type="text" 
          value={EnteredTitle} 
          onChange={titleChangeHandler} 
          />
        </div>
        {/* Amount field */}
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01" 
            value={EnteredAmount} 
            onChange={amountChangeHandler}
          />
        </div>
        {/* Date field */}
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-01-01" 
            value={EnteredDate} 
            onChange={dateChangeHandler}
          />
        </div>
        {/* Submit button */}
        <div className="new-expense__actions">
          <button onClick={submitHandler}>Add Expense</button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
