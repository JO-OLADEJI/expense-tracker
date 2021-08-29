import React from 'react';
import '../styles/NewExpense.css';
import ExpenseForm from './ExpenseForm.jsx';
import Card from './Card.jsx';

const NewExpense = (props) => {
  return (
    <Card className="NewExpense">
      <ExpenseForm />
    </Card>
  );
}
 
export default NewExpense;