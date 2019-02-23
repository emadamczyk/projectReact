import React, { Component } from "react";
import auth from "./../auth/initAuth";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
  }

  _handleSubmit = (event, data) => {
    event.preventDefault();
    // Axios.post("/api/signup"), {
    //     username: this.state.username,
    //     password: this.state.password
    // }
    auth.signup(this.state.username, this.state.password);
  };
  _handleUsernameChange = event => {
    this.setState({ username: event.target.value });
    console.log("username", this.state.username);
  };
  _handlePasswordChange = event => {
    this.setState({ password: event.target.value });
    console.log("password", this.state.password);
  };
  render() {
    return (
      <form className="commentForm" onSubmit={this._handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={this._handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Enter a password"
          onChange={this._handlePasswordChange}
        />
        <input type="submit" value="Sign up" />
      </form>
    );
  }
}
export default SignUp;
