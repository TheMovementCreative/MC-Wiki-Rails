import React, { useState } from "react";
import PropTypes, { string } from "prop-types";

const Splash = ({user}) => {
  return (
    <div className="container-fluid">
      <div className="row container-fluid splash-section">
        <div className="col log-sign-in"></div>
        <div className="col-8 splash-pic"></div>
      </div>
      <div className="row container-fluid splash-section">
        <div className="col features"></div>
        <div className="row container-fluid splash-sub-section">
          <div className="col expertise"></div>
          <div className="col risk-assestment"></div>
        </div>
      </div>
      <div className="row container-fluid splash-section">
        <div className="col tmc-offering-classes"></div>
        <div className="col tmc-offering-equiptment"></div>
        <div className="col tmc-offering-correspondence"></div>
      </div>
      <div className="row container-fluid splash-section"></div>
    </div>
  );
};

export default Splash;
