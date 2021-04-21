import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    marginTop: 0,
  }

});

export default function Actioncard() {

  const classes = useStyles();

  return (
    <Grid item margin={7} className={classes.card}>
      <Grid container direction="row" >
        <Grid item xs={5}>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            10:00AM
        </Typography>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            LHC 201
        </Typography>

        </Grid>
        <Grid item xs={5}>
          <Button variant="contained">ATTEND</Button>

        </Grid>

      </Grid>
    </Grid>

  );
}
