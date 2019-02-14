import React from "react";
import Axios from "axios";

class UserForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
      const { name, value } = event.target;
      this.setState({
          [name]: value
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    Axios.post("/api/login", {
      username: this.state.username,
      password: this.state.password
    })
      .then(res => res.data)
      .then(console.log)
  };

  render() {
    return (
      <div className="columns is-mobile is-centered">
        <div className="column is-half-tablet is-three-quarters-mobile">
          <div className="field">
            <label className="label is-size-4 is-size-5-mobile">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label is-size-4 is-size-5-mobile">Password</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </div>
          </div>
        </div>
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}

export default UserForm;
