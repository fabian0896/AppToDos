import React from 'react';
import './Formulario.css'



class Formulario extends React.Component{
    render(){
        let clase = '';
        if(this.props.edit !== null){
            clase = this.props.edit? 'active' : 'disable';
        }
        return(
            <div key={this.props.edit} className={`Formulario ${ clase }`}>
                <h2 className="Formulario-Title">Ingrsa nueva tarea</h2>
                <form action="">
                    <input className="Formulario-input" type="text"/>
                    <button className="Formulario-Submit" type="submint">Guardar</button>
                </form>
            </div>
        )
    }
}

export default Formulario;