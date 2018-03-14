import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { createBrowserHistory } from 'history';
import initialState from './data/initialState';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const rootNode = document.getElementById('root');
const store = configureStore(initialState);
const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App store={store} />
        </Router>
    </Provider>,
    rootNode
);
registerServiceWorker();
