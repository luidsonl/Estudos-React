import React, { useContext } from 'react';
import './styles.css'; 
import { WeatherAppContext } from "../../Contexts/WeatherApp";


import SearchBar from "../SearchBar";
import CityCard from '../CityCard';
import Loading from '../Loading';
import WeatherInfo from '../WeatherInfo';



const WeatherApp = () => {
    const {cityList, loading, weatherData} = useContext(WeatherAppContext)

    return (
        <div>
            <SearchBar/>
            {loading? <Loading/>: null}
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
            {weatherData? <WeatherInfo/> : null}
            
        </div>
    );
}

export default WeatherApp;
