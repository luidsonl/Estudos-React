import React from "react"
import './styles.css';

const WeatherCard = ({data})=>{
    console.log(data)
    const {date, temp, description, wind_speed} = data
    return(
        <div className="weather-card">
            <div>Data:{date}</div>
            <div>{description}</div>
            <div>Temperatura: {temp}ºC </div>
            <div>Velocidade do vento: {wind_speed} m/s</div>
        </div>
    )
}

export default WeatherCard