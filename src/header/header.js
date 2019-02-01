import React from 'react';
import './header.css';

function Header(props){
    

    let clase = '';
    if(props.edit !== null){
        clase = props.edit? 'active-header' : 'disable-header';
    }
    return( 
        <div className="Header">
            <h2 className="Header-title"> {props.edit? 'Agregar nueva tarea' : 'Cosas por hacer'}</h2>
            <a  onClick={props.handleClick} className={`Header-button ${ clase }`} href="#" ><i className="fas fa-plus"></i></a>
        </div>
    )
}


export default Header;