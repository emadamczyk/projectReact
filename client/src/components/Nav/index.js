import React from "react";
// import React, { Component } from "react";
// import SearchForm from "..\SearchForm";

// class Nav extends SearchForm {
//   render() 

// }

function Nav() {
  return (
    <nav className="navbar navbar-light" style={{backgroundColor: "#0e35b5"}}>
      <a className="navbar-brand" style={{color: "#fff"}} href="/">
        <img style={{marginRight: "10px"}} src="./BYA-logo-crop.png" height="80" className="d-inline-block align-bottom" alt="logo"></img>
        Bike Your AREA
      </a>
    </nav>
  );
}

export default Nav;