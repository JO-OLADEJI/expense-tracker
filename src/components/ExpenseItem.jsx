import React from 'react';
import '../styles/ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <div className="ExpenseItem">
      <div>{props.date}</div>
      <div className="desc">
        <h2>{props.expense}</h2>
        <div>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;