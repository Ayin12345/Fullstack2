import React from 'react';
const Details = ({country}) => {
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages</h3>
            <ul>
            {Object.keys(country.languages).map(item =>
                <li key={item}>{country.languages[item]}</li>
            )}
            </ul>
            <img src={country.flags.png} alt="country flag" width="300vw"/>
        </div>
    )
}

export default Details;
