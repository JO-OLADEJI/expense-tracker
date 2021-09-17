import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses.jsx';
import NewExpense from './components/NewExpense.jsx';
import expensesData from './data/expenses.json';

const App = () => {
  const [allExpenses, setAllExpenses] = useState(expensesData);

  const newExpenseHandler = (newExpense) => {
    setAllExpenses((prevState) => {
      return [ ...prevState, newExpense ];
    });
  }

  return (
    <div className="App">
      <h1>Expense Tracker.</h1>
      <NewExpense
        onSaveExpenseData={newExpenseHandler}
      />
      <Expenses
        allExpenses={allExpenses}
      />
    </div>
  );
}

export default App;