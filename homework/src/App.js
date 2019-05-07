import React, { Component } from 'react';
import './App.css';
import WeatherContainer from './WeatherContainer/WeatherContainer';
import LoginForm from './LoginForm/LoginForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    }
  }
  handleLogin = (formData) => {
    this.setState({
      loggedIn: true,
      username: formData.username
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to secret sharer</h1>
        {
          this.state.loggedIn === true ?
            <WeatherContainer username={this.state.username}></WeatherContainer>
            :
            <LoginForm handleLogin={this.handleLogin} ></LoginForm>
        }
      </div>
    );
  }
}


export default App;
