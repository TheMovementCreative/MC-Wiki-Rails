import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import LessonIndexCard from "./LessonIndexCard";

const LessonIndex = ({ lessons }) => {

    let filteredLessons = lessons.map((lesson)=>{
        return lesson;
    });
    return(

        <div
        className="card-deck"
        style={{ overflow: "scroll", maxHeight: "80%" }}
      >
        {filteredLessons.map((lesson, index) => (
          <LessonIndexCard key={index} lesson={lesson} index={index} />
        ))}
      </div>

    );

}

export default LessonIndex;