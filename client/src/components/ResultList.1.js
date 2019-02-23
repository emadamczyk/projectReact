import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  }
};


function ResultList(props) {
  const { classes } = props;
  return (
<div style={{ display: 'inline-flex' }}>
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item list-group-item-primary" key={result.id}>
          <h1 style={{fontSize:"20px"}}>{result.title}</h1>
          <p>{result.type}</p>
          <p style={{fontSize:"10px"}}>{result.address}</p>
          <p style={{fontSize:"10px"}}>{result.description}</p>
          <img src={result.media.image_url} style={{height:"200px"}}/>

        </li>
      ))}
    </ul>




    </div>
  );
}

ResultList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultList);


{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}