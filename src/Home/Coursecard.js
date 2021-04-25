import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';


import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {

        //display: 'flex',
        marginBottom:theme.spacing(2),
        minHeight:80,
    },
    courseTitle:{
        paddingTop:theme.spacing(1),
        paddingLeft:theme.spacing(1),
        color:'black',

    },
    courseDescription:{
        paddingTop:theme.spacing(1),
        paddingLeft:theme.spacing(1),
        color: "grey",
        fontSize:12,


    },
    
    leavesicontext: {
        color: "#ff8664",
        fontWeight: "bolder",
        textAlign: "center",
        fontFamily: "roboto",
        fontSize:24,
    },
    absentsicontext: {
        color: 'black',
        fontWeight: "bolder",
        textAlign: "center",
        fontFamily: "roboto",
        fontSize:24,
    },

    descriptiontext: {
        fontFamily: "roboto",
        fontSize:12,
        color: "grey",
        textAlign:'center',

    }

}))

const Coursecard = (props) => {

    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        console.log("clicked");
        history.push('/' + props.courseCode)
    }

    return (

        <Card className={classes.root} onClick={handleClick}>
            <Grid container>
                <Grid item xs={6}>
                    <Typography component="p"
                        variant="subtitle2"
                        children={props.courseName}
                        className={classes.courseTitle}
                        noWrap={true}

                    >
                    </Typography>
                    <Typography variant="subtitle2"
                        children={props.courseCode}
                        className={classes.courseDescription}

                        >
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6"
                        children={props.leavesLeft}
                        className={classes.leavesicontext}

                    >
                    </Typography>
                    <Typography variant="subtitle2"
                        children="LEAVES"
                        className={classes.descriptiontext}

                    >
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6"
                        children={props.absentsIncurred}
                        className={classes.absentsicontext}

                    >
                    </Typography>
                    <Typography variant="subtitle2"
                        children="ABSENTS"
                        className={classes.descriptiontext}

                    >
                    </Typography>
                </Grid>
            </Grid>

          

        </Card>
    )
};

export default Coursecard;


/*
Call:
    import Coursecard from './Coursecard/Coursecard';

    <Coursecard courseName="economics" courseCode="econ201" leavesLeft="6" absentsIncurred="5" ></Coursecard>


*/
