const CityInformation = ({ dataObject, cityInput }) => {
    const lat = /[а-яА-я]/gi
    let english = true
    if (cityInput.match(lat)) english = false

    const location = dataObject.location
    const current = dataObject.current

    if(english && (!location || !current)) alert('Specify city')
    if(!english && (!location || !current)) alert('Утоните город')

    return (
        <div>
            {english && location && 
                <div className='styled-city-info'>
                    <h2>Location</h2>
                    <p>{location.name}, {location.country}</p>
                    <p>Current time: {location.localtime.slice(10)}, {location.localtime.slice(8, 10)}/{location.localtime.slice(5, 7)}/{location.localtime.slice(0, 4)}</p>
                    <p>Last updated weather: {current.last_updated.slice(10)}, {current.last_updated.slice(8, 10)}/{current.last_updated.slice(5, 7)}/{current.last_updated.slice(0, 4)}</p>

                    <h2>Current weather</h2>
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
            }

            {!english && location &&
                <div className='styled-city-info'>
                    <h2>Местоположение</h2>
                    <p>{location.name}, {location.country}</p>
                    <p>Текущее время: {location.localtime.slice(10)}, {location.localtime.slice(8, 10)}/{location.localtime.slice(5, 7)}/{location.localtime.slice(0, 4)}</p>
                    <p>Время последнего обновления погоды: {current.last_updated.slice(10)}, {current.last_updated.slice(8, 10)}/{current.last_updated.slice(5, 7)}/{current.last_updated.slice(0, 4)}</p>

                    <h2>Текущая погода</h2>
                    <p>Температура: {current.temp_c}&deg;C</p>
                    <p>Ощущается как: {Math.floor(current.feelslike_c)} - {Math.ceil(current.feelslike_c)}&deg;C</p>

                    <div className='condition-wrapper'>
                        <span>Условия: {current.condition.text}</span>
                        <img src={current.condition.icon} alt={`${current.condition.text} icon`}></img>
                    </div>

                    <p>Ветер: {current.wind_kph} км/ч ({Math.ceil(0.277778 * current.wind_kph)} м/с), {current.wind_dir}</p>
                    <p>Порывы ветра: до {current.gust_kph} км/ч ({Math.ceil(0.277778 * current.gust_kph)} м/с)</p>
                    <p>Атмосферное давление: {Math.ceil(current.pressure_mb * 0.75006)} мм рт.ст.</p>
                    <p>Видимость: {current.vis_km} км</p>
                </div>
            }
        </div>
    )
}

export default CityInformation