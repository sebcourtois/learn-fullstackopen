import {useState} from 'react'

const StatsLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Stats = ({good, neutral, bad}) => {
    const feedbackCount = good + neutral + bad
    if (!feedbackCount) {
        return (
            <p>No feedback yet</p>
        )
    }
    const averageRate = (good - bad) / feedbackCount
    const positiveRate = good / feedbackCount * 100
    return (
        <table>
            <tbody>
            <StatsLine text="good" value={good}/>
            <StatsLine text="neutral" value={neutral}/>
            <StatsLine text="bad" value={bad}/>
            <StatsLine text="all" value={feedbackCount}/>
            <StatsLine text="average" value={averageRate}/>
            <StatsLine text="positive" value={positiveRate.toString() + " %"}/>
            </tbody>
        </table>
    )
}

const Button = ({onClick, text}) => {
    return (<button onClick={onClick}>{text}</button>)
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button onClick={() => setGood(good + 1)} text="good"/>
            <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
            <Button onClick={() => setBad(bad + 1)} text="bad"/>
            <h2>Statistics</h2>
            <Stats good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App