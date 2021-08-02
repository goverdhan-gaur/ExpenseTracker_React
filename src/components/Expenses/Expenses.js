import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
function Expenses(props) {

  const [filteredYear, setfilteredYear] = useState('2020');

  const filterChangehandler = (filteredYear) => {
    setfilteredYear(filteredYear);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected= {filteredYear} onDropdownChange = {filterChangehandler}/>
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[2].date}
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[3].date}
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
      ></ExpenseItem>
      {/* <ExpenseItem
        date={props.expenses[4].date}
        title={props.expenses[4].title}
        amount={props.expenses[4].amount}
      ></ExpenseItem> */}
    </Card>
  )
}

export default Expenses
