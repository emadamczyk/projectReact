import React from "react";

function ResultList(props) {
  return (

    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          {/* <img alt={result.title} className="img-fluid" src={result.images.original.url} /> */}
          {/* {result.title} */}
          <h1 style={{fontSize:"20px"}}>{result.title}</h1>
          <p>{result.type}</p>
          <p style={{fontSize:"10px"}}>{result.address}</p>
          <p style={{fontSize:"10px"}}>{result.description}</p>
          <img src={result.media.image_url} style={{height:"100px"}}/>

        </li>
      ))}
    </ul>
  );
}

export default ResultList;
