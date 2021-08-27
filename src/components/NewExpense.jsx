import React from 'react';
import '../styles/NewExpense.css';
import ExpenseForm from './ExpenseForm.jsx';

const NewExpense = (props) => {
  return (
    <div className="NewExpense">
      <ExpenseForm />
    </div>
  );
}
 
export default NewExpense;