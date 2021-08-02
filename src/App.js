import Expenses from './components/Expenses/Expenses'
import './App.css'
import NewExpense from './components/NewExpense/NewExpense'
function App() {
  const expenses = [
    { date: new Date(2000, 1, 11), title: 'Milk', amount: '2312.2' },
    {
      date: new Date(1999, 1, 11),
      title: 'Car Maintainence ',
      amount: '222.2',
    },
    { date: new Date(2000, 3, 11), title: 'Phone Bill', amount: '312.2' },
    { date: new Date(2000, 5, 23), title: 'Grocery', amount: '42.2' },
  ]

  const addExpensesHandler = (expenseData) => {
    expenses.push(expenseData)
    console.log(expenseData)
  }
  return (
    <>
      <NewExpense onAddExpense = {addExpensesHandler}/>
      <div className="expenses-container">
        <Expenses expenses={expenses}></Expenses>
      </div>
    </>
  )
}
export default App
