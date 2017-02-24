import React from 'react';
import { Link } from 'react-router'
import { Component } from 'react';
import { connect } from 'react-redux'
import { logout } from '../actions/user'

class App extends Component {
  render() {
    return (
    	<div id="app">
			<h2>My React Application</h2>
			<div>
				<Link to="/login">Login</Link>
			</div>      
		</div>
    )
  }
}
export default connect(false, { logout })(App)