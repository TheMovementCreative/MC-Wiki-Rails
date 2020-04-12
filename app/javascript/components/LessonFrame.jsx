import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import ListFrameListItem from "./LessonFrameListItem";


const LessonFrame = ({ lesson, index, lessonChallenges }) => {

  
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
        {lessonChallenges.map((challenge, index) => (
          <React.Fragment><ListFrameListItem key={challenge.id} challenge={challenge} index={index} /><hr/></React.Fragment>
        ))}
        
      </div>
    </React.Fragment>
  );
};

export default LessonFrame;
