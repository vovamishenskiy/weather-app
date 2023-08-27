import './App.css';
import { useState } from 'react'
import env from 'react-dotenv'

const App = () => {
  // creating object of city information and city for input
  const [dataObject, setDataObject] = useState({})
  const [cityInput, setCityInput] = useState('')

  // handling input change and capitalizing first letter of inputted city for aesthetic purpose
  const handleCityChange = (event) => setCityInput(event.target.value)
  const capitalizeFirst = cityInput => {
    return cityInput.charAt(0).toUpperCase() + cityInput.slice(1)
  }

  // handling button click - asynchronously fetching data from api url using city from input
  const handleBtnClick = async () => {
    try {
      const response = await fetch(`${env.BASE_URL}/current.json?key=${env.KEY}&q=${cityInput}`, { // TODO: language choice and translation of elements based on chosen language
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })

      // turning request response into json 
      const res = await response.json()

      // setting city information object with json'ed response
      setDataObject(res)

      console.log(res.location.name, res.location.country, res.location.localtime, res.current.temp_c)
    } catch (err) { console.log(err) }
  }

  // handling city clear button to clear city input and city information output
  const handleCityClear = () => {
    setCityInput('')
    setDataObject({})
  }

  const location = dataObject.location
  const current = dataObject.current

  return (
    <div>
      <input value={cityInput} onChange={handleCityChange}></input> <button onClick={handleBtnClick}>get</button><button onClick={handleCityClear}>clear</button>

      {/* checking if city information object doesn't have values to output city input */}
      {Object.keys(dataObject).length === 0 &&
        <p>{capitalizeFirst(cityInput)}</p>
      }

      {/* checking if city information object has values and outputting it */}
      {Object.keys(dataObject).length !== 0 &&
        <div className='city-info-wrapper'>
          <pre>{JSON.stringify(dataObject, null, 3)}</pre>
          <div className='styled-city-info'>
            <h2>Location</h2>
            <p>{location.name}, {location.country}</p>
            <p>Current time: {location.localtime}</p>
            <p>Last updated weather: {current.last_updated}</p>
            <h2>Current weather:</h2>
            <p>Temperature: {current.temp_c}&deg;C</p>
            <p>Feels like: {Math.floor(current.feelslike_c)} - {Math.ceil(current.feelslike_c)}&deg;C</p>
            <div className='condition-wrapper'>
              <span>Condition: {current.condition.text}</span>
              <img src={current.condition.icon} alt={`${current.condition.text} icon`}></img>
            </div>
            <p>Wind: {current.wind_kph} km/h ({Math.ceil(0.277778 * current.wind_kph)} m/s), {current.wind_dir}</p>
            <p>Wind gusts: up to {current.gust_kph} km/h ({Math.ceil(0.277778 * current.gust_kph)} m/s)</p>
            <p>Pressure: {Math.ceil(current.pressure_mb * 0.75006)} mm Hg</p>
            <p>Visibility: {current.vis_km} km</p>
          </div>
        </div>
      }
      <div></div>
    </div>

  )
}

export default App;