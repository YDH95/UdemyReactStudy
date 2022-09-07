import React, {useState} from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(params) {
    return (
        <div className="new-expense">
            <ExpenseForm></ExpenseForm>
        </div>
    )
}

export default NewExpense;