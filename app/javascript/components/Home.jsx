import React, { useState, useEffect } from "react";
import PropTypes, { string } from "prop-types";
import MovementDice from "./MovementDice";
import HomeFeatueCard from "./HomeFeatureCard";
import mikePic from "../../assets/images/mike_profile_pic";
import * as Constants from '../constants';
import axios from "axios";

const Home = ({ challenges, lessons }) => {
  const [featuredChallenge, setFeaturedChallenge] = useState();
  const [featuredLesson, setFeaturedLesson] = useState();

  const fetchFeatures = async () => {
    const resultChallenge = await axios(Constants.BASEURL+"/api/challenges/"+ 1);
    const resultLesson = await axios(Constants.BASEURL+"/api/lessons/"+ 15);
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
            <h2>Welcome to Move More!!</h2>
          </div>
        </div>

        <div className=" row nested-row ">
          <div className="col-12 col-md nest-col shadow-box">

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
              
            }}
          >
            <div className="row nested-row-empty">
              
              
              <div
                className="col-12 tmc-bg-dk-blu shadow-box pad-5"
                style={{ border: "0px solid #000000", borderRadius: "15px" }}
              >
                <h3 className="tmc-white">Thanks for using Move More Alpha!</h3> <br/>
                <small>
                  <p className="tmc-white">
                    <em>
                      Please be aware that since this is a work in progress, expect bugs, buttons not to work
                      and things to change or move places.
                      <br/><br/>
                      Please send any feedback to info@themovementcreative.com
                      <br/><br/>
                      Have fun, and embrace challenge!
                      <br /><br/> - Jesse Danger
                    </em>
                  </p>
                </small>
              </div>
              <div
                className="col-12 shadow-box mt-2"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  
                }}
              >
                <strong>
                  Select from {challenges.length} unique activities!
                </strong>
                <a
                  className="btn-lg btn-primary my-2"
                  href={"/challenges"}
                >
                  Browse <small>&#x25B6;</small>
                  <small>&#x25B6;</small>
                  <small>&#x25B6;</small>
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
                  marginLeft:'0px'
                }}
              >
                <h3 className="tmc-white mx-2">
                  Don't
                  <br /> train alone!
                </h3>

                <button className="btn-sm btn-primary mx-2">
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
            <div className="row nested-row-empty container-fluid">
              <div
                className="col-6 col-md-12 shadow-box"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  
                  maxHeight: '110px'
                }}
              >
                <strong>Select from {lessons.length} unique Lessons!</strong>
                <a
                  className="btn-lg btn-primary my-2"
                  href="/lessons"
                 
                >
                  Browse <small>&#x25B6;</small>
                  <small>&#x25B6;</small>
                  <small>&#x25B6;</small>
                </a>
              </div>

              <div
                className="col-6 col-md-12 shadow-box bg-img-home-ad-mj my-2"
                style={{
                  minHeight: "100px",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <a href={'http://www.themovementcreative.com/online-schedule'} className="btn-sm btn-primary mb-2">
                  {" "}
                  Online Classses <small>&#x25B6;</small>
                </a>
              </div>

              <div
                className="col-12 shadow-box bg-img-home-ad-wt mb-2 pad-5"
                style={{ minHeight: "100px", borderRadius: "15px" }}
              >
                <a href={'http://www.themovementcreative.com/store-all'} className="btn-sm btn-primary mt-2">
                  Visit Our Store <small>&#x25B6;</small>
                </a>
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
