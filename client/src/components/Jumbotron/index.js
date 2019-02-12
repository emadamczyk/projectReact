import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ fontFamily: "Veranda", backgroundColor: "#72ba8f", color: "white", height: 100, clear: "both", paddingTop: 50, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
