import React from 'react';
import './Addcourseform.css';

import addToDb from '../Db/addToDb';

class Addcourse extends React.Component {

    state = {

        courseName: '',
        courseId: '',
        roomNumber: ''

    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)

        addToDb("test","coursesstore",this.state)

        this.props.handler()
        
    }
    render() {
        return (
            <div>
                <div className="Addcourseform">
                    <div className="form-container">
                        <form onSubmit={this.submitHandler}>
                            <h1>Add a course</h1>
                            <label for="courseName" ><b>Course name</b></label>
                            <input id="courseNameInput" type="text" placeholder="Enter the course name" name="courseName" required
                                onChange={(event) => {
                                    this.setState({
                                        courseName: event.target.value
                                    })
                                }}
                            />


                            <label for="courseId" ><b>Course ID</b></label>
                            <input id="courseIdInput" type="text" placeholder="Enter the course ID" name="courseId" required
                                onChange={(event) => {
                                    this.setState({
                                        courseId: event.target.value
                                    })
                                }}
                            />

                            <label for="roomNumber" ><b>Room Number</b></label>
                            <input id="roomNumberInput" type="text" placeholder="Enter the roomNumber" name="roomNumber" required

                                onChange={(event) => {
                                    this.setState({
                                        roomNumber: event.target.value
                                    })
                                }}
                            />


                            <button className="btn" id="submit">Save</button>
                            <button type="button" className="btn cancel" id="closeForm"
                                onClick={this.props.handler}
                            >Cancel</button>
                        </form>
                    </div>
                </div>
            </div>



        );
    }
};
export default Addcourse;