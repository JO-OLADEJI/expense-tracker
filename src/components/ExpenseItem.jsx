import React from 'react';
import '../styles/ExpenseItem.css';
import DateX from './DateX';

const ExpenseItem = (props) => {
  return (
    <div className="ExpenseItem">
      <DateX
        date={props.date}
      />
      <div className="desc">
        <h2>{props.expense}</h2>
        <div>
          $ <span>{props.amount}</span>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;