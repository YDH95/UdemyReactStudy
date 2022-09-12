import React, {useState} from "react";

import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: "test1",
    amount: 213,
    date: new Date(2022, 9, 23),
  },
  {
    id: 'e2',
    title: "test2",
    amount: 213,
    date: new Date(2021, 9, 23),
  },
  {
    id: 'e3',
    title: "test3",
    amount: 213,
    date: new Date(2020, 10, 23),
  },
  {
    id: 'e4',
    title: "test4",
    amount: 213,
    date: new Date(2019, 9, 23),
  },
];

function App() {
  const [expenses, setExpense] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpense(prevExpense => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpenseList items = {expenses}></ExpenseList>
    </div>
  );
}

export default App;
