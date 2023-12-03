import React, { useContext } from 'react';
import './styles.css'; 
import { WeatherAppContext } from "../../Contexts/WeatherApp";


import SearchBar from "../SearchBar";
import Loading from '../Loading';
import WeatherInfo from '../WeatherInfo';
import CityList from '../CityList';



const WeatherApp = () => {
    const {cityList, loading, weatherData} = useContext(WeatherAppContext)

    return (
        <div>
            <SearchBar/>
            {loading? <Loading/>: null}
            {cityList? <CityList/> : null}
            {weatherData? <WeatherInfo/> : null}
            
        </div>
    );
}

export default WeatherApp;
