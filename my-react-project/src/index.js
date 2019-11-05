import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style';
import 'antd/dist/antd.css'
import '../src/static/bootstrap/css/bootstrap.css';
import store from "./store/store";
import {Provider} from 'react-redux'
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));
