import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import { render } from "react-dom";

const LessonInfo = ({ lesson, index, listed}) => {
    return(
        <React.Fragment>
        <div className="container-fluid tmc-bg-blu tmc-white" style = {{display: 'flex', alignItems: 'center'}}>
        <span>
            <h3 style= {{color: 'white'}}> {listed && <React.Fragment>Day {index +1} : </React.Fragment>} {lesson.lesson_name}</h3>
            <sup><em> By:  {lesson.author}  </em></sup>
        </span>
    </div>

    <br />
<div className="container-fluid">
  <p>
    <b> {lesson.purpose} </b>
  </p>
  <hr/>
  <p><strong>Tools Required:</strong><br/>  {lesson.tools}  </p> 
</div>
</React.Fragment>
);
}

export default LessonInfo;