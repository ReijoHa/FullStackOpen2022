import { useState } from 'react'

const MostVotes = ({anecdotes, votes}) => {
  const winner = votes.indexOf(Math.max(...votes))
  return(
    <div>
      <p>{anecdotes[winner]}</p>
      <p>has {votes[winner]} votes</p>
    </div>
  )
}

const Button = ({click, text}) => <button onClick={click}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const randomAnecdote = Math.floor(Math.random() * anecdotes.length)
  const nextAnecdote = () => setSelected(randomAnecdote)

  const [selectedVotes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const nextVote = () => {
    const copyOfVotes = [...selectedVotes]
    copyOfVotes[selected] += 1
    setVotes(copyOfVotes)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {selectedVotes[selected]} votes</p>
      <Button click={nextVote} text="vote"/>
      <Button click={nextAnecdote} text="next anecdote"/>
      <h2>Anecdote with most votes</h2>
      <MostVotes anecdotes={anecdotes} votes={selectedVotes}/>
    </div>
  )
}

export default App
