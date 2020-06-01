import React, { useState,useEffect, useRef } from "react";
import PropTypes, { string } from "prop-types";
import LessonInfo from './LessonInfo';
import LessonFrame from './LessonFrame';
import CourseLessonMenuItem from './CourseLessonMenuItem'

import * as Constants from '../constants';
import axios from 'axios';




const CourseFrame2 = ({courseID}) => {

const [isCollapsed, setIsCollapsed] = useState(true);
const [displayItemIndex, setDisplayItemIndex] = useState();
const[displayLessonID, setDisplayLessonID] = useState();
const displayRef = useRef(null);

const [course, setCourse] = useState();
const [coursePlans, setCoursePlans] = useState([]);

const fetchCourse = async () => {
    const resultCourse = await axios(
      Constants.BASEURL + "/api/courses/" + courseID
    );
    const resultCoursePlan = await axios(
      Constants.BASEURL + "/api/course_plans/?course_id=" + courseID
    );
    setCourse(resultCourse.data);
    setCoursePlans(resultCoursePlan.data);
  };
  
  useEffect(() => {
    fetchCourse();
    
  }, []);


  const menuSelect= (menuIndex) =>{

    setDisplayItemIndex(menuIndex);
    setDisplayLessonID(coursePlans[menuIndex].lesson_id)

    if(isCollapsed){setIsCollapsed(false);}

    setTimeout(()=>window.scrollTo(0,(displayRef.current.offsetTop + (displayRef.current.offsetHeight/8))), 200);
  }



if(course){
return(
<React.Fragment>

<div className="row container-fluid tmc-bg-dk-blu">
    <div className="col-12 nest-col course-info  tmc-bg-white">
        <div className="row nested-row">
            <div className="col-12 title tmc-bg-dk-blu tmc-orng"><h3 className="tmc-orng">{course.name}</h3> <sup><em> By: {course.author}</em></sup></div>
            <div className="col-12 purpose tmc-bg-orng py-2 mb-1"><strong className="tmc-white">{course.purpose}</strong></div>
            <div className="col-12 nest-col">
                <div className="row nested-row">
                    <div className="col-12 col-sm-6 video"> <div className="embed-responsive embed-responsive-16by9 col-sm">
            <iframe
              className="embed-responsive-item"
              src={
                !course.video_url
                  ? "https://www.youtube.com/embed/JVN7OeOLMvM"
                  : course.video_url
              }
            ></iframe>
          </div></div>
                    <div className="col-12 col-sm-6 details"><h3> Details </h3><hr/><p>{course.details}</p></div>
                    
                </div>
            </div>

        </div>
        <hr/>
    </div>
    <div className="col-12 nest-col lesson-displayer">
        <div className="row nested-row nest-col ">
            <div className="col-12 nest-col lesson-menu ">
                <div className="row ">
                {coursePlans.map((coursePlan, lessonIndex) => (
                    <div key={lessonIndex} className="col-12 col-sm-6 col-md-4  mb-2 " onClick={()=>menuSelect(lessonIndex)}>
                        <CourseLessonMenuItem lessonID={coursePlan.lesson_id} index={lessonIndex}/>
                    </div>))}
                </div>
            </div>
            
            {!isCollapsed && <div ref={displayRef} className="col-12 nest-col lesson-view shadow-box tmc-bg-white">
                <LessonInfo lessonID={displayLessonID} index={displayItemIndex} listed={true}/>
                <LessonFrame lessonID={displayLessonID} index={displayItemIndex}/>
            </div>}
        </div>
    </div>
</div>


</React.Fragment>
);} else{return null;}



}

export default CourseFrame2;
