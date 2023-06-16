import axios from "axios"
import { useEffect, useState } from "react"

const GetWeather = ({ country }) => {
    const [weather, setWeather] = useState([])
  
    useEffect(() => {
      const api_key = process.env.REACT_APP_API_KEY
  
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`)
        .then(response => {
          setWeather(response.data)
        })
    }, [])
  
    return weather
  }

  
  export default GetWeather