import React, { useContext } from 'react';
import './styles.css'; 
import { WeatherAppContext } from "../../Contexts/WeatherApp";


import SearchBar from "../SearchBar";
import CityCard from '../CityCard';
import Loading from '../Loading';



const WeatherApp = () => {
    const {cityList, loading} = useContext(WeatherAppContext)

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
            
            
        </div>
    );
}

export default WeatherApp;
