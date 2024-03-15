import React from 'react';

const Country = (props) => {
    if (props.newCountry[0] == "Too many matches") {
        return (
            <div>
                <p>{props.newCountry[0]}</p>
            </div>
        )
    } else if (props.newCountry.length === 1 ) {
        const place = props.newCountry[0]
        return (
            <div>
                <h2>{place.name.common}</h2>
                <p>Capital {place.capital}</p>
                <p>Area {place.area}</p>
                Languages:
                <ul>
                    {Object.keys(place.languages).map((key) =>
                        <li>{place.languages[key]}</li>
                    )}
                </ul>
                <br></br>
                <img src={place.flags.png} alt={place.flags.alt}></img>
            </div>
        )
    } else {
        return (
            <div>
                <ul>
                    {props.newCountry.map((item) => <li>{item.name.common}</li>)}
                </ul>
            </div>
        )
    }
}

export default Country;