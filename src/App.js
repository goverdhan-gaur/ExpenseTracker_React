import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import './App.css'
import NewExpense from './components/NewExpense/NewExpense'
const DUMY_EXPENSES = [
  // {
  //   Id: Math.random(),
  //   date: new Date(2020, 1, 11),
  //   title: 'Milk',
  //   amount: '2312.2',
  // },
  // {
  //   Id: Math.random(),
  //   date: new Date(2020, 1, 11),
  //   title: 'Car Maintainence ',
  //   amount: '222.2',
  // },
  // {
  //   Id: Math.random(),
  //   date: new Date(2022, 3, 11),
  //   title: 'Phone Bill',
  //   amount: '312.2',
  // },
  // {
  //   Id: Math.random(),
  //   date: new Date(2019, 5, 23),
  //   title: 'Grocery',
  //   amount: '42.2',
  // },
]
function App() {
  const [expenses, setExpenses] = useState(DUMY_EXPENSES)
  const addExpensesHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  // console.log(expenses)
  return (
    <>
      <NewExpense onAddExpense={addExpensesHandler} />
      <div className="expenses-container">
        <Expenses expenses={expenses}></Expenses>
      </div>
    </>
  )
}
export default App
