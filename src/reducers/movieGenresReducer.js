import * as actionTypes from '../actions/actionTypes';

const getMovieGenres = {
    fetchingStarted: false,
    fetchingSuccess: false,
    fetchingFail: false,
    fetchingCompleted: false,
    payload: null
}

export default function movieGenresReducer(state = getMovieGenres, actions) {
    switch (actions.type) {
        case actionTypes.REQUEST_GENRE:
            return Object.assign({}, state, {
                fetchingStarted: true,
                fetchingSuccess: false,
                fetchingFail: false,
                fetchingCompleted: false
            });

        case actionTypes.REQUEST_GENRE_SUCCESS:
            return Object.assign({}, state, {
                fetchingStarted: false,
                fetchingSuccess: true,
                fetchingFail: false,
                fetchingCompleted: false,
                payload: actions.payload.data
            });

        case actionTypes.REQUEST_GENRE_FAIL:
            return Object.assign({}, state, {
                fetchingStarted: false,
                fetchingSuccess: false,
                fetchingFail: true,
                fetchingCompleted: false,
                payload: null
            });

        case actionTypes.REQUEST_GENRE_COMPLETED:
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