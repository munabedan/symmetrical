import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: 0,
  },
  paper: {
    minHeight: 80,
    //minWidth: 200,
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(6),

  },
  container: {
    minHeight: 80,
  },
  button:{
    background: 'linear-gradient(45deg, #Ff8664 10%, #FF4965 90%)',

  },

}));


export default function Actioncard() {

  const classes = useStyles();
  let history = useHistory();

  function redirectToVerifyLocation() {
    history.push("/getlocation");
  }

  return (
    <Paper className={classes.paper}>
      <Grid container direction="row" justify="center" alignItems="center" className={classes.container}>

        <Grid item xs={6}>
          <Grid container direction="column" justify="center" alignItems="center">
            <Grid item>
              <Typography variant="h6">
                10:00AM
          </Typography>
            </Grid>

            <Grid item>
              <Typography variant="subtitle1">
                LHC 201
          </Typography>
            </Grid>
          </Grid>



        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={redirectToVerifyLocation} className={classes.button}>
            ATTEND
          </Button>

        </Grid>
      </Grid>

    </Paper>



  );
}
