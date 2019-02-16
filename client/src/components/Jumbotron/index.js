import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ fontFamily: "Veranda", backgroundColor: "#B3DDF2", color: "white", height: 100, clear: "both", paddingTop: 50, textAlign: "center"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
