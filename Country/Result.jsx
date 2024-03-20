import React from 'react';

const Result = ({ countriesToShow, handleClick }) => {
    if (countriesToShow.length <= 10) {
        return (
            <div>
                {countriesToShow.map(country => (
                    <div key={country.name}>
                        {country.name.common}<button type="button" name={country.name.common} onClick={handleClick}>Show</button>
                    </div>
                ))}
            </div>
        )
    } else {
        return <p>Not specific enough</p>
    }
}

export default Result;