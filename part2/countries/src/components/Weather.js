import { useState, useEffect } from 'react'
import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY

const Weather = ({capital}) => {
    const [cityWeather, setCityWeather] = useState([])
    useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
      .then(response => {
        setCityWeather(response.data)
      })
    }, [])

    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p>Temperature {cityWeather.current?.temperature} Celcius</p>
            <img src={cityWeather.current?.weather_icons} alt="weather"/>
            <p>Wind {cityWeather.current?.wind_speed} m/s</p>
        </div>
    )
   
}

export default Weather