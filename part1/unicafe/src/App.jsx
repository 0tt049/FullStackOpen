
import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}> {props.text} </button>
)

const StatisticsLine = ({ text, value }) => (<tbody><tr><td>{text}</td><td>{value}</td></tr></tbody>)

const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad
  const average = Math.round((total / 3) * 100) / 100
  const positive = good > 0 ? Math.round((good / total * 100) * 100) / 100 : "---"

  return (
    <table>
      <StatisticsLine text="Good" value={good} />
      <StatisticsLine text="Neutral" value={neutral} />
      <StatisticsLine text="Bad" value={bad} />
      <StatisticsLine text="Total" value={total} />
      <StatisticsLine text="Average" value={average} />
      <StatisticsLine text="Positive" value={positive} />
    </table>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>Statistics:</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
