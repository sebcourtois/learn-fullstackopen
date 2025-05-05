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

export default Course