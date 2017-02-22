import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './src/app';
import Login from './src/login';
import reducers from './src/reducers/index';
import thunk from 'redux-thunk'

const Projects = () => (
 	<App />
)

const Main = () => (
  <Login />
)
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
    <Router>
      <Route path="/" component={Main}>
        <Route path="/projects" component={Projects}/>
      </Route>
    </Router>
    </Router>
  </Provider>, 
  document.querySelector('.container'));
