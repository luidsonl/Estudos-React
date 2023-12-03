import React, { useContext } from 'react';
import './styles.css'; 
import { WeatherAppContext } from "../../Contexts/WeatherApp";
import CityCard from '../CityCard';


const CityList = ()=>{
    const {cityList} = useContext(WeatherAppContext)
    
    return (
        <div className='city-list'>
            {
                cityList.map(city=>(
                    <CityCard 
                        key = {city.lat + ',' + city.lon}
                        name={city.name}
                        state={city.state}
                        country={city.country}
                        lat = {city.lat}
                        lon = {city.lon}
                    />
                ))
            }
        </div>
    )
}

export default CityList