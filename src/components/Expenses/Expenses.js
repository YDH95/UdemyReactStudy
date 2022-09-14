import React, { useState } from "react";

import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";


function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };
  
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          seleted={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default ExpenseList;
