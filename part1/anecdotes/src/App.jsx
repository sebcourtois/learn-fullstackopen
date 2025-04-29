import {useState} from 'react'

function randomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex)
}

const VotesDisplay = ({voteCount}) => {
    if (!voteCount) {
        return (<p>No votes yet</p>)
    }
    return (<p>Has {voteCount} votes</p>)
}

const Anecdote = ({index, text, voteCount}) => {
    return (
        <>
            <p>{index} - {text}</p>
            <VotesDisplay voteCount={voteCount}/>
        </>
    )
}

const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
]
const voteCounters = Array(anecdotes.length).fill(0)

const App = () => {
    const [selected, setSelected] = useState(0)
    const [voteCount, setVoteCount] = useState(voteCounters[selected])

    voteCounters[selected] = voteCount

    const pickRandomAnecdote = () => {
        let newSelected = selected
        while (newSelected === selected) {
            newSelected = randomIndex(anecdotes.length - 1)
        }
        setSelected(newSelected)
        setVoteCount(voteCounters[newSelected])
    }

    return (
        <div>
            <Anecdote index={selected + 1} text={anecdotes[selected]} voteCount={voteCount}/>
            <button onClick={() => setVoteCount(voteCount + 1)}>Vote</button>
            <button onClick={pickRandomAnecdote}>Next Anecdote</button>
        </div>
    )
}

export default App
