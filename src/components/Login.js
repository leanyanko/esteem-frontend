import React, { Component } from "react";
import "./Login.css";
import userService from '../services/userService';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {
            username: '',
            password: ''
        }
    };
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  inputHandler(property, e) {
    const { user } = this.state;
    user[property] = e.target.value;
    this.setState({ user });
    console.log('user: ', this.state.user);
  }

  signup() {
    const { user } = this.state;
    if (user.username === '' || user.password === '') return;
    userService.signup(user);
  }

  login() {
    const { user } = this.state;
    if (user.username === '' || user.password === '') return;
    userService.login(user);
  }

  render() {
    return (
      <div className="login">
        <input type="text" onChange={this.inputHandler.bind(this, 'username')} />
        <input type="password" onChange={this.inputHandler.bind(this, 'password')} />
        
        <button onClick={() => this.login()}>Login</button>
        <button onClick={() => this.signup()}>Signup</button>
      </div>
    );
  }
}

export default Login;
