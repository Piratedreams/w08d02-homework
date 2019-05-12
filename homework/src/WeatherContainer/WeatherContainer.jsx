import React, { Component } from 'react';
import WeatherSearchForm from './WeatherSearchForm/WeatherSearchForm';

class WeatherContainer extends Component {
        constructor(){
            super();
            this.state= {
               
                weather: [],
                wind: {},
                
            }
        }
    
    componentDidMount() {
        this.findWeather({ search: "" });
    }
    findWeather = async (formData) => {
        const searchURL = `https://api.openweathermap.org/data/2.5/weather?q=${formData.search}&units=imperial&APPID=14d264e3547bc62e11a404ef26d22109`
         await fetch(searchURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    weather: data.main,
                    temp: data.main.temp,
                    wind: data.wind
                   
                })
            })
            .catch((e) => console.log(e))

    
    }
    render(){
        console.log(this.state);
        
    
       
        return( <div>
            <WeatherSearchForm findWeather={this.findWeather}></WeatherSearchForm>
            <p> It is {this.state.weather.temp} Degrees with {this.state.weather.humidity}% Humidity accompanied by {this.state.wind.speed} mph windspeed.</p>
        </div> )
    }










}








export default WeatherContainer;