import './ExpenseDate.css'
import Card from '../UI/Card'
function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  const day = props.date.toLocaleString('en-Us', { day: '2-digit' })
  const year = props.date.getFullYear()

  return (
    <Card className="expenseDate">
      <div className="expenseDate__month">{month}</div>
      <div className="expenseDate__year">{year}</div>
      <div className="expenseDate__date">{day}</div>
    </Card>
  )
}

export default ExpenseDate
