import React from "react";

function Header(props) {
    return (<header>
    <div className="title">Clicky Game</div>
    <div className="message">{props.message}</div>
    <div className="score">{props.score} of {props.total}</div>
  </header>)

}

export default Header;