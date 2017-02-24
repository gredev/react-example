import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'

import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { App, Login, Projects } from './src/components';
import reducers from './src/reducers';
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={appHistory}>
      <Router>
        <Route path="/" component={App}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/projects" component={Projects}></Route>
      </Router>
    </Router>
  </Provider>, 
  document.querySelector('.container'));
