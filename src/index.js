import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



const data = {
    
    task: [
],
    inputText: ''
}


function reducer(state, action){
    switch(action.type){
        case 'UPDATE_CHECK':{
            return { 
                ...state, 
                task: state.task.map((item, index)=>{
                    if(index === action.payload.idx){
                        return { ...item, done: action.payload.done }
                    } else{
                        return item;
                    }
                })
            }
        }
        case 'DELETE_TASK':{
            return{
                ...state,
                task: state.task.filter((item,index)=> index !== action.payload.idx ),
            }
        }
        case 'ADD_TASK':{
            return{
                ...state,
                task: [ ...state.task,{text: action.payload.value, done: false  }]
            }
        }
        case 'UPDATE_TASK':{
            return{
                ...state,
                task: state.task.map((item, index)=>{
                    if(index === action.payload.idx){
                        return { ...item, text: action.payload.message }
                    }else{
                        return item;
                    }
                })
            }
        }
        default:
            return state;
    }
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
