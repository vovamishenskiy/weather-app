import './App.css'
import env from 'react-dotenv'
import { useState } from 'react'
import HourForecast from './components/HourForecast'
import CityInformation from './components/CityInformation'

const App = () => {
  // creating object of city information and city for input
  const [dataObject, setDataObject] = useState({})
  const [cityInput, setCityInput] = useState('')
  // TODO: language choice button and output app in selected language
  const lat = /[а-яА-я]/gi
  let english = true
  if (cityInput.match(lat)) english = false

  // handling input change and capitalizing first letter of inputted city for aesthetic purpose
  const handleCityChange = (event) => setCityInput(event.target.value)
  const capitalizeFirst = cityInput => {
    return cityInput.charAt(0).toUpperCase() + cityInput.slice(1)
  }

  // handling button click - asynchronously fetching data from api url using city from input
  const handleBtnClick = async () => {
    try {
      const response = await fetch(`${env.BASE_URL}/forecast.json?key=${env.KEY}&q=${cityInput}`, { // TODO: language choice and translation of elements based on chosen language
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })

      // checking response status, if 400 then alert user that there's an error in input and abort further actions to avoid errors
      if (response.status === 400 & english) return alert('Specify city')
      if (response.status === 400 & !english) return alert('Укажите город')

      // turning request response into json 
      const res = await response.json()

      // setting city information object with json'ed response
      setDataObject(res)
    } catch (err) { console.log(err) }
  }

  // handling city clear button to clear city input and city information output
  const handleCityClear = () => {
    setCityInput('')
    setDataObject({})
  }

  return (
    <div className='content-wrapper'>
      <h1>Weather</h1>
      <div className='input-wrapper'>
        {english && Object.keys(dataObject).length === 0 && <h2>Enter your city</h2>}
        {!english && Object.keys(dataObject).length === 0 && <h2>Введите Ваш город</h2>}
        {Object.keys(dataObject).length === 0 && <input value={cityInput} onChange={handleCityChange}></input>}
        {cityInput && english &&
          <div className='input-button-group'>
            {Object.keys(dataObject).length === 0 &&
              <button onClick={handleBtnClick}>get</button>
            }
            <button onClick={handleCityClear}>clear</button>
          </div>
        }

        {cityInput && !english &&
          <div className='input-button-group russian'>
            {Object.keys(dataObject).length === 0 &&
              <button onClick={handleBtnClick}>получить</button>
            }
            <button onClick={handleCityClear}>очистить</button>
          </div>
        }
      </div>

      {/* checking if city information object doesn't have values to output city input */}
      {Object.keys(dataObject).length === 0 &&
        <p>{capitalizeFirst(cityInput)}</p>
      }

      {/* checking if city information object has values and outputting it */}
      {Object.keys(dataObject).length !== 0 &&
        <div className='city-info-wrapper'>
          {/* <pre>{JSON.stringify(dataObject, null, 3)}</pre> */}
          <CityInformation dataObject={dataObject} cityInput={cityInput} />
          <HourForecast dataObject={dataObject} />
        </div>
      }
    </div>
  )
}

export default App;