import React, { Component } from 'react'; 
import './App.css';
import Header from './header/header';
import TaskList from './TaskList/taskList';
import Formulario from './Formulario/Formulario'

import { connect } from 'react-redux'

class App extends Component {
  state={
    edit: null,
    inputText: '',
    isEditing: false,
    idxEditing: null
  }

  handleClick = ()=>{
    if(this.state.edit === null){
      this.setState({
        edit: true
      })
    }else{
      this.setState({
        edit: !this.state.edit
      })
    }
    if(this.state.edit){
      this.setState({inputText: ''});
    }
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    if(this.state.isEditing){
      this.props.dispatch({
        type: 'UPDATE_TASK',
        payload:{
          idx: this.state.idxEditing,
          message: this.state.inputText
        }
      });
    } else{
      this.props.dispatch({
        type: 'ADD_TASK',
        payload:{
          value: this.state.inputText
        }
      });
    }
    this.handleClick();
    this.setState({
      inputText: '',
      isEditing: false,
      idxEditing: null
    });
  }

  handleChange =(event)=>{
    const texto = event.target.value;
        this.setState({
            inputText: texto.charAt(0).toUpperCase() + texto.slice(1)
        })
  }
  
  startEdition = (index)=>{
    const mensaje = this.props.tasks[index].text;
    this.setState({
      inputText: mensaje,
      idxEditing: index,
      isEditing: true
    });
    this.handleClick();
  }
  
  render() {
    return (
      
      <div className="App">
          <Header edit={this.state.edit} handleClick={this.handleClick} />
          <Formulario value={this.state.inputText} handleChange={this.handleChange } getInput={this.getInput} handleSubmit={ this.handleSubmit } edit={this.state.edit} />
          <TaskList startEdition={this.startEdition} tasks={ this.props.tasks }/>
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
