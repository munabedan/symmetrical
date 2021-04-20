import React from 'react';
import './Appbar.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
      height:120
  },
 
}));

function Appbar(props) {

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
        <Grid item xs={10}>

          <Typography variant="h5">
            {props.courseName}
        </Typography>


        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle1">
            {props.courseId}
        </Typography>
        </Grid>
      </Grid >
    </div>


  );
}

export default Appbar;
