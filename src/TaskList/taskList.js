import React from 'react';
import Task from '../Task/Task';
import { connect }  from 'react-redux';

class TaskList extends React.Component{
   
    state ={
        editingNumber: null
    }

    handleCheck = (idx, check)=>{
        this.props.dispatch({
            type: 'UPDATE_CHECK',
            payload:{
                idx: idx,
                done: check
            }
        })
    }

    handleDelete = (idx)=>{
        this.props.dispatch({
            type: 'DELETE_TASK',
            payload:{
                idx: idx,
            }
        });
        this.setState({
            editingNumber: null
        })
    }

    isHoldingHandel = (idx)=>{
        let value = null;
        if(idx === this.state.editingNumber){
            value = null;
        }else{
            value = idx;
        }
        this.setState({
            editingNumber: value
        })
    }
    
    render(){
        return(
            <div>    
                {
                   this.props.tasks.map((task, index)=>{
                       return <Task
                                startEdition={this.props.startEdition}
                                isHolding={ index === this.state.editingNumber? true : false }
                                isHoldingHandel = { this.isHoldingHandel }
                                handleCheck={ this.handleCheck }
                                handleDelete = {this.handleDelete} 
                                index={index} 
                                { ...task } 
                                key={ index }/>
                   }) 
                }
            </div>
        )
    }
}


export default  connect()(TaskList);