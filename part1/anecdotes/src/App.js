import { useState } from 'react'

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

  const [selected, setSelected] = useState(0)

  const [point, setPoint] = useState(new Uint8Array(anecdotes.length))

  const mostVotes = Math.max(...point)
  const indexMostVotes = point.indexOf(mostVotes)

  const handleClick = () => {
    const ran = Math.floor(Math.random() * anecdotes.length)
    setSelected(ran)
  }

  const handleVote = () => {
    const pointCopy = [...point]
    pointCopy[selected] += 1
    setPoint(pointCopy)
    console.log(pointCopy)
  }

  return (
    <div>
      <h3>Anecdotes of the day</h3>
      {anecdotes[selected]}
      <p>has {point[selected]} votes</p>
      <button onClick={handleVote}>Vote</button><button onClick={handleClick}>Next anecdote</button>
      <h3>Anecdotes with the most votes</h3>
      {anecdotes[indexMostVotes]}
      <p>has {mostVotes} votes</p>
    </div>
  )
}

export default App