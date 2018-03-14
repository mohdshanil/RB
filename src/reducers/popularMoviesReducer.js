import * as actionTypes from '../actions/actionTypes';

const getAllPopularMovies = {
    fetchingStarted: false,
    fetchingSuccess: false,
    fetchingFail: false,
    fetchingCompleted: false,
    payload: null
}

export default function popularMovies(state = getAllPopularMovies, actions) {
    switch (actions.type) {
        case actionTypes.REQUEST_POPULAR_MOVIES:
            return Object.assign({}, state, {
                fetchingStarted: true,
                fetchingSuccess: false,
                fetchingFail: false,
                fetchingCompleted: false,
                payload: null
            });

        case actionTypes.REQUEST_POPULAR_MOVIES_SUCCESS:
            return Object.assign({}, state, {
                fetchingStarted: false,
                fetchingSuccess: true,
                fetchingFail: false,
                fetchingCompleted: false,
                payload: actions.payload.data
            });

        case actionTypes.REQUEST_POPULAR_MOVIES_FAIL:
            return Object.assign({}, state, {
                fetchingStarted: false,
                fetchingSuccess: false,
                fetchingFail: true,
                fetchingCompleted: false,
                payload: null
            });

        case actionTypes.REQUEST_POPULAR_MOVIES_COMPLETED:
            return Object.assign({}, state, {
                fetchingStarted: false,
                fetchingSuccess: false,
                fetchingFail: false,
                fetchingCompleted: true,
                payload: null
            });

        default: 
        return state;
    }
}