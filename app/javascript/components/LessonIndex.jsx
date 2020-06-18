import React, { useState, useEffect } from "react";
import PropTypes, { string } from "prop-types";
import LessonIndexCard from "./LessonIndexCard";
import axios from 'axios';
import * as Constants from '../constants';

const LessonIndex = ({subType}) => {


const [lessons, setLessons] = useState([]);

const fetchLessons = async () => {
  const resultLessons = await axios( Constants.BASEURL+"/api/lessons/?publish=true&sub="+subType);
  setLessons(resultLessons.data);
};

useEffect(() => {

  fetchLessons();

}, []);


if(lessons){

  let filteredLessons = lessons.map((lesson)=>{
      return lesson;
  });
  return(

      <div
      className="card-deck row nested-row"
    >
      {filteredLessons.map((lesson, index) => (
        <LessonIndexCard key={index} lesson={lesson} index={index} />
      ))}
    </div>

  );}else{return null;}

}

export default LessonIndex;