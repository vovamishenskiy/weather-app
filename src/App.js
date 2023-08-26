import { object } from 'prop-types';
import './App.css';
import { useState } from 'react'
import env from 'react-dotenv'

const App = () => {
  // creating array of city information and city for input
  const [dataObject, setDataObject] = useState([])
  const [city, setCity] = useState('')

  // handling input change and capitalizing first letter of inputted city for aesthetic purpose
  const handleCityChange = (event) => setCity(event.target.value)
  const capitalizeFirst = city => {
    return city.charAt(0).toUpperCase() + city.slice(1)
  }

  // handling button click - asynchronously fetching data from api url using city from input
  const handleBtnClick = async () => {
    try {
      const response = await fetch(`${env.BASE_URL}/current.json?key=${env.KEY}&q=${city}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })

      // turning request response into json 
      const res = await response.json()

      // setting city information array with json'ed response
      setDataObject(res)
    } catch (err) { console.log(err) }
  }

  // handling city clear button to clear city input and city information output
  const handleCityClear = () => {
    setCity('')
    setDataObject([])
  }

  let dataArray = []
  const getCityInfo = dataObject => {
    // await dataObject
    if(dataObject) dataArray.concat(dataObject)
  }
  getCityInfo(dataObject)
  console.log(dataArray[0])
  console.log(typeof(dataArray))

  return (
    <div>
      <input value={city} onChange={handleCityChange}></input> <button onClick={handleBtnClick}>get</button><button onClick={handleCityClear}>clear</button>
      <p>{capitalizeFirst(city)}</p>

      {/* checking if array of city information contains something and outputting it */}
      {/* {dataObject.length !== 0 &&
        <div><pre>{JSON.stringify(dataObject, null, 4)}</pre></div>
      } */}
      <div></div>
    </div>

  )
}

export default App;