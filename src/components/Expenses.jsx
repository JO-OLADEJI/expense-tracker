import React, { useEffect, useState } from 'react';
import '../styles/Expenses.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem.jsx';

const Expenses = (props) => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    let initial = [];
    props.allExpenses.forEach(element => {
      initial.push(element.date.substring(0, 4));
    });
    const unique = [ ...new Set(initial) ];
    unique.sort((a, b) => b - a);
    setYears(() => unique);
  }, [props.allExpenses]);

  return (
    <Card className="Expenses">
      <select className="drop-down">
        <option value="">all</option>
        {years.map(each => (
          <option key={each}>
            {each}
          </option>
        ))}
      </select>
      {props.allExpenses.map((data, index) => (
        <ExpenseItem
          key={index}
          date={new Date(data.date)}
          expense={data.expense}
          amount={data.amount}
        />)
      )}
    </Card>
  );
}
 
export default Expenses;