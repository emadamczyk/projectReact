import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {

  state = {
    "testValue": "getting..."
  }




  componentDidMount() {
    // console.log("mouting app");
    // axios.get("/api/test", (result) => {
    //   console.log(result);
    // })

    axios.get("/api/test")
  .then(result => {
    console.log(result.data.test)
    this.setState({"testValue": result.data.test})
  })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Bike Your AREA</h2>
        </div>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          the test value is: {this.state.testValue}
        </p>
      </div>
    );
  }
}

export default App;
