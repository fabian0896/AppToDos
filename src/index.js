import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const data = [
    {
        text: "comprar cosas",
        done: false
    },
    {
        text: "Hacer Trabajos",
        done: false
    },
    {
        text: "Ir a cine",
        done: false
    },
    {
        text: "Ganar dinero",
        done: false
    }
]



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
