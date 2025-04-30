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

const AnecdoteView = ({index, text, voteCount}) => {
    return (
        <>
            <p>{index} - {text}</p>
            <VotesDisplay voteCount={voteCount}/>
        </>
    )
}

class Anecdote {
    static #counter = 0
    #id = 0

    constructor(text) {
        this.#id = Anecdote.#counter++
        this.text = text
        this.voteCount = 0
    }

    get id() {
        return this.#id
    }

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
].map((text) => new Anecdote(text))

function pickRandomAnecdote() {
    return anecdotes[randomIndex(anecdotes.length - 1)]
}

function getPopularAnecdote(){
    return anecdotes.reduce(
        (prev,curr) => (curr.voteCount > prev.voteCount) ? curr : prev
    )
}

const App = () => {
    const [currentAnecdote, setCurrentAnecdote] = useState(pickRandomAnecdote())
    const [, setCurrentVoteCount] = useState(currentAnecdote.voteCount)
    const [popularAnecdote, setPopularAnecdote] = useState(getPopularAnecdote())
    // console.log(currentAnecdote)

    const handleNextAnecdoteClick = () => {
        let nextAnecdote = currentAnecdote
        while (nextAnecdote === currentAnecdote) {
            nextAnecdote = pickRandomAnecdote()
        }
        setCurrentAnecdote(nextAnecdote)
    }
    const handleVoteClick = () => {
        currentAnecdote.voteCount++
        setCurrentVoteCount(currentAnecdote.voteCount)
        setPopularAnecdote(getPopularAnecdote())
    }

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <AnecdoteView
                index={currentAnecdote.id + 1}
                text={currentAnecdote.text}
                voteCount={currentAnecdote.voteCount}
            />
            <button onClick={handleVoteClick}>Vote</button>
            <button onClick={handleNextAnecdoteClick}>Next Anecdote</button>
            <h2>Most popular anecdote</h2>
            <AnecdoteView
                index={popularAnecdote.id + 1}
                text={popularAnecdote.text}
                voteCount={popularAnecdote.voteCount}
            />
        </div>
    )
}

export default App
