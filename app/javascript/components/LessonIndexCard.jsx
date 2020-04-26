import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import logo from "../../assets/images/MC_Logo.png";


const LessonIndexCard = ({ lesson }) => {

    return (
        <div
          className="card mb-4 col-sm"
          style={{
            minWidth: "18rem",
            maxWidth: "80%",
            boxShadow: "10px 10px 5px grey",
          }}
        >
          <img
            className="card-img-top"
            src={logo}
            alt="Card image cap"
            style={{ maxWidth: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title"> {lesson.lesson_name} </h5>
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
                {lesson.details && <small className="muted text">
                  Details: {lesson.details.slice(0,35)}{"......"}
                </small>}
              </li>
            </ul>
    
            <div>
              <a href={lesson.id} className="btn btn-primary">
                View
              </a>
            </div>
          </div>
        </div>
      );


}

export default LessonIndexCard;