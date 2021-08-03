import React, { useState } from 'react'
import ExpensesList from './ExpensesList'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
function Expenses(props) {
  const [expensesArr, setExpensesArr] = useState(props.expenses)
  const [filteredYear, setfilteredYear] = useState('All')

  const filterChangehandler = (filteredYear) => {
    setfilteredYear(filteredYear)
    if (filteredYear === 'all') {
      setExpensesArr(props.expenses)
    } else {
      const expensesFiltered = props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear,
      )
      setExpensesArr(expensesFiltered)
    }
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onDropdownChange={filterChangehandler}
      />
      <ExpensesChart expenses={expensesArr} />
      <ExpensesList items={expensesArr} />
    </Card>
  )
}

export default Expenses
