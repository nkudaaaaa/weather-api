
import PropTypes from 'prop-types'

const WeatherCard = (props) => {
    const url = `https:${props.icon}`

    return (
        <div className="weather-card">
            <div className="weather-body">
                <div className="span-div">
                    <span className='wcard-header'>{props.city.toUpperCase()}</span>
                    <hr className='horisontal-line'/>
                    <ul className="list">
                        <li>temp - {props.temperature}°C</li>
                        <li className='absolute-li'>feels like {props.feelslike}°C</li>
                        <li className='absolute-li'>wind - {props.wind} mph</li>
                        <li className='absolute-li'>humidity - {props.humidity}%</li>
                    </ul>
                <span className='goodbye-span'>have a nice day! <a href="https://github.com/nkudaaaaa">nkudaaaaa </a>prod.</span>
                </div>
            </div>
            <div className='aside-div'>
                <img src={url} alt="" className='icon'/>
                <span className='wcard-sign'> {props.text}</span>
            </div>
        </div>
    )
}

WeatherCard.propTypes = {
    temperature: PropTypes.number.isRequired, 
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
    feelslike: PropTypes.string.isRequired,
    humidity: PropTypes.string.isRequired,
};

export default WeatherCard;