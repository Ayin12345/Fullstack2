import React, { useState, useEffect } from 'react';
import countryService from './services/capitals';
import './index.css';
import Country from './components/Country'

const App = () => {
const [country, setCountries] = useState([])
const [newCountry, setNewCountries] = useState([])

    useEffect(() => {
        countryService
            .getAll()
            .then(countries => {
                setCountries(countries)
            })
    })

    const handleInput = (event) => {
        const newValues = []
        let counter = 0
        country.map(place => {
            if (place.name.common.toLowerCase().includes(event.target.value.toLowerCase())) {
                counter++
                newValues.push(place)
            }
        })
        if (counter > 10) {
            setNewCountries(["Too many matches"])
        } else {
            setNewCountries(newValues)
        }
    }

    return (
        <div>
            find countries <input
                onChange={handleInput} />
            <ul>
                <Country country={country} newCountry={newCountry}/>
            </ul>
        </div>
    )
}

export default App