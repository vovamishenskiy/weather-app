import { useEffect } from 'react'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const HourForecast = ({ dataObject, english }) => {
    const forecast = dataObject.forecast
    const headerStyle = {
        textAlign: 'center',
        paddingBottom: '16px',
    }

    useEffect(() => {
        new Swiper('.swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 0,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
    }, [])

    return (
        <div className='hour-forecast-info'>
            <>
                {english && <h2 style={headerStyle}>Hourly forecast</h2>}
                {!english && <h2 style={headerStyle}>Почасовая погода</h2>}
                <div className='swiper'>
                    <div className='swiper-wrapper'>
                        {
                            forecast.forecastday[0].hour.map((hour, index) => (
                                <div className='swiper-slide' key={index}>
                                    <div className='hour-forecast-card'>
                                        <div className='hour-forecast-card-temp'><span>{Math.ceil(hour.temp_c)}&deg;C</span></div>
                                        <img className='hour-forecast-card-icon' src={hour.condition.icon} alt={hour.condition.text}></img>
                                        <div className='hour-forecast-card-hour'><span>{hour.time.slice(10, 13)}</span></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </>
        </div>
    )
}

export default HourForecast