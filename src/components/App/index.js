
import CityWeather from '../CityWeather';
import './style.scss';

function App() {
  const listCity = [
    {
      name: "Paris",
      code: 75000,
    },
    {
      name: "Lyon",
      code: 69000,
    },
    {
      name: "Marseilles",
      code: 13000,
    },
    {
      name: "Saint-Cyr-L'École",
      code: 78210,
    }
  ]
  return (
    <div className="weather-widget">
      {
        listCity.map((city) => (

          <CityWeather 
            key={city.code} 
            cityName={city.name} 
            cityCode={city.code} 
          />
        )
      )
      }
      
    </div>
  );
}

export default App;
