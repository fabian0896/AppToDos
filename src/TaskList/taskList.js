import React from 'react';
import Task from '../Task/Task';

class TaskList extends React.Component{
    render(){
        return(
            <div>
                {
                   this.props.tasks.map((task, index)=>{
                       return <Task { ...task } key={ index }/>
                   }) 
                }
            </div>
        )
    }
}


export default TaskList;