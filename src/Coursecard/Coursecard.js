import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

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

const Coursecard = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick=()=>{
    console.log("clicked");
    history.push('/course/'+ props.courseId)
    }

    return (

        <Card className={classes.root} onClick={handleClick}>
            <div className={classes.lectureDetails}>
                <CardContent className={classes.content}>
                    <Typography component="p"
                        variant="subtitle2"
                        children={props.courseName}
                    >
                    </Typography>
                    <Typography variant="subtitle2"
                        children={props.courseCode}
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

export default Coursecard;


/*
Call:
    import Coursecard from './Coursecard/Coursecard';

    <Coursecard courseName="economics" courseCode="econ201" leavesLeft="6" absentsIncurred="5" ></Coursecard>


*/
