import './App.css'
import { useState } from 'react'
import HourForecast from './components/HourForecast'
import CityInformation from './components/CityInformation'

const App = () => {
  // creating object of city information and city for input
  const [dataObject, setDataObject] = useState({})
  const [cityInput, setCityInput] = useState('')

  // creating simple language state and changing it using button later in code
  const [english, setLanguage] = useState(true)
  const handleLangChange = () => english ? setLanguage(false) : setLanguage(true)

  // handling button click - asynchronously fetching data from api url using city from input
  const handleBtnClick = async (event) => {
    try {
      event.preventDefault()
      const newCity = { cityInput }
      await fetch('http://127.0.0.1:4242/getCityInput', {
        method: 'POST',
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify(newCity)
      })

      const response = await fetch('http://127.0.0.1:4242/getForecast', {
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

  // handling input change and capitalizing first letter of inputted city for aesthetic purpose
  const handleCityChange = (event) => setCityInput(event.target.value)
  const capitalizeFirst = cityInput => {
    return cityInput.charAt(0).toUpperCase() + cityInput.slice(1)
  }

  // handling city clear button to clear city input and city information output
  const handleCityClear = () => {
    setCityInput('')
    setDataObject({})
  }

  return (
    <div className='content-wrapper'>
      <div className='top-wrapper'>
        {english &&
          <>
            <h1>Weather</h1>
            {Object.keys(dataObject).length === 0 && <button className='lang-btn' onClick={handleLangChange}>Русский</button>}
          </>
        }
        {!english &&
          <>
            <h1>Погода</h1>
            {Object.keys(dataObject).length === 0 && <button className='lang-btn' onClick={handleLangChange}>English</button>}
          </>
        }
      </div>

      <div className='input-wrapper'>
        {english && Object.keys(dataObject).length === 0 && <h2>Enter your city</h2>}
        {!english && Object.keys(dataObject).length === 0 && <h2>Введите Ваш город</h2>}

        {Object.keys(dataObject).length === 0 &&
          <form onSubmit={handleBtnClick}>
            <input value={cityInput} onChange={handleCityChange}></input>
          </form>
        }

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
          <CityInformation dataObject={dataObject} cityInput={cityInput} english={english} />
          <HourForecast dataObject={dataObject} english={english} />
        </div>
      }
    </div>
  )
}

export default App;