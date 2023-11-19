import React, { createContext, useState, useEffect } from 'react';
import apiKey from '../../env';

const WeatherAppContext = createContext();

const WeatherAppProvider = ({ children }) => {
  const [citySearch, setCitySearch] = useState('')
  const [cityList, setCityList] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  
  
  useEffect(()=>{
    if(citySearch !== ''){
      const getCityList = async () => {
        try {

          setLoading(true)

          const response = await fetch(
            `http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${citySearch}&country=BR&token=${apiKey}`
          )
    
          if (!response.ok) {
            setErrorMessage('Erro ao obter dados meteorológicos');
          }
          
          const data = await response.json()
          
          if(data.length <= 20){
            setCityList(data)
          }
          
        } catch (error) {
          console.error(error)
    
        }finally{
          setLoading(false)
        }
      };
  
      getCityList()    
    }
    
    
  },[citySearch])
  



  return (
    <WeatherAppContext.Provider value={{ citySearch, setCitySearch, cityList, setCityList, errorMessage, loading}}>
      {children}
    </WeatherAppContext.Provider>
  );
};

export { WeatherAppProvider, WeatherAppContext };
