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
        margin: theme.spacing(1),
        height: 90,
    },
    paperAbsents: {
        margin: theme.spacing(1),
        height: 90,
        background: 'linear-gradient(45deg, #Ff8664 10%, #FF4965 90%)',

    },
    iconTextAbsents:{
        height:50,
        display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color:'white',

    },
    iconTextTotal:{
        height:50,
        display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color:'#74CEF6',

    },
    iconTextLeaves:{
        height:50,
        display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color:'#ff4965',
        fontWeight:'bolder',
    },
    descriptionText:{
        color:'white',
    },
    
    control: {
        padding: theme.spacing(2),
    },
}));

function Dashcards(props) {

    const classes = useStyles();


    return (



        <Grid direction="row" container spacing={1}>

            <Grid item xs={4} >
                <Paper className={classes.paperAbsents}>
                    <Grid container direction='column' alignItems="center" 
                    >
                        <Grid item className={classes.iconTextAbsents} >
                            <Typography variant="h5" >
                                {props.absentsIncurred}
                                </Typography>
                        </Grid>
                        <Grid item className={classes.descriptionText}>
                            <Typography variant="subtitle1">
                                Absents
                                </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={4} >
                <Paper className={classes.paper}>
                    <Grid container direction='column' alignItems="center" 
                    >
                        <Grid item className={classes.iconTextLeaves} >
                            <Typography variant="h5" >
                                {props.leavesLeft}
                                </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">
                                leaves
                                </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={4} >
                <Paper className={classes.paper}>
                    <Grid container direction='column' alignItems="center" 
                    >
                        <Grid item className={classes.iconTextTotal} >
                            <Typography variant="h5" 
                            children={props.totalClasses}
                            >
                                
                                </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">
                                Total
                                </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>

    )
}

export default Dashcards
