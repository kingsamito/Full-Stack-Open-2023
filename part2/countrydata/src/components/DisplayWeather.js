import GetWeather from "./GetWeather"

const DisplayWeather = ({ country }) => {
    const weather = GetWeather(country = { country })
    console.log(weather)
  
    if (weather.length != 0) {
      return (
        <div>
          <p>Temperature in {country.country.capital} is {weather.main.temp} °C</p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
          <p>Wind {weather.wind.speed} m/s</p>
        </div>
      )
    }
  
  }

  export default DisplayWeather