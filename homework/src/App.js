import React from 'react';
import './App.css';
import WeatherContainer from './WeatherContainer/WeatherContainer';

function App() {
  return (
    <div className="App">
      <h1>Welcome to The Weather Channel</h1>
      {
        this.state.loggedIn === true ?
          <WeatherContainer username={this.state.username}></WeatherContainer>
          :
          <LoginForm handleLogin={this.handleLogin} ></LoginForm>
      }
      <WeatherContainer></WeatherContainer>
    </div>
  );
}

export default App;
