import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  courseappbar: {
    minHeight: 90,
    background: 'linear-gradient(45deg, #Ff8664 10%, #FF4965 90%)',

  },

}));

function Appbar(props) {

  const classes = useStyles();


  return (

    <Grid container direction="column" >
      <Grid item>
        <Typography variant="h5" align="center">
          {props.courseName}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" align="center">
          {props.courseId}
        </Typography>
      </Grid>




    </Grid>






  );
}

export default Appbar;
