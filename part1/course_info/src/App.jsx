const Header = (props) => {
    return (<h1>{props.text}</h1>)
}

const Content = (props) => {
    return (<p>{props.label} {props.value}</p>)
}

const Total = (props) => {
    return (<p>{props.label} {props.value}</p>)
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (<div>
            <Header text={course}/>
            <Content label={part1} value={exercises1}/>
            <Content label={part2} value={exercises2}/>
            <Content label={part3} value={exercises3}/>
            <Total label="Number of exercises" value={exercises1 + exercises2 + exercises3}/>
        </div>)
}

export default App