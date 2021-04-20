import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        //height: 100,
        //width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

function Dashcards() {

    const classes = useStyles();


    return (
        


        <Grid direction="row" container spacing={1}>
            <Grid item xs={4} >
                <Paper className={classes.paper}>
                    <Grid direction="column" justify="center" alignItems="center" spacing={2} container>
                        <Grid item xs={10}>
                            <Typography variant="h5" >
                                03
                                </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant="subtitle1">
                                Absents
                                </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Grid direction="column" justify="center" alignItems="center" spacing={2} container>
                        <Grid item xs={10}>
                            <Typography variant="h5" >
                                06
                                </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant="subtitle1">
                                leaves left
                                </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <Grid direction="column" justify="center" alignItems="center" spacing={2} container>
                        <Grid item xs={10}>
                            <Typography variant="h5" >
                                33
                                </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant="subtitle1">
                                Total classes
                                </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>

    )
}

export default Dashcards
