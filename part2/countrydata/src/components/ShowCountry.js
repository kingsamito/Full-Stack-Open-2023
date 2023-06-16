import DisplayWeather from "./DisplayWeather"
import Flag from "./Flag"
import Languages from "./Languages"


const ShowCountry = ({country}) => {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital {country.capital}</p>
        <p>Area {country.area} km^2</p>
        <h3>Languages:</h3>
        <Languages country={country} />
        <Flag country={country} />
        <h2>Weather in {country.capital}</h2>
        <DisplayWeather country={country} />
      </div>
    )
  }

  export default ShowCountry