import React from 'react';
import './Checkbox.css';

class Checkbox extends React.Component{
    
    state={
        check: false
    }

    handleClick = ()=>{
        this.setState({
            check: !this.state.check
        })
    }
    
    render(){
        return(
            <label  className="Checkbox-container">
                <input onChange={this.handleClick} checked={this.state.check} onClick={ this.handleClick}  type="checkbox" name="" id=""/>
                <span className="Checked"><i className="fas fa-check"></i></span>
            </label>
        )
    }
    
}


export default Checkbox