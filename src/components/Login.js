import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form';
import { loginUserContent } from '../actions/user'

const form = reduxForm({
  form: 'Login',
});

class Login extends Component {
  myFunction ()
    {
      var name = document.getElementById("uname").value;
      var pass = document.getElementById("password").value;
      this.props.loginUserContent(name, pass);
  }

   
  render() {
    const { handleSubmit } = this.props;

    return (
        <form onSubmit={handleSubmit(this.myFunction.bind(this))} id="application">
          <div id="buttons">
            <button type="submit" id="buttons">Login</button>
          </div>
          <div id="login">
            <input type="text" id="uname" placeholder="Username"/>
            <input type="password" id="password" placeholder="Password"/>
          </div>
        </form>
    );
  }
}

export default connect(false, { loginUserContent })(form(Login));