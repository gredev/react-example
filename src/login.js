import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { loginUser } from './request'

const form = reduxForm({
  form: 'Login',
});

class Login extends Component {
  
/*  handleFormSubmit(formProps) {
    this.props.loginUser(formProps);
    console.log(formProps);
  }*/

  myFunction ()
    {
      var name = document.getElementById("first").value;
      var pass = document.getElementById("password").value;
      this.props.loginUser(name, pass);
  }

   
  render() {
    const { handleSubmit } = this.props;

    return (
        //<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} id="application">
        <form onSubmit={handleSubmit(this.myFunction.bind(this))} id="application">
          <div id="buttons">
            <button type="submit" id="buttons">Login</button>
          </div>
          <div id="signup">
            <input type="text" name="email" id="first" placeholder="Username"/>
            <input type="password" name="password" id="password" placeholder="Password"/>
          </div>
        </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, { loginUser })(form(Login));