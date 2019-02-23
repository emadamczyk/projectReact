import React, {Component} from "react";
import Hero from "../components/Hero";

import Center from 'react-center';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import NavBarLanding from "../components/NavBarLanding";
import axios from "axios";


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false, 
      register:false,
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    // console.log("HANDLE CHANGE", event.target)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  toggleRegister = (event) => {
    console.log("TOGGLE", this.state.register)
    event.preventDefault();
    this.setState({register: !this.state.register})
  }

  register = (event) => {
    event.preventDefault();
    // call axios to save new user  /api/user  POST  
    // { username, password } as the data for your post
    console.log("REGISTER", this.state.username, this.state.password);
    axios.post("/api/user", {username: this.state.username, password: this.state.password})
    .then(response => {
      console.log("REGISTERED",response);
      this.login();
    })
    .catch(error=> {
      console.error(error);
    })
  }

  login = (event) => {
    if (event) {
    event.preventDefault();
    }
    // call axios (or Util module) with the /api/login  POST
    
    console.log(this.state.username, this.state.password)
    //.then() will do this
    // should return the userID
    // sessionStorage.setItem("userId", userId)

    axios.post("/api/user/login", {username: this.state.username, password: this.state.password}).then(response => {
      console.log(response);
      sessionStorage.setItem("userId", response.data.user._id);
      this.setState({loggedIn: true});
    })
    .catch(error=> {
      console.error(error);
    }) 

  }

  componentDidMount() {
    let userId = sessionStorage.getItem("userId");
    if (userId) {
      this.setState({loggedIn: true});
    }
  }

render() {
  const { classes } = this.props;

  return (
    <div>
      
    <NavBarLanding />
<div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          <section style={{position: "relative", textAlign: "center"}}>
            <div  
            id="hero"
            className="blue lighten-4"
            className="backgroundImg">
              <div>
                  <p id="motto" >WE LOVE SAFE BIKING</p>
              </div>
              {this.state.loggedIn ? 
              <div id="chainButton">
                <Button component={Link} to="/home" className="btn-circle btn-xl">
                        POST AN INCIDENT!
                </Button>
              </div> : 
              this.state.register ?
              <form>
                <h3>Register</h3>
                <label>User Name</label>
                <input name="username" value={this.state.username}  onChange={this.handleChange}></input><br/>
                <label>Password</label>
                <input type="password" name="password"  value={this.state.password} onChange={this.handleChange}></input><br />
                <button onClick={this.register}>Register</button><br />
                <button onClick={this.toggleRegister}>Login</button>
              </form> :
              <form>
                <h3>Login</h3>
              <label>User Name</label>
              <input name="username" value={this.state.username}  onChange={this.handleChange}></input><br/>
              <label>Password</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input><br />
              <button onClick={this.login}>Log In</button><br />
              <button onClick={this.toggleRegister}>Register</button>
            </form>
            }
            </div>
          </section>
        </Grid>
      </Grid>
    </div>
      
    </div>
  );
}
}
Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
