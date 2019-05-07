import React, { Component } from 'react';
import './style.css';

class WeatherContainer extends Component {
        constructor(){
            super();
            this.state= {
                weather: []
            }
        }
    
    componentDidMount() {
        this.findWeather({ search: "" });
    }
    findWeather = async (formData) => {
        const searchAPI = `api.openweathermap.org/data/2.5/weather?q={city name}&APPID=14d264e3547bc62e11a404ef26d22109${formData.search}`
        const result = await fetch(searchAPI);
        const parsedResult = await result.json();
        this.setState({
            weather: parsedResult.results.filter(weather => weather.at_location !== 'unkown')
        })
    }
    render(){
        const currentWeather = this.state.weather.map((weather) => {
            return (<div key={weather.at_location}>
            <h5> In {weather.at_location}</h5>
            <p> It is {weather.cloudy} at {weather.temp} degrees outside today. </p>
           </div> )
        })
        return <div>
            <WeathersearchForm findWeather={this.findWeather}></WeathersearchForm>
        </div>
    }










}








export default WeatherContainer;