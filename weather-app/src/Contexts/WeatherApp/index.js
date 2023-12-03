import React, { createContext, useState, useEffect } from 'react';
import apiKey from '../../env';

const WeatherAppContext = createContext();

const WeatherAppProvider = ({ children }) => {
  const [citySearch, setCitySearch] = useState('')
  const [cityList, setCityList] = useState([])
  const [weatherData, setWeatherData]= useState()

  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  
  
  useEffect(()=>{
    if(citySearch !== ''){
      const getCityList = async () => {
        try {

          setLoading(true)

          const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${citySearch},br&limit=5&appid=${apiKey}`
          )
    
          if (!response.ok) {
            setErrorMessage('Erro ao buscar cidade');
          }
          
          let data = await response.json()

          if(data.length >= 10){
            data = data.slice(0, 10)
          }
          

          setCityList(data)
          
        } catch (error) {
          console.error(error)
    
        }finally{
          setLoading(false)
        }
      };
  
      getCityList()    
    }
    
    
  },[citySearch])
  
  const getForecast = async (...params)=>{
    const [name, state, country, lat, lon] = params
    
    try{

      setLoading(true)

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`
      )

      if (!response.ok) {
        setErrorMessage('Erro ao obter previsão do tempo');
      }

      const data = await response.json()

      setWeatherData({
        'name': name,
        'state': state,
        'country': country,
        'data': data.list.map(
          (timestamp)=>{
            return {
              date: timestamp.dt_txt,
              temp: timestamp.main.temp,
              description: timestamp.weather[0].description,
              wind_speed: timestamp.wind.speed
            }
          }
        )
      })
      console.log(weatherData)

      setCityList([])

    }catch(error){
      console.error(error)
    }finally{
      setLoading(false)
    }
  }


  return (
    <WeatherAppContext.Provider value={{ citySearch, cityList,weatherData, setCitySearch, setCityList, setWeatherData, errorMessage, loading, getForecast}}>
      {children}
    </WeatherAppContext.Provider>
  );
};

export { WeatherAppProvider, WeatherAppContext };
