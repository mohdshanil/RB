import * as actionTypes from '../actions/actionTypes';

const getMovieDetails = {
    fetchingStarted: false,
    fetchingSuccess: false,
    fetchingFail: false,
    fetchingCompleted: false,
    payload: null
}

export default function movieDetails(state = getMovieDetails, actions) {
    switch (actions.type) {
        case actionTypes.REQUEST_MOVIE_DETAILS:
            return Object.assign({}, state, {
                fetchingStarted: true,
                fetchingSuccess: false,
                fetchingFail: false,
                fetchingCompleted: false,
                payload: null
            });

        case actionTypes.REQUEST_MOVIE_DETAILS_SUCCESS:
            return Object.assign({}, state, {
                fetchingStarted: false,
                fetchingSuccess: true,
                fetchingFail: false,
                fetchingCompleted: false,
                payload: actions.payload.data
            });

        case actionTypes.REQUEST_MOVIE_DETAILS_FAIL:
            return Object.assign({}, state, {
                fetchingStarted: false,
                fetchingSuccess: false,
                fetchingFail: true,
                fetchingCompleted: false,
                payload: null
            });

        case actionTypes.REQUEST_MOVIE_DETAILS_COMPLETED:
            return Object.assign({}, state, {
                fetchingStarted: false,
                fetchingSuccess: false,
                fetchingFail: false,
                fetchingCompleted: true
            });

        default:
            return state;
    }
}

