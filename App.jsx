import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import Result from './Result';
import Country from './Country';

const App = () => {
    const [ search, setSearch ] = useState('');
    const [ countries, setCountries ] = useState([]);
    const [ weather, setWeather ] = useState({});
    const WEATHER_API_KEY = import.meta.env.VITE_SOME_KEY || '';
    let checked = 0

    useEffect(() => {
        axios
            .get('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then(response => {
                setCountries(response.data);
            })
    }, [])

    useEffect(() => {
        checked = 1
        const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));
        if (countriesToShow.length === 1) {
            const country = countriesToShow[0]
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country["capitalInfo"]["latlng"][0]}&lon=${country["capitalInfo"]["latlng"][1]}&units=metric&APPID=${WEATHER_API_KEY}`)
                .then(response => {
                    setWeather(response);
                })
        }
    }, [countries, search])

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        setSearch(event.target.name);
    }
    const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));
    console.log("1")
    return (
        <div>
            <Search search={search} handleChange={handleChange} />
            {countriesToShow.length !== 1 ? <Result countriesToShow={countriesToShow} handleClick={handleClick} /> : <Country country={countriesToShow[0]} weather={weather} />}
        </div>
    )

}

export default App;