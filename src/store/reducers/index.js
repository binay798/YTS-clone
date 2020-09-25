import { combineReducers } from 'redux';
import allMoviesReducer from './allMovies';
import homepageMoviesReducer from './homepage';
import singleMovieReducer from './selectedMovie';
import searchMovieReducer from './searchedMovies';
const rootReducer = combineReducers({
    allMovies: allMoviesReducer,
    homepage: homepageMoviesReducer,
    singleMovie: singleMovieReducer,
    searchedMovies: searchMovieReducer
})

export default rootReducer;