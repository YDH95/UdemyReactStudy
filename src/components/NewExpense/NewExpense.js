import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const onSaveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enterdExpenseData,
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
