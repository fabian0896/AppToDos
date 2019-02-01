import React from 'react';
import './Task.css';
import Checkbox from '../Checkbox/Checkbox';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

 
class Task extends React.Component{
    
    handleChange = (estado)=>{
        this.props.handleCheck(this.props.index, estado)
    }
    
    render(){
        return(
            <div onDoubleClick={()=>this.props.isHoldingHandel(this.props.index)} className={`Task ${this.props.isHolding? 'isHolding' : 'noHolding'}`}>
                <div className="Task-content">
                    <Checkbox handleChange={this.handleChange} done={ this.props.done }/>
                    <span className={`Task-text ${ this.props.done? 'Task-text-done': '' }`}>{ this.props.text }</span>
                </div>
               {
                   this.props.isHolding &&
                    <div className="Task-actions">
                        <a className="Task-edit" href="#"><i className="fas fa-pen-square"></i></a>
                        <a onClick={()=> this.props.handleDelete(this.props.index)} className="Task-delete" href="#"><i className="fas fa-trash"></i></a>
                    </div>
               }  
            </div>
        )
    }
}

export default Task;