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

  var results = []
  props.results.map((result) => {
    var imgUrl = ''

    var bikes = ['https://imageos.giant-bicycles.com/b_white,c_pad,h_400,q_80/Defy-Advanced-2-Color-A-Neon-Green/Defy-Advanced-2-Color-A-Neon-Green.jpg', 'https://cdn.shopify.com/s/files/1/0116/6732/products/chief_moss_grn_1024x1024.png?v=1479315448', 'https://cdn.gearpatrol.com/wp-content/uploads/2018/02/Priority-Revamped-Cruiser-gear-patrol-full-lead.jpg']

    if(result.media.image_url) {
      imgUrl = result.media.image_url
    } else {
      var random = Math.floor(Math.random() * bikes.length - 1) + 1  
      imgUrl = bikes[random]
    }
    var html = (
        <div className="card" style={{width: '18rem', display: 'inline-block', margin: '10px' }}>
          <img className="card-img-top" width="200px" height="150px" src={imgUrl}></img>
          <div className="card-body" style={{maxHeight: '40rem'}} >
            <h5 className="card-title"style={{ maxHeight: '50px', minHeight: '50px'}}>{result.title}</h5>
            <p>{result.type}</p>
            <p className="card-text" style={{ maxWidth: '250px', overflow: 'scroll', maxHeight: '100px', minHeight: '100px'}}> {result.description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    )   
    results.push(html) 
  }) 
  return (
    <div style={{ width: '64%' }}>
      {results}
    </div>
  );
}

ResultList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultList);
