import React from 'react';

const Weather = ({ country, weather }) => {
    console.log(weather)
        return (
            <div>
                <h3>Weather in {country.capital}</h3>
                <p>Temperature: {weather["main"]["temp"]}°C</p>
                <img src={iconUrl} alt={props.weather["weather"]["description"]}/>
                <p>wind {props.weather["wind"]["speed"]} m/s</p>
            </div>
        )
}

export default Weather;