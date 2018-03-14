import * as actionTypes from '../actions/actionTypes';
import { asyncRequesting, asyncRequestSuccess, asyncRequestFail, asyncRequestCompleted, startLoading, stopLoading } from "./asyncRequests";

var axios = require("../apiConf");


export const getMovieGenre = () => {
    return dispatch => {
        dispatch(startLoading(actionTypes.START_LOADER));
        dispatch(asyncRequesting(actionTypes.REQUEST_GENRE));
        axios.get('genre/movie/list?&language=en-US')
            .then(function (res) {
                dispatch(asyncRequestSuccess(actionTypes.REQUEST_GENRE_SUCCESS, res));
                //dispatch(asyncRequestCompleted(actionTypes.REQUEST_GENRE_COMPLETED));
                dispatch(stopLoading(actionTypes.STOP_LOADER));
            })
            .catch(function (err) {
                dispatch(asyncRequestFail(actionTypes.REQUEST_GENRE_FAIL, err));
                //dispatch(asyncRequestCompleted(actionTypes.REQUEST_GENRE_COMPLETED));
                dispatch(stopLoading(actionTypes.STOP_LOADER));
            });
    }
}



export const getAllPopularMovies = (data) => {
    return dispatch => {
        dispatch(startLoading(actionTypes.START_LOADER));
        dispatch(asyncRequesting(actionTypes.REQUEST_POPULAR_MOVIES));
        axios.get('movie/popular?&page=' + data.page)
            .then(function (res) {
                dispatch(asyncRequestSuccess(actionTypes.REQUEST_POPULAR_MOVIES_SUCCESS, res));
                //dispatch(asyncRequestCompleted(actionTypes.REQUEST_POPULAR_MOVIES_COMPLETED));
                dispatch(stopLoading(actionTypes.STOP_LOADER));
            })
            .catch(function (err) {
                dispatch(asyncRequestFail(actionTypes.REQUEST_POPULAR_MOVIES_FAIL, err));
                //dispatch(asyncRequestCompleted(actionTypes.REQUEST_POPULAR_MOVIES_COMPLETED));
                dispatch(stopLoading(actionTypes.STOP_LOADER));
            });
    }

}


export const getMovieDetails = (data) => {
    return dispatch => {


        dispatch(startLoading(actionTypes.START_LOADER));
        dispatch(asyncRequesting(actionTypes.REQUEST_MOVIE_DETAILS));
        axios.get('movie/' + data.id)
            .then(function (res) {
                debugger;
                dispatch(asyncRequestSuccess(actionTypes.REQUEST_MOVIE_DETAILS_SUCCESS, res));
                dispatch(asyncRequestCompleted(actionTypes.REQUEST_MOVIE_DETAILS_COMPLETED));
                dispatch(stopLoading(actionTypes.STOP_LOADER));
            })
            .catch(function (err) {
                dispatch(asyncRequestFail(actionTypes.REQUEST_MOVIE_DETAILS_FAIL, err));
                dispatch(asyncRequestCompleted(actionTypes.REQUEST_MOVIE_DETAILS_COMPLETED));
                dispatch(stopLoading(actionTypes.STOP_LOADER));
            });
    }
}
