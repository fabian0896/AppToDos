import React, { Component } from 'react'; 
import './App.css';
import Header from './header/header';
import TaskList from './TaskList/taskList';
import Formulario from './Formulario/Formulario'

import { connect } from 'react-redux'

class App extends Component {
  state={
    edit: null
  }

  handleClick = ()=>{
    if(this.state.edit === null){
      this.setState({
        edit: true
      })
      return
    }
    this.setState({
      edit: !this.state.edit
    })
  }
  
  render() {
    return (
      
      <div className="App">
          <Header edit={this.state.edit} handleClick={this.handleClick} />
          <Formulario edit={this.state.edit} />
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
