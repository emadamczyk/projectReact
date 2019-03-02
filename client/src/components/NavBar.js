import React from 'react';
import logo from '../img/BYA-logo-horiz.PNG';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

// const handleInputChange = (event) => {
// event.preventDefault();
// const inputValue = event.target.value;
// console.log(inputValue);
// }

// searchBikeIncidents = query => {
//   ExternalAPI.search(query)
//     .then(res => this.setState({ results: res.data.incidents }))
//     .catch(err => console.log(err));
// };

// const handleKeyPress = (event) => {
//   if(event.key == 'Enter'){
//     console.log('key press working');
//   }
// }

function SearchAppBar(props) {
  const { classes} = props;
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
      <AppBar position="static" style={{background:"#0E35B5"}}>
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Hidden xsDown>
            <img id="logo" style={{height: "12vh", marginRight: "10px"}} src={logo} />
          </Hidden>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            
          </Typography>
        
          
          <div className={classes.grow} />
          {/* <IconButton
                  component={Link} to="/create"
                >
                <CreateIcon />
                </IconButton> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>

            
              <SearchIcon />
              
            </div>
            <InputBase
              onKeyPress={props.onKeyPress}
              onChange={props.handleInputChange}
              value={props.value}
              name='searchTerm'
              placeholder="City / Zip"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
            
          </div>
          <IconButton
                  component={Link} to="/create"
                >
                <CreateIcon />
                </IconButton>
        </Toolbar>
    
      </AppBar>
      </Grid>
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  writeInput: PropTypes.func
};

export default withStyles(styles)(SearchAppBar);