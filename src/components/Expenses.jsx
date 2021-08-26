import React from 'react';
import '../styles/Expenses.css';
import ExpenseItem from './ExpenseItem.jsx';

const Expenses = (props) => {
  return (
    <div className="Expenses">
      {props.allExpenses.map((data, index) => (
        <ExpenseItem
          key={index}
          date={new Date(data.date)}
          expense={data.expense}
          amount={data.amount}
        />)
      )}
    </div>
  );
}
 
export default Expenses;