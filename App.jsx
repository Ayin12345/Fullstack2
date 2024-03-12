import React, { useState, useEffect } from 'react';
import countryService from './services/capitals';
import './index.css';

const App = () => {
const [country, setCountries] = useState([])

    useEffect(() => {
        countryService
            .getAll()
            .then(countries => {
                setCountries(countries)
            })
    })

    return (
        <div>
            find countries <input></input>
            <ul>
                {country.map(place => 
                    <li>{place.name.common}</li>
                )}
            </ul>
        </div>
    )
}

export default App