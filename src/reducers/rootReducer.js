import { combineReducers } from "redux";
import movieDetails from './movieDetailsReducer';
import popularMovies from './popularMoviesReducer';
import movieGenres from './movieGenresReducer';
import { loaderFun } from './loaderReducer';

const rootReducer = combineReducers({
    movieDetails,
    popularMovies,
    movieGenres,
    statusOfLoading: loaderFun
});

export default rootReducer; 