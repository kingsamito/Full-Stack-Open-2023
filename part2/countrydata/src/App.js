import { React, useState, useEffect } from 'react'
import Filter from "./components/Filter";
import axios from "axios"
import ShowCountry from './components/ShowCountry';



const CountryElement = ({ country, setFilterText }) => {
  return (
    <div>
      {country.name.common}
      <button onClick={() => { setFilterText(country.name.common) }}>show</button>
    </div>
  )
}








const Country = ({ countries, filterText, setFilterText }) => {
  const filteredCountries = countries
    .filter(country => country.name.common.toLowerCase()
      .includes(filterText.toLowerCase()))

  if (filterText === "") {
    return <p>Enter a filter</p>
  }

  if (filteredCountries.length === 1) {
    return <ShowCountry country={filteredCountries[0]} />
  }

  if (filteredCountries.length < 10) {
    return (
      <div>
        {filteredCountries.map(country => <CountryElement country={country} setFilterText={setFilterText} />)}
      </div>

    )
  }

  return <p>Too many matches</p>
}

function App() {

  const [countries, setCountries] = useState([])
  const [filterText, setFilterText] = useState('')
  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response => setCountries(response.data))
  }, [])


  const handleChange = (e) => setFilterText(e.target.value)

  return (
    <div>
      <Filter name={countries} onChange={handleChange} />
      <Country countries={countries} filterText={filterText} setFilterText={setFilterText} />
    </div>
  );
}

export default App;
