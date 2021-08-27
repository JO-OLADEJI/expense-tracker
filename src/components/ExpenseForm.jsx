import React from 'react';
import '../styles/ExpenseForm.css';

const ExpenseForm = (props) => {
  const now = new Date();
  const maxDateYear = now.getFullYear().toString();
  const maxDateMonth = (now.getMonth() + 1).toString().padStart(2, '0');
  const maxDateDay = now.getDate().toString().padStart(2, '0');
  const maxDate = maxDateYear + '-' + maxDateMonth + '-' + maxDateDay;

  return (
    <form className="ExpenseForm">
      <div className="input-fields">
        <div className="title">
          <input type="text" />
          <p>Title</p>
        </div>
        <div className="amount">
          <input type="number" min="0.01" step="0.01" />
          <p>Amount</p>
        </div>
        <div className="date">
          <input type="date" min="2021-01-01" max={maxDate} />
          <p>Date</p>
        </div>
      </div>
      <div className="submit-btn">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
 
export default ExpenseForm;