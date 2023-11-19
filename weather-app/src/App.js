import WeatherApp from './Components/WeatherApp';
import { WeatherAppProvider } from './Contexts/WeatherApp';

function App() {
  return (
    <div className="App">
      <WeatherAppProvider>
        <WeatherApp/>
      </WeatherAppProvider>
      
    </div>
  );
}

export default App;
