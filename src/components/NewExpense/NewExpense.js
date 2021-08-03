import React, { useState } from 'react'
import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const startEditinghandler = () => {
    setIsEditing(true)
  }
  const stopEditingHandler = () => {
    setIsEditing(false)
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseDate = {
      ...enteredExpenseData,
      Id: Math.random().toString(),
    }
    props.onAddExpense(expenseDate)
  }
  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="submit" onClick={startEditinghandler}>
          Add Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onStopEditing={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
