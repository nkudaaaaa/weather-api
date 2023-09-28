import { useState } from 'react';
import search from './assets/search.svg';
import WeatherCard from './WeatherCard';

import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(
    {
      city: '',
      weatherText: '',
      temperature: '',
      feelslike_c: '',
      wind_mph: '',
      humidity: '',
      icon: '',
    }
  );
 
  const [isFetched, setIsFetched] = useState(false);


  const handleInput = e => {
    setInput(e.target.value);
    if (input.length === 0) {
      setIsFetched(false);
    }
  };

  const API_KEY = '2b6b152b025849dc9bc55706232809';

  const handleFetch = () => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${input.toLowerCase()}&aqi=no`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => {
        if (result && result.current) {
          const location = result.current;
          setWeatherInfo({
            ...weatherInfo,
            city: result.location.name,
            weatherText: location.condition.text,
            temperature: location.temp_c,
            feelslike_c: location.feelslike_c,
            wind_mph: location.wind_mph,
            humidity: location.humidity,
            icon: location.condition.icon,
          });
          setIsFetched(true);
          

        } else {
          console.error("Поле location не найдено в результате промиса.");
        }
      }).catch((error) => {
        console.error("Произошла ошибка при обработке промиса:", error);
      });

  }
  return (
    <>
      <div className="main">
        <div className="input-div">
          <img src={search} alt="" id='search-logo' />
          <input
            type="text"
            name="city"
            id="city-input"
            placeholder='input city...'
            value={input}
            onChange={handleInput}
          />
          <hr className='horis-line' />
        </div>
        <div className="button-div">
          <button className='button' onClick={handleFetch}>search weather</button>
        </div>
      </div>
      { isFetched && 
        <WeatherCard 
          city={weatherInfo.city} 
          text={weatherInfo.weatherText.toString()}
          temperature={weatherInfo.temperature}
          icon={weatherInfo.icon}
          feelslike={weatherInfo.feelslike_c}
          wind={weatherInfo.wind_mph}
          humidity={weatherInfo.humidity}
        />
    }
    </>
  );
}

export default App;
