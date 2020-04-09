import React, { useState } from "react";
import PropTypes, { string } from "prop-types";

const ChallengeIndexCard = ({ challenge }) => {
    return(

<div className="card mb-4 col-sm" style={{minWidth: '18rem', maxWidth: '80%', boxShadow: '10px 10px 5px grey',}} >
                  <img className="card-img-top" src=".../assets/MC_Logo.png" alt="Card image cap" style={{maxWidth: '200px'}} />
                  <div className="card-body">
                      <h5 className="card-title"> {challenge.activity_title} </h5>
                      <p className="card-text"> {challenge.purpose} </p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><small className = "muted text">Space:  {challenge.space} </small></li>
                        <li className="list-group-item"><small className = "muted text">Tools:  {challenge.tools} </small></li>
                        <li className="list-group-item"><small className = "muted text">Skills:  {challenge.actions_movements} </small></li>
                      </ul>
                      
                  <div><a href={challenge.id} className="btn btn-primary">View</a></div>
                  </div>
              </div>
    );
}

export default ChallengeIndexCard;