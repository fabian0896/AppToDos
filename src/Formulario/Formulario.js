import React from 'react';
import './Formulario.css'



class Formulario extends React.Component{
    
    render(){
        let clase = '';
        if(this.props.edit !== null){
            clase = this.props.edit? 'active' : 'disable';
        }
        return(
            <div key={this.props.edit} className={`Formulario-container ${ clase }`}>
                <form onSubmit={this.props.handleSubmit}  className="Formulario" action="">
                    <input autoFocus ref={this.getRef} onChange={this.props.handleChange} value={this.props.value} className="Formulario-input" type="text"/>
                    <button className="Formulario-Submit" type="submint"><i className="fas fa-save"></i></button>
                </form>
            </div>
        )
    }

}

export default Formulario;