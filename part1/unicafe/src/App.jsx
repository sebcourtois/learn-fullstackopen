import {useState} from 'react'

const Stats = ({good, neutral, bad}) => {
    const feedbackCount = good + neutral + bad
    if (!feedbackCount) {
        return (
            <>
                <p>No feedback yet</p>
            </>
        )
    }
    const averageRate = (good - bad) / feedbackCount
    const positiveRate = good / feedbackCount
    return (
        <>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {feedbackCount}</p>
            <p>average {averageRate}</p>
            <p>positive {positiveRate} %</p>
        </>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give Feedback</h1>
            <button onClick={() => setGood(good + 1)}>good</button>
            <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => setBad(bad + 1)}>bad</button>
            <h2>Statistics</h2>
            <Stats good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App