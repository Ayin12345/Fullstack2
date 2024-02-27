const Course = ({ courses }) => {

    function getSum(total, num) {
        return total + num.exercises
    }
    return (
        <div>
            {courses.map(parts1 =>
            <div>
                <h1 key={parts1.id}>{parts1.name}</h1>   
                {parts1.parts.map(part => 
                    <p key={part.id}>
                        {part.name} {part.exercises}
                    </p>    
                )}
                <b>total of {parts1.parts.reduce(getSum, 0)} exercises</b>
            </div>
            )}
        </div>
    )
}

export default Course