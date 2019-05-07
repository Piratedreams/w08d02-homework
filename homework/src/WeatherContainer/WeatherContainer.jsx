import React, { Component } from 'react';
import WeatherSearchForm from './WeatherSearchForm/WeatherSearchForm';

class WeatherContainer extends Component {
        constructor(){
            super();
            this.state= {
                weather: [],
                
            }
        }
    
    componentDidMount() {
        this.findWeather({ search: "" });
    }
    findWeather = async (formData) => {
        const searchURL = `https://api.openweathermap.org/data/2.5/weather?q=${formData.search}&APPID=14d264e3547bc62e11a404ef26d22109`
        fetch(searchURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // this.setState({
                //     cityName: data.name,
                //     main: data.main,
                //     weather: data.weather
                // })
            })
            .catch((e) => console.log(e))

    
    }
    render(){
        const currentWeather = this.state.weather.map((weather) => {
            return (<div key={weather.at_location}>
            <h5> In {weather.at_location}</h5>
            <p> It is {weather.main} at {weather.temp} degrees outside today. </p>
           </div> )
        })
        return <div>
            <WeatherSearchForm findWeather={this.findWeather}></WeatherSearchForm>
            {currentWeather}
        </div>
    }










}








export default WeatherContainer;