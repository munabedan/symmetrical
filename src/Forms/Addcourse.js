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


import Link from '@material-ui/core/Link';

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

    subtitles: {
        margin: theme.spacing(1),
        color:'black',
        fontWeight:'bold',
    },
checkbox:{
},
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(1)

        //alignSelf: 'flex-end',
    },
    submit: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        background: 'linear-gradient(45deg, #Ff8664 10%, #FF4965 90%)',

    },
    link: {
        float: "right"
    },
});

class Addcourse extends React.Component {

    state = {

        courseName: '',
        courseId: '',
        roomNumber: '',
        lectureDay: [],
        courseTime: new moment()

    }

    submitHandler = (event) => {
        event.preventDefault();
        let dateObj = this.state.courseTime;
        let time = moment.tz(dateObj, 'UTC').tz('Africa/Nairobi').format(' HH:mm')
        console.log(time);
        this.setState({
            courseTime: time
        }, () => {
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
                <Typography variant="h6" component="h5" align="center">
                    Add a course
</Typography>
                <form onSubmit={this.submitHandler}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} >

                            <TextField
                                required

                                name="courseId"
                                variant="outlined"
                                label="Course code"
                                size="small"

                                onChange={(event) => {
                                    this.setState({
                                        courseId: event.target.value
                                    })
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>

                            <TextField
                                required

                                name="roomNumber"
                                variant="outlined"
                                label="Room number"
                                size="small"

                                onChange={(event) => {
                                    this.setState({
                                        roomNumber: event.target.value
                                    })
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                label="Course name"
                                name="courseName"
                                variant="outlined"
                                size="small"

                                fullWidth
                                onChange={(event) => {
                                    this.setState({
                                        courseName: event.target.value
                                    })
                                }}
                            />

                        </Grid>
                    </Grid>
                    <FormLabel component="legend" className={classes.subtitles}>On which days is your class</FormLabel>
                    <FormGroup >

                        <Grid container alignItems="center">
                            <Grid item>
                                <FormControlLabel
                                    control={<Checkbox
                                        name="mon"
                                        className={classes.checkbox}
                                        onChange={(event) => {
                                            this.setState((prevState) => ({
                                                lectureDay: [...prevState.lectureDay, "mon"]
                                            })
                                            )
                                        }}
                                    />}
                                    label="Monday"
                                />
                            </Grid>
                            <Grid item>
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
                            </Grid>
                            <Grid item>

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
                            </Grid>
                            <Grid item>
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
                            </Grid>
                            <Grid item>
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
                            </Grid>
                            <Grid item>
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
                            </Grid>
                            <Grid item>
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
                            </Grid>
                        </Grid>






                    </FormGroup>





                    <FormLabel component="legend" className={classes.subtitles}>Set time for class</FormLabel>

                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <Grid container
                            spacing={1}
                            direction="column"
                            alignItems="center"
                            justify="center"
                        >
                            <Grid item xs={3}>
                                <TimePicker value={this.state.courseTime}
                                    onChange={this.handleTimeChange}
                                    size="small"

                                />
                            </Grid>
                        </Grid>


                    </MuiPickersUtilsProvider>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Submit
          </Button>

                    <Grid container direction="row"
                        justify="center" >
                        <Grid item xs={10}>
                            <Link onClick={this.redirectToHome} variant="body2" style={{ float: 'right' }}>
                                Don't need to add a course? cancel
              </Link>
                        </Grid>
                    </Grid>

                </form>
            </div>




        );
    }
};


Addcourse.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Addcourse));