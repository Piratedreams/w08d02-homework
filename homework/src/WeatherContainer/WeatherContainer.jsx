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








export default WeatherContainer;