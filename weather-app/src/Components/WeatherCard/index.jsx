import React from "react"
import './styles.css';

const WeatherCard = ({data})=>{
    
    const {date, temp, description, wind_speed} = data
    return(
        <div className="weather-card">
            <div className="weather-card-data">Data: <span className="weather-card-data-value"> {date}</span></div>
            <div className="weather-card-data"> <span className="weather-card-data-value"> {description} </span> </div>
            <div className="weather-card-data">  Temperatura: <span className="weather-card-data-value"> {temp}ºC </span> </div>
            <div className="weather-card-data">Velocidade do vento: <span className="weather-card-data-value"> {wind_speed} m/s </span></div>
        </div>
    )
}

export default WeatherCard