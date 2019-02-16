import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};



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
