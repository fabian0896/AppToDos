import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



const data = {
    
    task: [
    {
        text: "comprar cosas",
        done: false
    },
    {
        text: "Hacer Trabajos",
        done: true
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
}


function reducer(state, action){
    return state;
}

const store = createStore(reducer, data, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());





ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
