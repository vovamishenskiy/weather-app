const CityInformation = ({ dataObject, english }) => {
    const location = dataObject.location
    const current = dataObject.current

    if (english && (!location || !current)) alert('Specify city')
    if (!english && (!location || !current)) alert('Утоните город')

    return (
        <div className='styled-city-info'>
            {english && <h2>Location</h2>}
            {!english && <h2>Местоположение</h2>}
            <div className="info-card">
                <p className="info-card-text">{location.name}, {location.country}</p>
                {english && <p className="info-card-bottom">City</p>}
                {!english && <p className="info-card-bottom">Город</p>}
            </div>
            <div className="info-card">
                <span className="info-card-text">{location.localtime.slice(10)}, {location.localtime.slice(8, 10)}/{location.localtime.slice(5, 7)}/{location.localtime.slice(0, 4)}</span>
                {english && <p className="info-card-bottom">Current time</p>}
                {!english && <p className="info-card-bottom">Текущее время</p>}
            </div>
            <div className="info-card">
                <span className="info-card-text">{current.last_updated.slice(10)}, {current.last_updated.slice(8, 10)}/{current.last_updated.slice(5, 7)}/{current.last_updated.slice(0, 4)}</span>
                {english && <p className="info-card-bottom">Last updated</p>}
                {!english && <p className="info-card-bottom">Последнее обновление</p>}
            </div>

            {english && <h2>Current weather</h2>}
            {!english && <h2>Текущая погода</h2>}
            <div className="info-card">
                <span className="info-card-text">{current.temp_c}&deg;C</span>
                {english && <p className="info-card-bottom">Temperature</p>}
                {!english && <p className="info-card-bottom">Температура</p>}
            </div>
            <div className="info-card">
                <span className="info-card-text">{Math.floor(current.feelslike_c)} - {Math.ceil(current.feelslike_c)}&deg;C</span>
                {english && <p className="info-card-bottom">Feels like</p>}
                {!english && <p className="info-card-bottom">Ощущается как</p>}
            </div>
            <div className="info-card">
                <span className="info-card-text">{current.condition.text} <img src={current.condition.icon} alt={`${current.condition.text} icon`} width='48px'></img></span>
                {english && <p className="info-card-bottom">Conditions</p>}
                {!english && <p className="info-card-bottom">Условия</p>}
            </div>
            <div className="info-card">
                {english &&
                    <>
                        <span className="info-card-text">{current.wind_kph} km/h ({Math.ceil(0.277778 * current.wind_kph)} m/s), {current.wind_dir}</span>
                        <p className="info-card-bottom">Wind</p>
                    </>
                }
                {!english &&
                    <>
                        <span className="info-card-text">{current.wind_kph} км/ч ({Math.ceil(0.277778 * current.wind_kph)} м/с), {current.wind_dir}</span>
                        <p className="info-card-bottom">Ветер</p>
                    </>
                }
            </div>
            <div className="info-card">
                {english &&
                    <>
                        <span className="info-card-text">up to {current.gust_kph} km/h ({Math.ceil(0.277778 * current.gust_kph)} m/s)</span>
                        <p className="info-card-bottom">Wind gusts</p>
                    </>
                }
                {!english &&
                    <>
                        <span className="info-card-text">до {current.gust_kph} км/ч ({Math.ceil(0.277778 * current.gust_kph)} м/с)</span>
                        <p className="info-card-bottom">Порывы ветра</p>
                    </>
                }
            </div>
            <div className="info-card">
                {english &&
                    <>
                        <span className="info-card-text">{Math.ceil(current.pressure_mb * 0.75006)} mm Hg</span>
                        <p className="info-card-bottom">Pressure</p>
                    </>
                }
                {!english &&
                    <>
                        <span className="info-card-text">{Math.ceil(current.pressure_mb * 0.75006)} мм рт.ст.</span>
                        <p className="info-card-bottom">Атмосферное давление</p>
                    </>
                }
            </div>
            <div className="info-card">
                {english &&
                    <>
                        <span className="info-card-text">{current.vis_km} km</span>
                        <p className="info-card-bottom">Visibility</p>
                    </>
                }
                {!english &&
                    <>
                        <span className="info-card-text">{current.vis_km} км</span>
                        <p className="info-card-bottom">Видимость</p>
                    </>
                }
            </div>
        </div>
    )
}

export default CityInformation