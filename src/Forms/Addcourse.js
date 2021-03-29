import React from 'react';
import './Addcourseform.css';

class Addcourse extends React.Component {
    render() {
        return (
            <div>
              

                <div className="Addcourseform">
                    <div className="form-container">
                        <h1>Add a course</h1>
                        <label for="courseName" ><b>Course name</b></label>
                        <input id="courseNameInput" type="text" placeholder="Enter the course name" name="courseName" required />


                        <label for="courseId" ><b>Course ID</b></label>
                        <input id="courseIdInput" type="text" placeholder="Enter the course ID" name="courseId" required />

                        <label for="roomNumber" ><b>Room Number</b></label>
                        <input id="roomNumberInput" type="text" placeholder="Enter the roomNumber" name="roomNumber" required />

                        <button className="btn" id="submit">Save</button>
                        <button type="button" className="btn cancel" id="closeForm"
                            onClick={this.props.handler}
                        >Cancel</button>

                    </div>
                </div>
            </div>



        );
    }
};
export default Addcourse;