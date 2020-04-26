import React, { useState, useEffect } from "react";
import PropTypes, { string } from "prop-types";
import { render } from "react-dom";
import * as Constants from '../constants'
import axios from 'axios'

const CourseLessonMenuItem = ({ lessonID, index}) => {

  const [lesson, setLesson] = useState();
  const[gridHeight, setGridHeight] = useState(0);

  const fetchLesson = async () => {
    const resultLesson = await axios(Constants.BASEURL+"/api/lessons/"+lessonID);
    setLesson(resultLesson.data);
    
  };

  useEffect(() => {

    fetchLesson();
  
  }, []);


    if(lesson){
    return(
        <React.Fragment>
            <div className="container-fluid grid-block pad-5 box-rnd shadow-box lesson-menu-item-wrapper tmc-bg-white" style={{height: '100%',wordWrap: 'break-word',}}>
               <h3>Day{" " + (index+1) + ":"} {lesson.name}</h3><br/><p>{lesson.purpose.length > 50 && lesson.purpose.slice(0,50) + '....' || lesson.purpose}</p>
            </div>

        </React.Fragment>);

    }else{return null;}
}
export default CourseLessonMenuItem