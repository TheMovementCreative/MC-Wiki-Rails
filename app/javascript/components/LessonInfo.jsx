import React, { useState, useEffect } from "react";
import PropTypes, { string } from "prop-types";
import { render } from "react-dom";
import * as Constants from '../constants'
import axios from 'axios'

const LessonInfo = ({ lessonID, index, listed}) => {

  const [lesson, setLesson] = useState();

  const fetchLesson = async () => {
    setLesson(null);
    const resultLesson = await axios(Constants.BASEURL+"/api/lessons/"+lessonID);
    setLesson(resultLesson.data);
    
  };

  useEffect(() => {

    fetchLesson();
  
  }, []);

  
    if(lesson){
      if(lesson.id !== lessonID){fetchLesson()}
    return(
        <React.Fragment>
        <div className="container-fluid tmc-bg-blu tmc-white" style = {{display: 'flex', alignItems: 'center'}}>
        <span>
            <h3 style= {{color: 'white'}}> {listed && <React.Fragment>Day {index +1} : </React.Fragment>} {lesson.name}</h3>
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
);}
else{return null;} 
}

export default LessonInfo;