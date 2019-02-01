import React from 'react';
import './Formulario.css'



class Formulario extends React.Component{
    
    state = {
        tarea: ''
    }

    hadleSubmit = (event)=>{
        event.preventDefault();
    }

    handleChange = (event)=>{
        const texto = event.target.value;
        this.setState({
            tarea: texto.charAt(0).toUpperCase() + texto.slice(1)
        })
    }

    render(){
        let clase = '';
        if(this.props.edit !== null){
            clase = this.props.edit? 'active' : 'disable';
        }
        return(
            <div key={this.props.edit} className={`Formulario-container ${ clase }`}>
                <form onSubmit={this.hadleSubmit}  className="Formulario" action="">
                    <input onChange={this.handleChange} value={this.state.tarea} className="Formulario-input" type="text"/>
                    <button className="Formulario-Submit" type="submint"><i className="fas fa-save"></i></button>
                </form>
            </div>
        )
    }
}

export default Formulario;