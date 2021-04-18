import React from 'react';


function Coursecard(course) {

console.log(course.course.courseName)


  return (
    <div className="Coursecard">
      <p>hello {course.course.courseName} </p>
    </div>
  );


}

export default Coursecard;
