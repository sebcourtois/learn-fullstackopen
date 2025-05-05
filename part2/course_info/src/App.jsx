const Header = ({title}) => {
    return (
        <h1>{title}</h1>
    )
}

const Part = ({title, exercises}) => {
    return (
        <p>{title} {exercises}</p>
    )
}

const Content = ({parts}) => {
    return (
        <>
            {parts.map((part) =>
                <Part
                    key={part.id}
                    title={part.title}
                    exercises={part.exercises}
                />)}
        </>
    )
}

const Total = ({parts}) => {
    const totalExercises = parts.reduce((accum, part) => accum + part.exercises, 0)
    return <h4>Total of {totalExercises} exercises</h4>
}

const Course = ({course}) => {
    return (
        <div>
            <Header title={course.title}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

const App = () => {
    const courses = [
        {
            title: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    title: 'Fundamentals of React',
                    exercises: 10,
                    id: 1,
                },
                {
                    title: 'Using props to pass data',
                    exercises: 7,
                    id: 2,
                },
                {
                    title: 'State of a component',
                    exercises: 14,
                    id: 3,
                },
                {
                    title: 'Redux',
                    exercises: 11,
                    id: 4,
                },
            ],
        },
        {
            title: 'Node.js',
            id: 2,
            parts: [
                {
                    title: 'Routing',
                    exercises: 3,
                    id: 1,
                },
                {
                    title: 'Middlewares',
                    exercises: 7,
                    id: 2,
                },
            ],
        },
    ]
    return (
        <>
            {courses.map((course) =>
                <Course key={course.id} course={course}/>
            )}
        </>
    )
}

export default App