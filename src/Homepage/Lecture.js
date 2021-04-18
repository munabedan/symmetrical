import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        
        display: 'flex',
        marginBottom:12,
    },
    lectureDetails: {
        display: 'flex',
        flexDirection: 'column',
        

    },
    content: {
        flex: 1,
    },
    
    icontext: {
        color: "#ff4965",
        fontWeight: "bolder",
        textAlign: "center",
        fontFamily: "roboto"
    },
    descriptiontext: {
        fontFamily: "roboto",
        fontWeight: "400",
        color:"dimgrey"
    }

})

const Lecture = (props) => {
    const classes = useStyles();

    return (

        <Card className={classes.root} >
            <div classname={classes.lectureDetails}>
                <CardContent className={classes.content}>
                    <Typography component="p"
                        variant="subtitle2"
                        children={props.lectureName}
                    >
                    </Typography>
                    <Typography variant="subtitle2"
                        children={props.lectureCode}
                        className={classes.descriptiontext}>
                    </Typography>
                </CardContent>
            </div>

            <div className={classes.leavesDetails}>
                <CardContent className={classes.content}>
                    <Typography variant="h6"
                        children={props.leavesLeft}
                        className={classes.icontext}
                        
                    >
                    </Typography>
                    <Typography variant="subtitle2"
                        children="leaves"
                        className={classes.descriptiontext}

                    >
                    </Typography>
                </CardContent>
            </div>
            <div className={classes.absentsDetails}>
                <CardContent>
                    <Typography variant="h6"
                        children={props.absentsIncurred}
                        className={classes.icontext}

                    >
                    </Typography>
                    <Typography variant="subtitle2"
                        children="absents"
                        className={classes.descriptiontext}
                        
                    >
                    </Typography>
                </CardContent>
            </div>

        </Card>
    )
};

export default Lecture;


/*
Call:
    import Lecture from './Homepage/Lecture';

    <Lecture lectureName="economics" lectureCode="econ201" leavesLeft="6" absentsIncurred="5" ></Lecture>

*/