import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router'

import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './src/components/App';
import Login from './src/components/Login';
import Projects from './src/components/Projects';
import reducers from './src/reducers';
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={appHistory}>
      <Router>
        <Route path="/" component={App}>
        </Route>
        <Route path="/login" component={Login}/>
        <Route path="/projects" component={Projects}/>
      </Router>
    </Router>
  </Provider>, 
  document.querySelector('.container'));
