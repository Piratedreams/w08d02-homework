import React, { Component } from 'react';



class WeatherSearchForm extends Component {
    constructor() {
        super();
        this.state= {
            search: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.findWeather(this.state);
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
        Where would you like to see the weather? <input onChange={this.handleChange} type='text' name='search' />
        <input type='submit' />
        </form>
    }
}







export default WeatherSearchForm;