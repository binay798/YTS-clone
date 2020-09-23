import * as actions from './actions';
import { ytsInstance as axios } from '../../axios-instance';
export const getSingleMovie = (id) => {
    return dispatch => {
        dispatch({type: actions.GET_SINGLE_MOVIE_START,value:null})
        axios.get(`/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`)
            .then(res => {
                let movie = res.data.data;
                dispatch({type:actions.GET_SINGLE_MOVIE,value: movie});
                dispatch({type: actions.GET_MOVIES_SUCCESS});
            })
            .catch(err => {
                console.log(err)
                dispatch({type: actions.GET_MOVIES_ERROR});

            })
    }
}