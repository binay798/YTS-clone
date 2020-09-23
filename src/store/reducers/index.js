import { combineReducers } from 'redux';
import allMoviesReducer from './allMovies';

const rootReducer = combineReducers({
    allMovies: allMoviesReducer
})

export default rootReducer;