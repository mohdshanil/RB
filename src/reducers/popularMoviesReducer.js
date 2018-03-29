
import * as actionTypes from '../actions/actionTypes';
import * as _ from 'underscore';

const getAllPopularMovies = {
    fetchingStarted: false,
    fetchingSuccess: false,
    fetchingFail: false,
    fetchingCompleted: false,
    payload: { page: 1, total_pages: 0, total_results:0, results: [] }
}

const popularMovies = (state = getAllPopularMovies, actions) => {
    switch (actions.type) {
        case actionTypes.REQUEST_POPULAR_MOVIES:
            return Object.assign({}, state, {
                fetchingStarted: true,
                fetchingSuccess: false,
                fetchingFail: false,
                fetchingCompleted: false
            });

        case actionTypes.REQUEST_POPULAR_MOVIES_SUCCESS:
        debugger;
            return Object.assign( {}, state, {
                fetchingStarted: false,
                fetchingSuccess: true,
                fetchingFail: false,
                fetchingCompleted: false,
                payload : Object.assign({}, state.payload, {
                            results : state.payload.results ?  [...state.payload.results].concat(actions.payload.results) : actions.payload.results,
                            page: actions.payload.page,
                            total_pages: actions.payload.total_pages,
                            total_results: actions.payload.total_results,
                })
            }
        );
                

        case actionTypes.REQUEST_POPULAR_MOVIES_FAIL:
            return Object.assign({}, state, {
                fetchingStarted: false,
                fetchingSuccess: false,
                fetchingFail: true,
                fetchingCompleted: false
            });

        case actionTypes.REQUEST_POPULAR_MOVIES_COMPLETED:
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

export default popularMovies;