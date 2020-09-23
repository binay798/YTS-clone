import { combineReducers } from 'redux';
import allMoviesReducer from './allMovies';
import homepageMoviesReducer from './homepage';
const rootReducer = combineReducers({
    allMovies: allMoviesReducer,
    homepage: homepageMoviesReducer
})

export default rootReducer;