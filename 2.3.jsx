const Course = ({ course }) => {
    const parts = course.parts
    const Header = ({ course }) => <h1>{course.name}</h1>
    const sumWithInitial = parts.reduce(getSum, 0);

    function getSum(total, num) {
        return total + num.exercises
    }
    return (
        <div>
            <Header course={course} />
            {parts.map(part => 
                <p key={part.id}>
                    {part.name} {part.exercises}
                </p>    
            )}
            <p>{sumWithInitial}</p>
        </div>
    )
}

export default Course