import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import App from './App';

const composeEnhancers =process.env.NODE_ENV === 'development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null || compose;

const rootReducer = combineReducers({

});
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

const app =  (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
