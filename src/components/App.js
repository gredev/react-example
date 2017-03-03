import React from 'react';
import { Link } from 'react-router'
import { Component } from 'react';
import { connect } from 'react-redux'
import { logout } from '../actions/user'

class App extends Component {
  render() {
    return (
		<div id="content">

		</div>
    )
  }
}
export default connect(false, { logout })(App)