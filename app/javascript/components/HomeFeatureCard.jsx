import React, { useState } from "react";
import PropTypes, { string } from "prop-types";

const HomeFeatureCard = ({ type, featuredItem }) => {
  const acceptedTypes = ["CHALLENGE", "LESSON", "COURSE"];
  if (!type) {
    return <h1>Type Required!</h1>;
  } else if (!acceptedTypes.includes(type.toUpperCase())) {
    return <h1>Type {type} does not exist</h1>;
  } else if (type === "course") {
    return <h1> {type}s coming soon! </h1>;
  } else {
    return (
      <div
        className="container-fluid row"
        style={{
          height: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        <div className="container-fluid col" style={{}}>
          <div>
            <h3>{featuredItem.activity_title || featuredItem.lesson_name}</h3>
          </div>
          <hr />
          <p>{featuredItem.purpose}</p>
        </div>
        <div className="embed-responsive embed-responsive-16by9 container-fluid col-md-auto">
          <iframe
            className="embed-responsive-item"
            src={
              !featuredItem.video_url
                ? "https://www.youtube.com/embed/JVN7OeOLMvM"
                : featuredItem.video_url
            }
          ></iframe>
        </div>
        <div
          className="container-fluid py-1 col"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          {" "}
          {type.toUpperCase() === "CHALLENGE" && (
            <a
              href={"/challenges/" + featuredItem.id}
              className="btn btn-primary btn-sm"
            >
              View Full Challenge <small>&#x25B6;</small>{" "}
              <small>&#x25B6;</small> <small>&#x25B6;</small>
            </a>
          )}
          {type.toUpperCase() === "LESSON" && (
            <a
              href={"/lessons/" + featuredItem.id}
              className="btn btn-primary btn-sm"
            >
              View Full Lesson <small>&#x25B6;</small> <small>&#x25B6;</small>{" "}
              <small>&#x25B6;</small>
            </a>
          )}
        </div>
      </div>
    );
  }
};

export default HomeFeatureCard;
