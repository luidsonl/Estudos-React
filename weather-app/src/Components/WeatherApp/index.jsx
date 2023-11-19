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
            {loading ? (<Loading/>):
            (
                cityList.map(city=>(
                    <CityCard 
                        key = {city.id}
                        id = {city.id}
                        name={city.name}
                        state={city.state}
                    />
                ))
            )}
            
        </div>
    );
}

export default WeatherApp;
