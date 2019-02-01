import React from 'react';
import './Checkbox.css';

class Checkbox extends React.Component{
    
    handleClick = ()=>{
        this.props.handleChange(!this.props.done);
    }
    
    render(){
        return(
            <label  className="Checkbox-container">
                <input onChange={this.handleClick} checked={this.props.done} onClick={ this.handleClick}  type="checkbox" name="" id=""/>
                <span className="Checked"><i className="fas fa-check"></i></span>
            </label>
        )
    }
    
}


export default Checkbox