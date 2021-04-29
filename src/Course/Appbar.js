import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Delete from '@material-ui/icons/Delete'
import deleteIndexFromDb from '../Db/deleteIndexFromDb'
import { useHistory } from 'react-router-dom';

/*import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  courseappbar: {
    minHeight: 90,
    background: 'linear-gradient(45deg, #Ff8664 10%, #FF4965 90%)',

  },

}));*/

function Appbar(props) {

  //const classes = useStyles();
  const history = useHistory();

  const redirectClick = () => {
      console.log("clicked");
      history.push('/' )
  }
  const deleteClick = () => {
    deleteIndexFromDb("test", "coursesstore", props.courseId)
    redirectClick()
    
}

  return (
    <Grid container direction="row">
      <Grid item xs={1}>
        <IconButton onClick={redirectClick}>
          <ArrowBack />
        </IconButton>
      </Grid>

      <Grid item xs={9}>
        <Grid container direction="column" >
          <Grid item>
            <Typography variant="h6" align="center">
              {props.courseName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" align="center">
              {props.courseId}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={1}>
        <IconButton onClick={deleteClick}>
          <Delete />
        </IconButton>
      </Grid>




    </Grid>






  );
}

export default Appbar;
