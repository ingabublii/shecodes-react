import React from "react";
import "./Weather.css";

export default function Weather() {
    let weatherData = {
        city: "Kyiv",
        currentDayTime: "Wednesday, 1 May, 12:10",
        currentTemperature: "23",
        condition: "clear sky",
        windspeed: "4",
        humidity: "50%",
        imgUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" 
    };
    return (
        <div className="weather">
            <h1 className="weather-city">{weatherData.city}</h1>
            <p>{weatherData.currentDayTime}</p>
            <div className="weather-app-container">
                <div className="temperature-container">
                    <div className="icon"><img src={weatherData.imgUrl} alt="icon" /></div>
                <div className="current-temperature">{weatherData.currentTemperature}</div>
                <div className="weather-degrees">°C</div>
                </div>

                <div className="current-weather-details">
                    <div className="weather-condition">{weatherData.condition}</div>
                    <div>Wind speed: <span>{weatherData.windspeed}</span> km/h</div>
                    <div>Humidity: <span>{weatherData.humidity}</span></div>
                </div>
            </div>
        </div>
        
    )
}