const Header = (props) => {
    return (
        <h1>{props.text}</h1>
    )
}

const Part = (props) => {
    return (
        <p>{props.title} {props.exerciseCount}</p>
    )
}

const Content = (props) => {
    const parts = props.parts
    return (
        <>
            <Part title={parts[0].title} exerciseCount={parts[0].exerciseCount}/>
            <Part title={parts[1].title} exerciseCount={parts[1].exerciseCount}/>
            <Part title={parts[2].title} exerciseCount={parts[2].exerciseCount}/>
        </>
    )
}

const Total = (props) => {
    const parts = props.parts
    const totalExercises = parts[0].exerciseCount + parts[1].exerciseCount + parts[2].exerciseCount
    return (<p>Number of exercises {totalExercises}</p>)
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {title: 'Fundamentals of React', exerciseCount: 10},
        {title: 'Using props to pass data', exerciseCount: 7},
        {title: 'State of a component', exerciseCount: 14},
    ]

    return (
        <div>
            <Header text={course}/>
            <Content parts={parts}/>
            <Total parts={parts}/>
        </div>
    )
}

export default App