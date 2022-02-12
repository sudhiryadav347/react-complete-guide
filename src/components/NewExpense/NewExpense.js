import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const Newexpense = (props) => {
  const onSubmitExpenseFormHandler = (submittedExpenseData) => {
    // const expenseData = {
    //     ...submittedExpenseData,
    // id: Math.random(),
    // }

    // console.log(submittedExpenseData);
    props.onAddExpense(submittedExpenseData);
    // console.log(expenseData);
  };

  const [showForm, setshowForm] = useState(false);

  const formVisibilityHandler = () => {
    setshowForm(true);
  }

  const onCancelingExpenseFormHander = (data) => {
    setshowForm(data);
  }


  return (
    <div className="new-expense">
      {showForm && <ExpenseForm onSubmitExpenseForm={onSubmitExpenseFormHandler} onCancelingExpenseForm = {onCancelingExpenseFormHander}/> }
      {!showForm && <button onClick={formVisibilityHandler}>Add New Expense Item</button>}
    </div>
  );
};

export default Newexpense;
