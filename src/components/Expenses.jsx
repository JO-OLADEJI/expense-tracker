import React, { useEffect, useState } from 'react';
import '../styles/Expenses.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem.jsx';

const Expenses = (props) => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('all');
  const [sortedExpense, setSortedExpense] = useState([]);

  // get all the expenses to be displayed
  useEffect(() => {
    setSortedExpense(() => props.allExpenses);
  }, [props.allExpenses]);

  // extract all years present in the data
  useEffect(() => {
    let initial = [];
    props.allExpenses.forEach(element => {
      initial.push(element.date.substring(0, 4));
    });
    const unique = [ ...new Set(initial) ];
    unique.sort((a, b) => b - a);
    setYears(() => unique);
  }, [props.allExpenses]);

  // filter the data based on the year
  useEffect(() => {
    if (selectedYear === 'all') {
      setSortedExpense(() => props.allExpenses);
    }
    else {
      const sortedList = props.allExpenses.filter(expense => {
        return expense.date.substring(0, 4) === selectedYear;
      });
      setSortedExpense(() => sortedList);
    }
  }, [selectedYear]);

  const yearChangeHandler = (e) => {
    setSelectedYear((prev) => e.target.value);
  }

  
  return (
    <Card className="Expenses">
      <div className="drop-down-wrapper">
        <i className="fas fa-sort-amount-down" />
        <select 
          className="drop-down"
          value={selectedYear} 
          onChange={e => yearChangeHandler(e)}>
          <option value="all">all</option>
          {years.map(each => (
            <option 
              key={each}
              value={each}>
              {each}
            </option>
          ))}
        </select>
      </div>
      {sortedExpense.map((data, index) => (
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