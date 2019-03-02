import React from 'react';
import logo from '../img/BYA-logo-horiz.PNG';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FaceIcon from '@material-ui/icons/Face';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBarLanding(props) {
  const { classes } = props;
  return (

    <div className={classes.root}>

    {console.log("isloggedin", props.isLoggedIn)}

      <AppBar position="static" style={{background:"#0E35B5"}}>
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <img id="logo" style={{height: "12vh", marginRight: "10px"}} src={logo} />
          <Typography variant="h6" color="inherit" className={classes.grow}>
          
          </Typography>
         {props.isLoggedIn ? <FaceIcon/> : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBarLanding.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBarLanding);