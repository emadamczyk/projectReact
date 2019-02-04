import React from 'react';

function Board(props) {
    return <div id="board">
    {props.images.map(image => (
      <div style={{backgroundColor: image.color}} className="image" id={"image-" + image} key={image.index} onClick={() => {props.clickHandler(image.index)}} ></div>
    ))}
  </div>
  }
  
  export default Board;