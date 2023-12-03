import React, { useContext } from "react";
import './styles.css';
import { WeatherAppContext } from "../../Contexts/WeatherApp";
import WeatherCard from "../WeatherCard";

const WeatherInfo = ()=>{
    const {weatherData} = useContext(WeatherAppContext)
    return(
        <>
            <div>
                <h2> {weatherData.name} </h2>
                <h3>{weatherData.state}</h3>
                <h3>{weatherData.country}</h3>
            </div>
            {
                weatherData.data.map((timestamp)=>(
                    <WeatherCard 
                        key = {timestamp.date}
                        data = {timestamp} 
                    />
                ))
            }
        </>
    )

}

export default WeatherInfo