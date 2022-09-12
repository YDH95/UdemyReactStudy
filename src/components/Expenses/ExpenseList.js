import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";
import ExpensesFilter from "./ExpensesFilter";

function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };
  
  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          seleted={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default ExpenseList;
