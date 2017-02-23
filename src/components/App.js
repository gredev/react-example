import React from 'react';
import { Link } from 'react-router'
import { Component } from 'react';
import { connect } from 'react-redux'
import { logout } from '../actions/user'

//class App extends Component {
function App({ children, logout }) {
 // render: function() {
    return (
      <div id="application">
        <h2>My React Application</h2>
        <header>
        Links:
        <Link to="/login">Login</Link>
      </header>      
      </div>
    )
//  }
}

export default connect(false, { logout })(App)