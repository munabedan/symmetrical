import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:0,
    marginBottom:theme.spacing(2),
    

  },
  appbar:{
    background: 'linear-gradient(45deg, #Ff8664 10%, #FF4965 90%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    //minHeight: 80,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    background: 'linear-gradient(45deg, #Ff8664 10%, #FF4965 90%)',

  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    marginTop:theme.spacing(1)

    //alignSelf: 'flex-end',
  },
  
}));

function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
         
          <Typography className={classes.title} variant="h5" noWrap>
            Blend
          </Typography>
          
          <IconButton aria-label="display more actions" edge="end" color="inherit">
          <MenuIcon />
          </IconButton>
        </Toolbar>
        
      </AppBar>
    </div>
  );
}

export default Appbar