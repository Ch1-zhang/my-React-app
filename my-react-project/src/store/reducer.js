import {combineReducers} from 'redux';
import headReducer from './../components/head/store/headReducer';
import homeReducer from './../components/home/store/homeReducer';

export default combineReducers({
    head:headReducer,
    home:homeReducer
})