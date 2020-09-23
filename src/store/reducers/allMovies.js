import * as actions  from '../actions/actions';

const initialState = {
    movies:[{name:"Avengers",date:2020}]
}


const reducer = (state=initialState,action) => {

    switch(action.type) {
        case actions.GET_MOVIES:
            return state;
        default:
            return state;
    }
}

export default reducer;