import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import MovementDice from "./MovementDice";
import ChallengeIndexCard from "./ChallengeIndexCard";
import LessonIndexCard from "./LessonIndexCard";
import HomeFeatueCard from "./HomeFeatureCard";
import ChallengeInfo from "./ChallengeInfo";
import pkPrivate from "../../assets/images/pkPrivate";
import mikePic from "../../assets/images/mike_profile_pic";
import woodTrainer from "../../assets/images/woodTrainer";

const Home = ({ challenges, lessons }) => {
  let featuredLesson = lessons[Math.floor(Math.random() * lessons.length)];

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div
          className="container-fluid row tmc-bg-blu tmc-white mb-4"
          style={{ display: "flex", justifyContent: "center", padding: "10px" }}
        >
          <div className="col">
            <h2>Welcome to Move More!</h2>
          </div>
        </div>

        <div className="container-fluid row mb-3">
          <div className="col-md shadow-box mx-3">
            <strong>Featured Daily Challenge</strong>
            <HomeFeatueCard
              type={"Challenge"}
              featuredItem={
                challenges[Math.floor(Math.random() * challenges.length)]
              }
            />
          </div>
          <div
            className="col-md "
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              className="row container-fluid shadow-box bg-img-home-ad my-2"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "20px",
              }}
            >
              <div className="col mt-4 ">
                <h3 className="tmc-white">
                  Don't
                  <br /> train alone!
                </h3>
              </div>

              <div className="col my-4">
                <button className="btn-sm btn-primary">
                  {" "}
                  <a
                    className="tmc-white"
                    href="mailto:info@themovementcreative.com"
                  >
                    Book a private today!
                  </a>
                </button>
              </div>
            </div>

            <div className="row container-fluid card-item">
              <div
                className="col tmc-bg-dk-blu shadow-box mx-2 d-flex justify-content-center align-items-center "
                style={{ border: "0px solid #000000", borderRadius: "15px" }}
              >
                <small>
                  <p className="tmc-white">
                    <em>
                      "The soul is the peak of the mountain that is your spirt"
                      <br /> - Jesse Danger
                    </em>
                  </p>
                </small>
              </div>
              <div
                className="col shadow-box mx-2"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  borderRadius: "15px",
                }}
              >
                <strong>
                  Select from {challenges.length} unique activities!
                </strong>
                <button
                  className="btn-lg tmc-bg-blu tmc-white my-2"
                  href="/challenges"
                >
                  Browse <small>&#x25B6;</small>
                  <small>&#x25B6;</small>
                  <small>&#x25B6;</small>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid row mb-3">
          <div className="col shadow-box mx-3 box-rnd">
          <strong>Give the Movement Dice a roll!</strong>
            <div className="container-fluid my-2">
              <MovementDice challenges={challenges} />
            </div>
          </div>
        </div>
      </div>


        <div className="container-fluid row mb-3">
          <div className="col-md-8 shadow-box mx-3">
            <strong>Featured Weeekly Lesson</strong>
            <div className="row">
              <div className="col-md-8">
                <HomeFeatueCard type={"lesson"} featuredItem={featuredLesson} />
              </div>
              <div className="col">
                <div className="row">
                  <div className="col-md">
                    <h4>Author:</h4>
                    <p>{featuredLesson.author}</p>
                  </div>
                  <div className="col">
                    <img src={mikePic} />
                  </div>
                </div>
                <hr />
                <h4>Activities included: </h4>
                <p>{featuredLesson.details !== null && featuredLesson.details.slice(0,100)}...</p>
              </div>
            </div>
          </div>

          <div
            className="col-md  mx-3"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              className="col shadow-box bg-img-home-ad-mj mb-2"
              style={{
                minHeight: "100px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <button className="btn-sm btn-primary mb-2">
                {" "}
                Online Classses <small>&#x25B6;</small>
              </button>
            </div>

            <div
              className="col shadow-box bg-img-home-ad-wt mb-2"
              style={{ minHeight: "100px", borderRadius: "15px" }}
            >
              <button className="btn-sm btn-primary mt-2">
                Visit Our Store <small>&#x25B6;</small>
              </button>
            </div>

            <div
              className="col shadow-box mx-2"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "15px",
              }}
            >
              <strong>Select from {lessons.length} unique Lessons!</strong>
              <button
                className="btn-lg tmc-bg-blu tmc-white my-2"
                href="/lessons"
              >
                Browse <small>&#x25B6;</small>
                <small>&#x25B6;</small>
                <small>&#x25B6;</small>
              </button>
            </div>
          </div>
        </div>

        <div className="container-fluid row mb-3">
          <div className="col-md shadow-box mx-3" style= {{display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",}}>
            <strong>Start a course</strong>
            <HomeFeatueCard type={"course"} />
          </div>

          <div className="col shadow-box mx-3 box-rnd">
            <strong>Courses Include</strong>
            <hr/>
            <p>Progress tracker (so you don't have to).</p>
            <p>A week of training that you can use over and over again!</p>
            <p>Feedback from a member of the Movement Creative Coaching Staff</p>
            
          </div>
        </div>

   
    </React.Fragment>
  );
};

export default Home;
