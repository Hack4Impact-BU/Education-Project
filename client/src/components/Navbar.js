import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MenuItem, Button, Grid } from '@material-ui/core';
  
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
  
export default function Navbar() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#87F5EC' }}>
        <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" style={{color:'#000000'}}>
                Welcome to Education Project! 
            </Typography>
            <MenuItem><Link to='/home' style={{textDecoration:'none'}}><Button variant="contained" style={{background:'#03851a', color:'#ffffff'}}>
                Home
            </Button></Link></MenuItem>
            <MenuItem><Link to='/signin' style={{textDecoration:'none'}}><Button variant="contained" style={{background:'#03851a', color:'#ffffff'}}>
                Sign In
            </Button></Link></MenuItem>
            <MenuItem><Link to='/tutorRegistration' style={{textDecoration:'none'}}><Button variant="contained" style={{background:'#03851a', color:'#ffffff'}}>
                Tutor Registration
            </Button></Link></MenuItem>
            <MenuItem><Link to='/adminTutorReferenceChecks' style={{textDecoration:'none'}}><Button variant="contained" style={{background:'#03851a', color:'#ffffff'}}>
              Admin Tutor Referenece Check
            </Button></Link></MenuItem>
            <MenuItem><Link to='/setup' style={{textDecoration:'none'}}><Button variant="contained" style={{background:'#03851a', color:'#ffffff'}}>
                Set Up
            </Button></Link></MenuItem>
        </Toolbar>
      </AppBar>
      <Grid style={{height:'5vh'}}></Grid>
    </div>
  );
}

