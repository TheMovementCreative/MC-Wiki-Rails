import React, { useState, useEffect } from "react";
import PropTypes, { string } from "prop-types";
import ListFrameListItem from "./LessonFrameListItem";
import * as Constants from '../constants';
import axios from 'axios';


const LessonFrame = ({ lessonID, index }) => {

  const [lesson, setLesson] = useState();
  const [lessonPlans, setLessonPlans] = useState([]);

  const fetchLesson = async () => {
    const resultLesson = await axios(Constants.BASEURL+"/api/lessons/"+lessonID);
    const resultLessonPlan = await axios(Constants.BASEURL+"/api/lesson_plans/?lesson_id="+lessonID);
    setLesson(resultLesson.data);
    setLessonPlans(resultLessonPlan.data);
  };

  useEffect(() => {

    fetchLesson();
  
  }, []);
  
  if(lesson){
  return (
    <React.Fragment key={lesson.id + index}>
      <div
        className="container-fluid row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="embed-responsive embed-responsive-16by9 col-sm">
          <iframe
            className="embed-responsive-item"
            src={
              !lesson.video_url
                ? "https://www.youtube.com/embed/JVN7OeOLMvM"
                : lesson.video_url
            }
          ></iframe>
        </div>
        <div
          className="container-fluid col-sm"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p>
            
            <strong> Overview: </strong>
            <br /> {lesson.details}{" "}
          </p>
        </div>
      </div>

      <hr />

      <div className="container-fluid">
        <h3>
          Recomended Warm Up:
          {" "+lesson.warm_up}
        </h3>
      </div>

      <hr />

      <div className="container-fluid">
        {lessonPlans.map((lessonPlan, challengeIndex) => (
          <div key={lessonPlan.challengeID} ><ListFrameListItem  challengeID={lessonPlan.challenge_id} index={challengeIndex} /><hr/></div>
        ))}
        
      </div>
    </React.Fragment>
  );}
  else{return null;}
};

export default LessonFrame;
