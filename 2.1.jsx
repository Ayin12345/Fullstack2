const Course = ({ course }) => {
    const parts = course.parts
    const Header = ({ course }) => <h1>{course.name}</h1>
    return (
        <div>
            <Header course={course} />
            {parts.map(part => 
                <p key={part.id}>
                    {part.name} {part.exercises}
                </p>    
            )}
        </div>
    )
}

export default Course