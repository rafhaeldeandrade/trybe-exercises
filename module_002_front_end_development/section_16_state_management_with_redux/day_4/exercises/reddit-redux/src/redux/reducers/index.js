import { combineReducers } from 'redux';
import subredditReducer from './subredditReducer.js';

const rootReducer = combineReducers({ reddit: subredditReducer});

export default rootReducer;
