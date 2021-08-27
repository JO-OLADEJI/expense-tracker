import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses.jsx';
import NewExpense from './components/NewExpense.jsx';
import expensesData from './data/expenses.json';

const App = () => {
  const [allExpenses, setAllExpenses] = useState(expensesData);

  return (
    <div className="App">
      <h1>Let's get started!</h1>
      <NewExpense />
      <Expenses
        allExpenses={allExpenses}
      />
    </div>
  );
}

export default App;