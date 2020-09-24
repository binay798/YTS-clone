import * as actions from './actions';
import { ytsInstance as axios } from '../../axios-instance';
export const getSingleMovie = (id) => {
    return dispatch => {
        dispatch({type: actions.GET_SINGLE_MOVIE_START,value:null})
        

        let movieDetail = axios.get(`/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`);
        let movieSuggestions = axios.get(`/movie_suggestions.json?movie_id=${id}`);

        // GET request simultaneosly
        Promise.all([movieDetail,movieSuggestions])
                .then(values => {
                    
                    let [movie,movieSuggestion] = values;
                    movie = movie.data.data;
                    dispatch({type:actions.GET_SINGLE_MOVIE,value: {movie:movie,suggestedMovie: movieSuggestion}});
                    dispatch({type: actions.GET_MOVIES_SUCCESS});

                })
                .catch(err => {
                    console.log(err);
                    dispatch({type: actions.GET_MOVIES_ERROR});
                })
    }
}