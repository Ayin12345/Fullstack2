const Course = ({ course }) => {
    const parts = course.parts
    const Header = ({ course }) => <h1>{course.name}</h1>
    let totalNumbers = 0
    parts.map(number => totalNumbers += number.exercises)
    return (
        <div>
            <Header course={course} />
            {parts.map(part => 
                <p key={part.id}>
                    {part.name} {part.exercises}
                </p>    
            )}
            <p>{totalNumbers}</p>
        </div>
    )
}

export default Course