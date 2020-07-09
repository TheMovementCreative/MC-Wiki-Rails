import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import logo from "../../assets/images/MC_Logo.png";
import '../stylesheets/application.scss'



const ChallengeIndexCard = ({ challenge }) => {
  return (
    <div
      className="card mb-4 col-3 no-pad"
      style={{
        minWidth: "15rem",
        maxWidth: "360px",
        boxShadow: "10px 10px 5px grey",
      }}
    >

      <div className="card-body pad-5" style={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
        <h5 className="card-title"> {challenge.name} </h5>
        <p className="card-text"> {challenge.purpose} </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <small className="muted text">
              Space: {challenge.space} </small>
          </li>
          <li className="list-group-item">
            <small className="muted text">
              Tools: {challenge.tools} </small>
          </li>
          <li className="list-group-item">
            <small className="muted text">
              Skills: {challenge.actions_movements}{" "}
            </small>
          </li>
        </ul>
        <br/>
        <div className="container-fluid mb-2" style={{display:'flex',justifyContent:'center',alignItems:'flex-end'}}>
          <a href={challenge.id} className="btn tmc-bg-blu tmc-white btn-sm">
            View Full Challenge <small>&#x25B6;</small>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChallengeIndexCard;
