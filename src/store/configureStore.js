import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer'; 
import reduxImmutablesStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

const history = createHistory();
const routerReduxMiddleware = routerMiddleware(history);

const configureStore = (initialState) => {
    return createStore(rootReducer,
            initialState,
            compose(applyMiddleware(reduxImmutablesStateInvariant(), thunk, routerReduxMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
    );
};

export default configureStore;