import './App.css';
import { useState } from 'react'
import env from 'react-dotenv'

const baseUrl = 'http://api.weatherapi.com/v1'

const App = () => {
  const [dataArray, setDataArray] = useState([])
  const [city, setCity] = useState('')

  const handleCityChange = (event) => setCity(event.target.value)
  const capitalizeFirst = city => {
    return city.charAt(0).toUpperCase() + city.slice(1)
  }


  const handleBtnClick = async () => {
    try {
      const response = await fetch(`${baseUrl}/current.json?key=${env.KEY}&q=${city}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })

      const res = await response.json()

      // console.log(`res is: ${JSON.stringify(res, null, 4)}`)

      setDataArray(res)
    } catch (err) { console.log(err) }
  }

  const handleCityClear = () => {
    setCity('')
    setDataArray([])
  }

  return (
    <div>
      <input value={city} onChange={handleCityChange}></input> <button onClick={handleBtnClick}>get</button><button onClick={handleCityClear}>clear</button>
      <p>{capitalizeFirst(city)}</p>
      {dataArray.length !== 0 &&
        <div><pre>{JSON.stringify(dataArray, null, 4)}</pre></div>
      }
    </div>

  )
}

export default App;

  // useEffect(() => {
  //   const weatherData = async () => {
  //     await axios.get(`${baseUrl}/current.json?key=${key}&q=${city}`).then(res => setDataArray(res.data))
  //   }
  //   weatherData()
  // }, [])

  // console.log(dataArray)