const Header = ({title}) => {
    return (
        <h1>{title}</h1>
    )
}

const Part = ({title, exerciseCount}) => {
    return (
        <p>{title} {exerciseCount}</p>
    )
}

const Content = ({parts}) => {
    return (
        <>
            <Part title={parts[0].title} exerciseCount={parts[0].exerciseCount}/>
            <Part title={parts[1].title} exerciseCount={parts[1].exerciseCount}/>
            <Part title={parts[2].title} exerciseCount={parts[2].exerciseCount}/>
        </>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header title={course.name}/>
            <Content parts={course.parts}/>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {id: 1, title: 'Fundamentals of React', exerciseCount: 10},
            {id: 2, title: 'Using props to pass data', exerciseCount: 7},
            {id: 3, title: 'State of a component', exerciseCount: 14},
        ],
    }
    return <Course course={course}/>
}

export default App