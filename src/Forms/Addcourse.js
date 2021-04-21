import React from 'react';

import addToDb from '../Db/addToDb';
import {withRouter} from 'react-router-dom'

class Addcourse extends React.Component {

    state = {

        courseName: '',
        courseId: '',
        roomNumber: '',
        lectureDay: []

    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)

        addToDb("test", "coursesstore", this.state)

        this.redirectToHome()

    }
    redirectToHome = () => {
        const {history}=this.props;
       if(history) history.push("/")
    }
    render() {


        return (
            <div>
                <div className="Addcourseform">
                    <div className="form-container">
                        <form onSubmit={this.submitHandler}>
                            <h1>Add a course</h1>
                            <label htmlFor="courseName" ><b>Course name</b></label>
                            <input id="courseNameInput" type="text" placeholder="Enter the course name" name="courseName" required
                                onChange={(event) => {
                                    this.setState({
                                        courseName: event.target.value
                                    })
                                }}
                            />


                            <label htmlFor="courseId" ><b>Course ID</b></label>
                            <input id="courseIdInput" type="text" placeholder="Enter the course ID" name="courseId" required
                                onChange={(event) => {
                                    this.setState({
                                        courseId: event.target.value
                                    })
                                }}
                            />

                            <label htmlFor="roomNumber" ><b>Room Number</b></label>
                            <input id="roomNumberInput" type="text" placeholder="Enter the roomNumber" name="roomNumber" required

                                onChange={(event) => {
                                    this.setState({
                                        roomNumber: event.target.value
                                    })
                                }}
                            />
                            <br></br>
                            <input type="checkbox" id="mon" name="mon"
                                onChange={(event) => {
                                    this.setState((prevState) => ({
                                        lectureDay: [...prevState.lectureDay, "mon"]
                                    })
                                    )
                                }}

                            />
                            <label htmlFor="mon"> Monday</label>

                            <br></br>

                            <input type="checkbox" id="tue" name="tue"
                                onChange={(event) => {
                                    this.setState((prevState) => ({
                                        lectureDay: [...prevState.lectureDay, "tue"]
                                    })
                                    )
                                }}
                            />
                            <label htmlFor="tue"> Tuesday</label>

                            <br></br>

                            <input type="checkbox" id="wed" name="wed"
                                onChange={(event) => {
                                    this.setState((prevState) => ({
                                        lectureDay: [...prevState.lectureDay, "wed"]
                                    })
                                    )
                                }}
                            />
                            <label htmlFor="wed"> Wednesday</label>

                            <br></br>

                            <input type="checkbox" id="thu" name="thu"
                                onChange={(event) => {
                                    this.setState((prevState) => ({
                                        lectureDay: [...prevState.lectureDay, "thu"]
                                    })
                                    )
                                }}
                            />
                            <label htmlFor="thu"> Thursday</label>

                            <br></br>

                            <input type="checkbox" id="fri" name="fri"
                                onChange={(event) => {
                                    this.setState((prevState) => ({
                                        lectureDay: [...prevState.lectureDay, "fri"]
                                    })
                                    )
                                }}
                            />
                            <label htmlFor="fri"> Friday</label>

                            <br></br>

                            <input type="checkbox" id="sat" name="sat"
                                onChange={(event) => {
                                    this.setState((prevState) => ({
                                        lectureDay: [...prevState.lectureDay, "sat"]
                                    })
                                    )
                                }}
                            />
                            <label htmlFor="sat"> Saturday</label>

                            <br></br>

                            <input type="checkbox" id="sun" name="sun"
                                onChange={(event) => {
                                    this.setState((prevState) => ({
                                        lectureDay: [...prevState.lectureDay, "sun"]
                                    })
                                    )
                                }}
                            />
                            <label htmlFor="sun"> Sunday</label>

                            <br></br>

                            <label htmlFor="appt">Choose a time for your meeting:</label>

                            <input type="time" id="appt" name="appt" required
                                onChange={(event) => {
                                    this.setState({
                                        lectureTime: event.target.value
                                    })
                                }}
                            />
                            <br></br>

                            <button className="btn" id="submit">Save</button>
                            <button type="button" className="btn cancel" id="closeForm"
                                onClick={this.redirectToHome}
                            >Cancel</button>
                        </form>
                    </div>
                </div>
            </div>



        );
    }
};
export default withRouter(Addcourse);