import React, { Component } from 'react'; 
import './App.css';
import Header from './header/header';
import TaskList from './TaskList/taskList';

import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header  />
          <TaskList tasks={ this.props.tasks }/>
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return{
    tasks: state.task
  }
}

export default connect(mapStateToProps)(App);
