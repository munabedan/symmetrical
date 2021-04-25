import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


import MomentUtils from '@date-io/moment';
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment-timezone';
import Button from '@material-ui/core/Button';



import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import addToDb from '../Db/addToDb';
import { withRouter } from 'react-router-dom'

const styles = theme => ({
    appbar: {
        background: 'linear-gradient(45deg, #Ff8664 10%, #FF4965 90%)',
        minHeight: 90,
        marginBottom: theme.spacing(2),
    },
    toolbar: {
        //minHeight: 80,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        background: 'linear-gradient(45deg, #Ff8664 10%, #FF4965 90%)',

    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1)

        //alignSelf: 'flex-end',
    },
});

class Addcourse extends React.Component {

    state = {

        courseName: '',
        courseId: '',
        roomNumber: '',
        lectureDay: [],
        courseTime:new moment()

    }

    submitHandler = (event) => {
        event.preventDefault();
        let dateObj=this.state.courseTime;
        let time=moment.tz(dateObj, 'UTC').tz('Africa/Nairobi').format(' HH:mm:ss')
        console.log(time);
        this.setState({
            courseTime: time
        },()=>{
            console.log(this.state)

            addToDb("test", "coursesstore", this.state)
            this.redirectToHome()

        })



    }

    redirectToHome = () => {
        const { history } = this.props;
        if (history) history.push("/")
    }

    handleTimeChange = (dateObj) => {
        
        this.setState({
            courseTime: dateObj
        })
      };

    render() {

        const { classes } = this.props;

        return (
            <div>
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar className={classes.toolbar}>

                        <Typography className={classes.title} variant="h5" noWrap>
                            Blend
         </Typography>


                    </Toolbar>
                </AppBar>

                <form onSubmit={this.submitHandler}>
                    <Grid container>
                        <Grid item xs={6}>

                            <TextField
                                name="courseId"
                                variant="outlined"
                                label="Course code"
                                onChange={(event) => {
                                    this.setState({
                                        courseId: event.target.value
                                    })
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>

                            <TextField
                                name="roomNumber"
                                variant="outlined"
                                label="Room number"
                                onChange={(event) => {
                                    this.setState({
                                        roomNumber: event.target.value
                                    })
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="courseName"
                                variant="outlined"
                                label="Course name"
                                fullWidth
                                onChange={(event) => {
                                    this.setState({
                                        courseName: event.target.value
                                    })
                                }}
                            />

                        </Grid>
                    </Grid>
                    <FormLabel component="legend">On which days is your class</FormLabel>

                    <FormGroup >
                        <FormControlLabel
                            control={<Checkbox
                                name="mon"
                                onChange={(event) => {
                                    this.setState((prevState) => ({
                                        lectureDay: [...prevState.lectureDay, "mon"]
                                    })
                                    )
                                }}
                            />}
                            label="Monday"
                        />
                        <FormControlLabel
                            control={<Checkbox
                                name="tue"
                                onChange={(event) => {
                                    this.setState((prevState) => ({
                                        lectureDay: [...prevState.lectureDay, "tue"]
                                    })
                                    )
                                }}
                            />}
                            label="Tuesday"
                        />
                        <FormControlLabel
                            control={<Checkbox
                                name="wed"
                                onChange={(event) => {
                                    this.setState((prevState) => ({
                                        lectureDay: [...prevState.lectureDay, "wed"]
                                    })
                                    )
                                }}
                            />}
                            label="Wednesday"
                        />
                        <FormControlLabel
                            control={<Checkbox
                                name="thr"
                                onChange={(event) => {
                                    this.setState((prevState) => ({
                                        lectureDay: [...prevState.lectureDay, "thr"]
                                    })
                                    )
                                }}
                            />}
                            label="Thursday"
                        />
                        <FormControlLabel
                            control={<Checkbox
                                name="fri"
                                onChange={(event) => {
                                    this.setState((prevState) => ({
                                        lectureDay: [...prevState.lectureDay, "fri"]
                                    })
                                    )
                                }}
                            />}
                            label="Friday"
                        />
                        <FormControlLabel
                            control={<Checkbox
                                name="sat"
                                onChange={(event) => {
                                    this.setState((prevState) => ({
                                        lectureDay: [...prevState.lectureDay, "sat"]
                                    })
                                    )
                                }}
                            />}
                            label="Saturday"
                        />
                        <FormControlLabel
                            control={<Checkbox
                                name="sun"
                                onChange={(event) => {
                                    this.setState((prevState) => ({
                                        lectureDay: [...prevState.lectureDay, "sun"]
                                    })
                                    )
                                }}
                            />}
                            label="Sunday"
                        />
                    </FormGroup>




                    <br></br>


                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <TimePicker value={this.state.courseTime}
                                     onChange={this.handleTimeChange}

                        />

                    </MuiPickersUtilsProvider>
                    <br></br>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit">
                        Submit
                    </Button>
                    <Button
                        size="small"
                        onClick={this.redirectToHome}>
                        cancel
                    </Button>

                </form>
            </div>




        );
    }
};


Addcourse.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Addcourse));