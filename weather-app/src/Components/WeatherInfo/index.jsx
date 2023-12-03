import React, { useContext } from "react";
import './styles.css';
import { WeatherAppContext } from "../../Contexts/WeatherApp";
import WeatherCard from "../WeatherCard";

const WeatherInfo = ()=>{
    const {weatherData} = useContext(WeatherAppContext)
    return(
        <>
            <div className="city-info">
                <h2> {weatherData.name} </h2>
                <h3>{weatherData.state}</h3>
                <h3>{weatherData.country}</h3>
            </div>
            <div className="forecast">
            {
                weatherData.data.map((timestamp)=>(
                    <WeatherCard 
                        key = {timestamp.date}
                        data = {timestamp} 
                    />
                ))
            }
            </div>
           
        </>
    )

}

export default WeatherInfo