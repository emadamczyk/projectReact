import React from "react";
import Hero from "../components/Hero";

import Center from 'react-center';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import NavBarLanding from "../components/NavBarLanding";


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


function Landing(props) {
  const { classes } = props;

  return (
    <div>
      
    <NavBarLanding />
<div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          
            <Hero/>
           
          
         
        </Grid>
      </Grid>
    </div>
      
    </div>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
