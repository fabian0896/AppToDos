import React from 'react';
import './Task.css';
import Checkbox from '../Checkbox/Checkbox'
 
class Task extends React.Component{
    render(){
        return(
            <div className="Task">
                <div className="Task-content">
                    <Checkbox />
                    <span className="Task-text">{ this.props.task }</span>
                </div>
                <div className="Task-actions">
                    <a className="Task-edit" href="#"><i className="fas fa-pen-square"></i></a>
                    <a className="Task-delete" href="#"><i className="fas fa-trash"></i></a>
                </div>
            </div>
        )
    }
}

export default Task;