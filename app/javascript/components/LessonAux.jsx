import React, { useState, useEffect } from "react";
import PropTypes, { string } from "prop-types";
import axios from "axios";
import * as Constants from "../constants";

const LessonAux = ({ lessonPlan }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [challenge, setChallenge] = useState();

  const fetchChallenge = async () => {
    const resultChallenge = await axios(
      Constants.BASEURL + "/api/challenges/" + lessonPlan.challenge_id
    );
    setChallenge(resultChallenge.data);
  };

  useEffect(() => {
    fetchChallenge();
  }, []);

  if (challenge) {
    return (
      <React.Fragment>
        <div className="row nested-row">
          <div className="col-12">
            {(lessonPlan.activity_category.toLowerCase() === "warmup" && (
              <h3>Warm Up: {" " + challenge.name}</h3>
            )) ||
              (lessonPlan.activity_category.toLowerCase() === "cooldown" && (
                <h3>Cool Down: {" " + challenge.name}</h3>
              )) ||
              (lessonPlan.activity_category.toLowerCase() === "homework" && (
                <h3>Homework: {" " + challenge.name}</h3>
              ))}
          </div>
          <div className="col-12">
            <button
              className="tmc-bg-dk-blu tmc-white btn-sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div style={{ whiteSpace: "pre" }}>
                <sub>
                  <small> &#x25bc;</small>
                </sub>
                {"     "}
                See{" "}
                {(lessonPlan.activity_category.toLowerCase() === "warmup" &&
                  "Warm Up") ||
                  (lessonPlan.activity_category.toLowerCase() === "cooldown" &&
                    "Cool Down") ||
                  (lessonPlan.activity_category.toLowerCase() === "homework" &&
                    "Homework")}
                {"     "}
                <sub>
                  <small>&#x25bc;</small>
                </sub>
              </div>
            </button>
          </div>
          <br />
          {isExpanded && (
            <React.Fragment>
              <div className="col-6">
                <br/>
                <p>{lessonPlan.rules_override || challenge.rules}</p>
              </div>

              <div className="col-6">
                <div className="embed-responsive embed-responsive-16by9">
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
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default LessonAux;
