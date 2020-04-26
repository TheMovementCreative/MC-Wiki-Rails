import React, { useState, useEffect } from "react";
import PropTypes, { string } from "prop-types";
import MovementDice from "./MovementDice";
import HomeFeatueCard from "./HomeFeatureCard";
import mikePic from "../../assets/images/mike_profile_pic";
import axios from "axios";

const Home = ({ challenges, lessons }) => {
  const [featuredChallenge, setFeaturedChallenge] = useState();
  const [featuredLesson, setFeaturedLesson] = useState();

  const fetchFeatures = async () => {
    const resultChallenge = await axios("/api/challenges/"+ 1);
    const resultLesson = await axios("/api/lessons/"+ 15);
    setFeaturedChallenge(resultChallenge.data);
    setFeaturedLesson(resultLesson.data);
  };

  useEffect(() => {

    fetchFeatures();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid nest-col">
        <div
          className="row tmc-bg-blu tmc-white mb-4"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <div className="col">
            <h2>Welcome to Move More!</h2>
          </div>
        </div>

        <div className=" row nested-row ">
          <div className="col-12 col-md nest-col shadow-box">
            <header>
              <strong>Featured Daily Challenge</strong>
            </header>
            {featuredChallenge && (
              <HomeFeatueCard
                type={"Challenge"}
                featuredItem={featuredChallenge}
              />
            )}
          </div>
          <div
            className="col-12 col-md nest-col"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="row nested-row-empty">
              <div
                className="col-6 tmc-bg-dk-blu shadow-box "
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
                className="col-6 shadow-box "
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
              <div
                className="col-12 nest-col my-2 py-2 shadow-box bg-img-home-ad"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "baseline",
                  flexDirection: "column",
                  borderRadius: "20px",
                }}
              >
                <h3 className="tmc-white">
                  Don't
                  <br /> train alone!
                </h3>

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
          </div>
        </div>

        <div className="row nested-row mb-3">
          <div className="col nest-col shadow-box box-rnd">
            <header className="center-flex">
              <strong>Give the Movement Dice a roll!</strong>
            </header>

            <MovementDice challenges={challenges} />
          </div>
        </div>

        <div className="nested-row-empty row mb-3">
          <div className="col-12 col-md-8 nest-col shadow-box">
            <strong>Featured Weeekly Lesson</strong>
            <div className="row nested-row">
              {featuredLesson && <React.Fragment><div className="col-12 col-md-8 nest-col center-spread">
                <HomeFeatueCard type={"lesson"} featuredItem={featuredLesson} />
              </div>
              <div className="col-12 col-md-3 nest-col">
                <div className="row nested-row">
                  <div className="col-6 col-md-12 nest-col">
                    <h4>Author:</h4>
                    <p>{featuredLesson.author}</p>
                  </div>
                  <div className="col-5 col-md-12 nest-col ">
                    <img src={mikePic} />
                  </div>
                  <div className="col-12 nest-col">
                    <hr />
                    <h4>Activities included: </h4>
                    <p>
                      {featuredLesson.details !== null &&
                        featuredLesson.details.slice(0, 100)}
                      ...
                    </p>
                  </div>
                </div>
              </div> </React.Fragment>}
            </div>
          </div>

          <div className="col-12 col-md nest-col">
            <div className="row nested-row-empty container-fluid center-spread">
              <div
                className="col-12 shadow-box"
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

              <div
                className="col-12 shadow-box bg-img-home-ad-mj my-2"
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
                className="col-12 shadow-box bg-img-home-ad-wt mb-2"
                style={{ minHeight: "100px", borderRadius: "15px" }}
              >
                <button className="btn-sm btn-primary mt-2">
                  Visit Our Store <small>&#x25B6;</small>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid row nested-row mb-3">
          <div className="col-6 shadow-box">
            <strong>Start a course</strong>
            <HomeFeatueCard type={"course"} />
          </div>

          <div className="col-6 shadow-box box-rnd">
            <strong>Courses Include</strong>
            <hr />
            <p>Progress tracker (so you don't have to).</p>
            <p>A week of training that you can use over and over again!</p>
            <p>
              Feedback from a member of the Movement Creative Coaching Staff
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
