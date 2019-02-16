import React from 'react';
import bike from '../img/bikeBanner.png';
import Center from 'react-center';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Hero = () => {
  return (
    <section 
      id="hero"
      className="blue lighten-4"
      style={{overflow: "hidden", backgroundSize: "cover", height: "700px", backgroundImage: 'url(' + bike + ')'}}
    >

    <Center >
        <div>
            <p style={{fontSize: "100px"}}>WE LOVE SAFE BIKE LANES</p>
        </div>   
    </Center>
<Grid></Grid>
    
    <Button component={Link} to="/home">
        POST AN INCIDENT!
        </Button>
    </section>


  );
};

export default Hero;