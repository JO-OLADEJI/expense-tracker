import React from 'react';
import '../styles/ExpenseItem.css';
import Card from './Card.jsx';
import DateX from './DateX.jsx';

const ExpenseItem = (props) => {
  return (
    <Card className="ExpenseItem">
      <DateX
        date={props.date}
      />
      <div className="desc">
        <h2>{props.expense}</h2>
        <div>
          $ <span>{props.amount}</span>
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;