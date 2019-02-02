import React from 'react';
import './Task.css';
import Checkbox from '../Checkbox/Checkbox';

 
class Task extends React.Component{
    
    state = {
        temp: 0,
        temp2: 0
    }

    handleChange = (estado)=>{
        this.props.handleCheck(this.props.index, estado)
    }

    handleTouchStart=(event)=>{
       event.stopPropagation();
        this.setState({
            temp: new Date().getTime()
        });
    }

    handleTouchEnds=()=>{
        const tiempo = new Date().getTime();
        const holdTime = tiempo - this.state.temp;
        if(holdTime >= 500){
            this.props.isHoldingHandel(this.props.index)
        }
    }
    
    render(){
        return(
            <div onTouchEnd={this.handleTouchEnds} onTouchStart={this.handleTouchStart} onDoubleClick={()=>this.props.isHoldingHandel(this.props.index)} className={`Task ${this.props.isHolding? 'isHolding' : 'noHolding'}`}>
                <div className="Task-content">
                    <Checkbox handleChange={this.handleChange} done={ this.props.done }/>
                    <span className={`Task-text ${ this.props.done? 'Task-text-done': '' }`}>{ this.props.text }</span>
                </div>
               {
                   this.props.isHolding &&
                    <div className="Task-actions">
                        <a onClick={()=>{this.props.startEdition(this.props.index)}} className="Task-edit" href="#"><i className="fas fa-pen-square"></i></a>
                        <a onClick={()=> this.props.handleDelete(this.props.index)} className="Task-delete" href="#"><i className="fas fa-trash"></i></a>
                    </div>
               }  
            </div>
        )
    }
}

export default Task;