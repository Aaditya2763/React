import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  function addNewExpenseHAndler(enteredExpenseData){
   const expenseData={
    ...enteredExpenseData,
    id:Math.random().toString()
   }
  // passing Data to ots parent component i.e parent component  
props.onAddExpense(expenseData);
//console.log(expenseData);

  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={addNewExpenseHAndler} />
    </div>
  );
};

export default NewExpense;
