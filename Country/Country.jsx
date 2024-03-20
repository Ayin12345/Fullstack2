import React from 'react';
import Details from './Details';
import Weather from './Weather';

const Country = ({ country, weather }) => {
    return (
        <div>
            <Details country={country} />
            <Weather country={country} weather={weather} />
        </div>
    )
}

export default Country;
