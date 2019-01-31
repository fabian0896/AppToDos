import React from 'react';
import './header.css';

function Header(props){
    return( 
        <div className="Header">
            <h2 className="Header-title">Cosas por hacer</h2>
            <a className="Header-button" href="#" ><i className="fas fa-plus"></i></a>
        </div>
    )
}


export default Header;