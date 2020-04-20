import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import logo from "../../assets/images/MC_Logo.png";


const LessonIndexCard = ({ lesson }) => {

    return (
      <div
      className="card mb-4 col-3 no-pad"
      style={{
        minWidth: "15rem",
        maxWidth: "360px",
        boxShadow: "10px 10px 5px grey",
      }}
    >
      <img
        className="card-img-top"
        src={logo}
        alt="Card image cap"
        style={{maxHeight:'100%', maxWidth:'100%'}}
        
      />
      <div className="card-body  pad-5" style={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
        <h5 className="card-title"> {lesson.name} </h5>
        <p className="card-text"> {lesson.purpose} </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <small className="muted text">
              Author: {lesson.author} </small>
          </li>
          <li className="list-group-item">
            <small className="muted text">
              Tools: {lesson.tools} </small>
          </li>
          <li className="list-group-item">
            <small className="muted text">
              Activities: {}{" "}
            </small>
          </li>
        </ul>
        <br/>
        <div className="container-fluid" style={{display:'flex',justifyContent:'center',alignItems:'flex-end'}}>
          <a href={lesson.id} className="btn tmc-bg-blu tmc-white btn-sm">
            View Full Lesson <small>&#x25B6;</small><small>&#x25B6;</small><small>&#x25B6;</small>
          </a>
        </div>
      </div>
    </div>
      );


}

export default LessonIndexCard;