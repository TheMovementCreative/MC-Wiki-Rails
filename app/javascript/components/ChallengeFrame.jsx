import React, { useState } from "react";
import PropTypes, { string } from "prop-types";

const ChallengeFrame = ({ challenge, index }) => {
  const [isExpanded, setIsExpanded] = useState("false");

  return (
    <React.Fragment>
      <div
        className="containter-fluid row"
        key={challenge.id + index}
        style={{
          overflow: "auto",
          maxWidth: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="embed-responsive embed-responsive-16by9 col-sm">
          <iframe
            className="embed-responsive-item"
            src={
              !challenge.video_url
                ? "https://www.youtube.com/embed/JVN7OeOLMvM"
                : challenge.video_url
            }
          ></iframe>
        </div>
        <div className="col-sm">
          <ul className="list-group list-group-flush" style={{ fontSize: 14 }}>
            <li className="list-group-item">
              <p>Space:</p> {challenge.space}{" "}
            </li>
            <li className="list-group-item">
              <p>Tools:</p> {challenge.tools}{" "}
            </li>
            <li className="list-group-item">
              <p>Skills:</p> {challenge.actions_movements}{" "}
            </li>
            <li className="list-group-item">
              <p>Goals:</p> {challenge.goal}{" "}
            </li>
            <li className="list-group-item">
              <p>Challenge:</p> {challenge.challenge}{" "}
            </li>
          </ul>
        </div>
      </div>

      <br />
      <div id={"rules" + { index } + { challenge }}>
        <p style={{ whiteSpace: "pre-line" }}>
          {!isExpanded
            ? challenge.rules
            : challenge.rules.slice(0, 50) + ".........."}
        </p>
        <div
          className="container-fluid"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            className="btn-link tmc-dk-blu"
            style={{
              outline: "none",
              backgroundColor: "transparent",
              border: "0px",
            }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {!isExpanded ? " Show Less" : " Show More"}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChallengeFrame;
