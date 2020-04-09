import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import ChallengeIndexCard from "./ChallengeIndexCard";

const ChallengeIndex = ({ challenges }) => {
  const [searchCollapse, setSearchCollapse] = useState(true);
  const [searchQueryTitle, setSearchQueryTitle] = useState("");
  const [searchQuerySkill, setSearchQuerySkill] = useState("");
  const [searchQuerySpace, setSearchQuerySpace] = useState("");
  const [searchQueryTools, setSearchQueryTools] = useState("");

  let filteredChallenges = challenges.filter((challenge) => {
    if (!searchQueryTitle){
      return challenge;
    } else {
      return (
        challenge.activity_title
          .toUpperCase()
          .indexOf(searchQueryTitle.toUpperCase()) !== -1
      );
    }
  });
  if(filteredChallenges){
  filteredChallenges = filteredChallenges.filter((challenge) => {
    if (!searchQuerySkill){
      return challenge;
    }
    else if(!challenge.actions_movements){
        return;
    } 
    else {
      return (
        challenge.actions_movements
          .toUpperCase()
          .indexOf(searchQuerySkill.toUpperCase()) !== -1
      );
    }
  });}
  if(filteredChallenges){
    filteredChallenges = filteredChallenges.filter((challenge) => {
      if (!searchQuerySpace){
        return challenge;
      }
      else if(!challenge.space){
          return;
      } 
      else {
        return (
          challenge.space
            .toUpperCase()
            .indexOf(searchQuerySpace.toUpperCase()) !== -1
        );
      }
    });}
    if(filteredChallenges){
        filteredChallenges = filteredChallenges.filter((challenge) => {
          if (!searchQueryTools){
            return challenge;
          }
          else if(!challenge.tools){
              return;
          } 
          else {
            return (
              challenge.tools
                .toUpperCase()
                .indexOf(searchQueryTools.toUpperCase()) !== -1
            );
          }
        });}

  return (
    <React.Fragment>
        <button
            className="btn-link tmc-dk-blu"
            style={{
              outline: "none",
              backgroundColor: "transparent",
              border: "1px",
              textDecoration: 'none',
            }}
            onClick={() => setSearchCollapse(!searchCollapse)}
          >
           <h4> {searchCollapse ? "Search " : "Search "} {searchCollapse && <small>&#x25B6;</small>}{!searchCollapse && <small>&#x25bc;</small>}</h4>
          </button>
          {!searchCollapse && ( 
      <div className="container-fluid row">
         
        <div className="col-sm">
            <strong>Activity Name:</strong>
            <br/>
          <input
            type="text"
            value={searchQueryTitle}
            onChange={(event) => setSearchQueryTitle(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
            <strong>Skill:</strong>
            <br/>
          <input
            type="text"
            value={searchQuerySkill}
            onChange={(event) => setSearchQuerySkill(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
            <strong>Space:</strong>
            <br/>
          <input
            type="text"
            value={searchQuerySpace}
            onChange={(event) => setSearchQuerySpace(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
            <strong>Tools:</strong>
            <br/>
          <input
            type="text"
            value={searchQueryTools}
            onChange={(event) => setSearchQueryTools(event.target.value)}
          ></input>
        </div>
      </div>
    
        ) }
        <hr/>
      <div className="card-deck" style={{overflow: 'scroll', maxHeight: '80%' }} >
        {filteredChallenges.map((challenge, index) => (
          <ChallengeIndexCard key={index} challenge={challenge} index={index} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ChallengeIndex;
