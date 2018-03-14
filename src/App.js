import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './containers/common/header/Header';
import Home from './containers/home/Home';
import Details from './containers/details/Details';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/detail/:id" name="detail" component={Details} />
          <Route path="/" component={Home}  exact/>
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    </div>
  );
};

export default App; 