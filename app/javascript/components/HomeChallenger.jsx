import React, { useState, useEffect } from "react";
import PropTypes, { string } from "prop-types";
import MovementDice from "./MovementDice";
import HomeFeatueCard from "./HomeFeatureCard";
import mikePic from "../../assets/images/MC_Logo.png";
import LessonFrame from "./LessonFrame";
import LessonInfo from "./LessonInfo";
import * as Constants from "../constants";
import axios from "axios";

const HomeChallenger = ({ page, subType }) => {
  const [featuredChallenge, setFeaturedChallenge] = useState();
  const [featuredLesson, setFeaturedLesson] = useState();
  const [publishedLessons, setPublishedLessons] = useState([]);
  const [publishedChallenges, setPublishedChallenges] = useState([]);

  const fetchFeatures = async () => {
    const resultChallenge = await axios(
      Constants.BASEURL + "/api/challenges/" + page.featured_challenge_id
    );
    const resultLesson = await axios(
      Constants.BASEURL + "/api/lessons/" + page.featured_lesson_id
    );

    const resultPublishedChallenges = await axios(
      Constants.BASEURL + "/api/challenges/?publish=true&sub=" + subType
    );
    const resultPublishedLesson = await axios(
      Constants.BASEURL + "/api/lessons/?publish=true&sub=" + subType
    );

    setFeaturedChallenge(resultChallenge.data);
    setFeaturedLesson(resultLesson.data);
    setPublishedChallenges(resultPublishedChallenges.data);
    setPublishedLessons(resultPublishedLesson.data);
  };

  useEffect(() => {
    fetchFeatures();
  }, []);
if(publishedLessons){
  return (
    <React.Fragment>
      <div className="container-fluid nest-col">
        <div
          className="row tmc-bg-blu tmc-white mb-4 py-2"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <div className="col">
            <h2>{page.page_heading}</h2>
          </div>
        </div>

        <div className=" row nested-row ">
          <div
            className="col-sm-6 col-12 nest-col"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div className="row nested-row-empty">
              <div
                className="col-12 tmc-bg-dk-blu shadow-box pad-5"
                style={{ border: "0px solid #000000", borderRadius: "15px" }}
              >
                <h3 className="tmc-white">{page.message_heading}</h3> <br />
                <small>
                  <p className="tmc-white allow-breaks">
                    <em>{page.message_body}</em>
                  </p>
                </small>
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-12 nest-col">
            <div className="row nested-row">
              <div
                className="col-12 shadow-box bg-img-home-ad-wt mb-2 pad-5"
                style={{ minHeight: "100px", borderRadius: "15px" }}
              >
                <a
                  href={page.ad_3_url}
                  className="btn-sm btn-primary mt-2 box-rnd"
                >
                  {page.ad_3_button} <small>&#x25B6;</small>
                </a>
              </div>
              <div
                className="col-12 nest-col my-2 py-2 shadow-box bg-img-home-ad"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "baseline",
                  flexDirection: "column",
                  borderRadius: "20px",
                  marginLeft: "0px",
                }}
              >
                <h3 className="tmc-white mx-2">{page.ad_1_heading}</h3>

                <button className="btn-sm btn-primary mx-2 box-rnd">
                  {" "}
                  <a className="tmc-white" href={page.ad_1_url}>
                    {page.ad_1_button}
                  </a>
                </button>
              </div>
            </div>
          </div>
          
          {publishedLessons.map((lesson, index) => (
            <React.Fragment>
                
            <LessonInfo lessonID={lesson.id} listed={false} index={index} />
            <LessonFrame lessonID={lesson.id} index={index} />
            </React.Fragment>
          ))}
        </div>

        </div>
    </React.Fragment>
  );
    }
};

export default HomeChallenger;
