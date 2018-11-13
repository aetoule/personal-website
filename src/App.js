import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import routes from './routes';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {routes}
      </div>
    );
  }
}

export default App;
