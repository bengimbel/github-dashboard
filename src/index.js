import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';




const store = createStore(reducers, applyMiddleware(Thunk, ReduxPromise, Logger));
ReactDOM.render(
    
    <Provider store={store}>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
