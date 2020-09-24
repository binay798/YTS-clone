import * as actions from '../actions/actions';

const initialState = {
    currentMovie: null,
    loading: false,
    suggestedMovies:null
}

const reducer = (state=initialState,action) => {

    switch(action.type) {
        case actions.GET_SINGLE_MOVIE:
            let suggested = action.value.suggestedMovie.data.data.movies;
            return {
                ...state,
                currentMovie: {...action.value.movie.movie},
                suggestedMovies: [...suggested]
                
            };
        case actions.GET_SINGLE_MOVIE_START:
            return {
                ...state,
                currentMovie: action.value,
                loading: true
            }
        case actions.GET_SINGLE_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case actions.GET_SINGLE_MOVIE_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default reducer;