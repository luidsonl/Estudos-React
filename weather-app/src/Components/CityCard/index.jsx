import React, { useContext } from "react";
import './styles.css';
import { WeatherAppContext } from "../../Contexts/WeatherApp";



const CityCard = ({name, state, country,lat, lon }) => {
    const handleClick = ()=>{
        getForecast(name, state, country, lat, lon)
    }


    const {getForecast} = useContext(WeatherAppContext)

    return (
        <div onClick={()=>{handleClick()}} className="card">
            <h2>{name}</h2>
            <p>{state}</p>
            <p>{country}</p>
        </div>
    );
}

export default CityCard
