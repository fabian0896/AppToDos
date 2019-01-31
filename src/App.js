import React, { Component } from 'react'; 
import './App.css';
import Header from './header/header';
import Task from './Task/Task'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header  />
          <Task task="Comprar cosas "/>
          <Task task="Comprar cosas "/>
      </div>
    );
  }
}

export default App;
