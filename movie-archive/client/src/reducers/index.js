import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    movie: movieReducer,
    error: errorReducer
})