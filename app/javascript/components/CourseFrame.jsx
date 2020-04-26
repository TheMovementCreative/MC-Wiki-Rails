import React, { useState,useEffect } from "react";
import PropTypes, { string } from "prop-types";
import LessonInfo from './LessonInfo';
import LessonFrame from './LessonFrame';
import * as Constants from '../constants';
import axios from 'axios';




const CourseFrame = ({lessonIDs}) => {

const [isCollapsed, setIsCollapsed] = useState(true);


const [course, setCourse] = useState();
const [coursePlans, setCoursePlans] = useState([]);

const fetchCourse = async () => {
  const resultCourse = await axios(
    Constants.BASEURL + "/api/courses/" + CourseID
  );
  const resultCoursePlan = await axios(
    Constants.BASEURL + "/api/course_plans/?course_id=" + CourseID
  );
  setCourse(resultCourse.data);
  setCoursePlans(resultCoursePlan.data);
};

useEffect(() => {
  fetchCourse();
}, []);



return(
<React.Fragment>
{lessonIDs.map((lessonID, lessonIndex) => (
<div key={lessonIndex} className= "container-fluid">
    


    
    <LessonInfo lessonID={lessonID} index={lessonIndex} listed={true}/>

    <br/>

    <div className="container-fluid">
    <button className="btn tmc-bg-dk-blu tmc-white btn-block btn-sm" type="button" onClick={() => setIsCollapsed(!isCollapsed)}>
        <div style={{whiteSpace: 'pre'}}><sub><small> &#x25bc;</small></sub>           See Lesson            <sub><small>&#x25bc;</small></sub></div>
    </button> 
    </div>

    <hr/>

    {!isCollapsed && <div className="container-fluid">

    <LessonFrame lessonID={lessonID} index={lessonIndex}/>
    </div>}

    <br/>


</div>))}
</React.Fragment>



);}

export default CourseFrame;
