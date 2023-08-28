import Carousel from 'react-grid-carousel'

const HourForecast = ({ dataObject }) => {
    const forecast = dataObject.forecast
    
    return (
        <div className='hour-forecast-info'>
            <Carousel cols={6} rows={1} scrollSnap={true}>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[0].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[0].condition.icon} alt={forecast.forecastday[0].hour[0].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[0].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[1].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[1].condition.icon} alt={forecast.forecastday[0].hour[1].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[1].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[2].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[2].condition.icon} alt={forecast.forecastday[0].hour[2].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[2].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[3].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[3].condition.icon} alt={forecast.forecastday[0].hour[3].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[3].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[4].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[4].condition.icon} alt={forecast.forecastday[0].hour[4].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[4].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[5].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[5].condition.icon} alt={forecast.forecastday[0].hour[5].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[5].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[6].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[6].condition.icon} alt={forecast.forecastday[0].hour[6].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[6].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[7].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[7].condition.icon} alt={forecast.forecastday[0].hour[7].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[7].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[8].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[8].condition.icon} alt={forecast.forecastday[0].hour[8].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[8].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[9].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[9].condition.icon} alt={forecast.forecastday[0].hour[9].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[9].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[10].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[10].condition.icon} alt={forecast.forecastday[0].hour[10].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[10].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[11].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[11].condition.icon} alt={forecast.forecastday[0].hour[11].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[11].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[12].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[12].condition.icon} alt={forecast.forecastday[0].hour[12].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[12].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[13].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[13].condition.icon} alt={forecast.forecastday[0].hour[13].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[13].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[14].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[14].condition.icon} alt={forecast.forecastday[0].hour[14].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[14].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[15].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[15].condition.icon} alt={forecast.forecastday[0].hour[15].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[15].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[16].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[16].condition.icon} alt={forecast.forecastday[0].hour[16].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[16].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[17].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[17].condition.icon} alt={forecast.forecastday[0].hour[17].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[17].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[18].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[18].condition.icon} alt={forecast.forecastday[0].hour[18].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[18].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[19].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[19].condition.icon} alt={forecast.forecastday[0].hour[19].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[19].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[20].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[20].condition.icon} alt={forecast.forecastday[0].hour[20].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[20].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[21].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[21].condition.icon} alt={forecast.forecastday[0].hour[21].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[21].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[22].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[22].condition.icon} alt={forecast.forecastday[0].hour[22].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[22].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='hour-forecast-card'>
                        <div className='hour-forecast-card-temp'><span>{Math.ceil(forecast.forecastday[0].hour[23].temp_c)}&deg;C</span></div>
                        <img className='hour-forecast-card-icon' src={forecast.forecastday[0].hour[23].condition.icon} alt={forecast.forecastday[0].hour[23].condition.text}></img>
                        <div className='hour-forecast-card-hour'><span>{forecast.forecastday[0].hour[23].time.slice(10, 13)}</span></div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HourForecast