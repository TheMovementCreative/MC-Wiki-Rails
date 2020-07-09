import React, { useState, useEffect } from "react";
import PropTypes, { string } from "prop-types";
import ListFrameListItem from "./LessonFrameListItem";
import LessonAux from "./LessonAux";
import * as Constants from "../constants";
import axios from "axios";

const LessonFrame = ({ lessonID, index }) => {
  const [lesson, setLesson] = useState();
  const [lessonPlans, setLessonPlans] = useState([]);

  const fetchLesson = async () => {
    setLesson(null);
    setLessonPlans(null);
    const resultLesson = await axios(
      Constants.BASEURL + "/api/lessons/" + lessonID
    );
    const resultLessonPlan = await axios(
      Constants.BASEURL + "/api/lesson_plans/?lesson_id=" + lessonID
    );
    setLesson(resultLesson.data);
    setLessonPlans(resultLessonPlan.data);
  };

  useEffect(() => {
    fetchLesson();
  }, []);

  if (lesson && lessonPlans) {

    if(lesson.id !== lessonID){fetchLesson()}

    const warmUp = lessonPlans.find(
      (plan) => plan.activity_category === "warmup"
    );
    const coolDown = lessonPlans.find(
      (plan) => plan.activity_category === "cooldown"
    );
    const homeWork = lessonPlans.find(
      (plan) => plan.activity_category === "homework"
    );

    
    
    return (
      <React.Fragment key={lesson.id + index}>
        <div
          className="container-fluid row nested-row"
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
              whiteSpace: "pre-line"
            }}
          >
            <p>
              <strong> Overview: </strong>
              <br /> {lesson.details}{" "}
            </p>
          </div>
        </div>

        <hr />

        {warmUp && (
          <div>
            <LessonAux lessonPlan={warmUp} />
            <hr />
          </div>
        )}

        <div className="container-fluid">
          {lessonPlans.map((lessonPlan, challengeIndex) => (
            <React.Fragment>
              {!lessonPlan.activity_category && (
                <div key={challengeIndex}>
                  <ListFrameListItem
                    challengeID={lessonPlan.challenge_id}
                    index={challengeIndex}
                  />
                  <hr />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        {coolDown && (
          <div>
            {" "}
            <hr />
            <LessonAux lessonPlan={coolDown} />
            <br />
          </div>
        )}
        {homeWork && (
          <div>
            {" "}
            <hr />
            <LessonAux lessonPlan={homeWork} /> <br />
          </div>
        )}
        <br />
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default LessonFrame;
