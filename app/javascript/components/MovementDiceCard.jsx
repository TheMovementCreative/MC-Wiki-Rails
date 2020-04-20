import React, { useState } from "react";
import PropTypes, { string } from "prop-types";

const MovementDiceCard = ({ challenge }) => {
  return (
    <React.Fragment>
      <div
        className="col-12 col-md-4"
        
      >
        <h3>{challenge.name} </h3><hr/>
      
        <p>{challenge.purpose}</p>
      </div>

      <div className="col-12 col-md-8 center-flex">
        <div className="embed-responsive embed-responsive-16by9 mt-2">
          <iframe
            className="embed-responsive-item"
            src={
              !challenge.video_url
                ? "https://www.youtube.com/embed/JVN7OeOLMvM"
                : challenge.video_url
            }
          ></iframe>
        </div>
      </div>
      <footer className="container-fluid text-center">
        {" "}
        <a
          href={"/challenges/" + challenge.id}
          className="btn btn-primary btn-sm my-2"
        >
          View Full Challenge <small>&#x25B6;</small> <small>&#x25B6;</small>{" "}
          <small>&#x25B6;</small>
        </a>
      </footer>
    </React.Fragment>
  );
};

export default MovementDiceCard;
