import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (<button onClick={handleClick}>{text}</button>)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const initialVotes = new Uint8Array(anecdotes.length)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialVotes)

  const setRand = () => {
    const newRand = Math.abs(Math.round(Math.random() * anecdotes.length - 1))
    newRand === selected ? setRand() : setSelected(newRand)
  }

  const setScore = () => {
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)
  }

  let newMax = [...votes]
  newMax = newMax.indexOf(Math.max(...newMax))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <blockquote><p>{anecdotes[selected]}</p></blockquote>
      <p>Has {votes[selected]} votes</p>
      <Button handleClick={() => setRand()} text="Random Anecdote" />
      <Button handleClick={() => setScore()} text="vote" />
      <p>Quote with most votes is:</p>
      <blockquote><p>{anecdotes[newMax]}</p></blockquote>
    </div>
  )
}

export default App
