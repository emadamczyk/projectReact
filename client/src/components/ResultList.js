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
        <li className="list-group-item" key={result.id}>
          <h1 style={{fontSize:"20px"}}>{result.title}</h1>
          <p>{result.type}</p>
          <p style={{fontSize:"10px"}}>{result.address}</p>
          <p style={{fontSize:"10px"}}>{result.description}</p>
          <img src={result.media.image_url} style={{height:"200px"}}/>

        </li>
      ))}
    </ul>



    {/* <div className="list-group">
    {props.results.map(result => (


    <Card className={classes.card}>
      <CardActionArea className="list-group-item" key={result.id}>
      {/* <img src={result.media.image_url} style={{height:"100px"}}/> */}
        {/* <CardMedia
          className={classes.media}
          title="Contemplative Reptile"
          image={result.media.image_url}
          style={{height:"250px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <h1 style={{fontSize:"20px"}}>{result.title}</h1>
          </Typography>
          <Typography component="p">
            <p>{result.type}</p>
            <p style={{fontSize:"10px"}}>{result.address}</p>
            <p style={{fontSize:"10px"}}>{result.description}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     ))}
    </div> */}
    </div>
  );
}

ResultList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultList);
