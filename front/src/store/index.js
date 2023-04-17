import {applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension';
import AuthReducer from './reducers/userReducers';

const rootReducers = combineReducers({
    AuthReducer,
});
const middlewares = [thunkMiddleware];
const Store = configureStore(
    {reducer:rootReducers},
    composeWithDevTools(applyMiddleware(...middlewares))
);
export default Store;