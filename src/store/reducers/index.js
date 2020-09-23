import { combineReducers } from 'redux';
import allMoviesReducer from './allMovies';
import homepageMoviesReducer from './homepage';
import singleMovieReducer from './selectedMovie';

const rootReducer = combineReducers({
    allMovies: allMoviesReducer,
    homepage: homepageMoviesReducer,
    singleMovie: singleMovieReducer
})

export default rootReducer;