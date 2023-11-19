import React, { useContext, useState } from "react";
import './styles.css';
import { WeatherAppContext } from "../../Contexts/WeatherApp";

const CityList = () => {
    const {setCitySearch} = useContext(WeatherAppContext)
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event)=>{
        setInputValue(event.target.value)
    }

    const updateCitySearch = (event)=>{
        event.preventDefault();
        if(inputValue.length >= 3){
            setCitySearch(inputValue)
        }
    }

    return (
        <div>
            <form onSubmit={updateCitySearch}>
                <input type="text" onChange={handleInputChange}/>
                <button type="submit">Search</button>
            </form>
            
        </div>
    );
}

export default CityList
