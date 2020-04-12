import React, { useState } from "react";
import PropTypes, { string } from "prop-types";

const MovementDiceCard = ({ challenge }) => {
  return (
    <React.Fragment>
      <div
        className="col-md-4"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="container-fluid" style={{ borderBottomStyle: "solid", borderBottomWidth:'1px'}}>
          <h3>{challenge.activity_title}</h3>
        </div>
        <div className="container-fluid">
          <p>{challenge.purpose}</p>
        </div>

        <a
          href={"/challenges/" + challenge.id}
          className="btn btn-primary btn-sm"
        >
          View Full Challenge <small>&#x25B6;</small> <small>&#x25B6;</small>{" "}
          <small>&#x25B6;</small>
        </a>
      </div>

      <div className="embed-responsive embed-responsive-16by9 col-md-6 mt-2">
        <iframe
          className="embed-responsive-item"
          src={
            !challenge.video_url
              ? "https://www.youtube.com/embed/JVN7OeOLMvM"
              : challenge.video_url
          }
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default MovementDiceCard;
