import {useState} from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const feedbackCount = good + neutral + bad
    const averageRate = feedbackCount > 0 ? (good - bad) / feedbackCount : 0
    const positiveRate = feedbackCount > 0 ? good / feedbackCount : 0

    return (
        <div>
            <h1>Give Feedback</h1>
            <button onClick={() => setGood(good + 1)}>good</button>
            <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => setBad(bad + 1)}>bad</button>
            <h2>Statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {feedbackCount}</p>
            <p>average {averageRate}</p>
            <p>positive {positiveRate} %</p>
        </div>
    )
}

export default App