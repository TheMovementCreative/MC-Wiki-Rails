import React, { useState } from "react";
import PropTypes, { string } from "prop-types";

const ChallengeInfo = ({ challenge, index, listed }) => {
  return(
    <React.Fragment>
      <h3>
  {listed && <React.Fragment>Activity {index + 1} : </React.Fragment>}{challenge.activity_title}
      </h3>

      <div className="containter-fluid tmc-bg-blu tmc-white">
        <p
          style={{
            color: "white",
            paddingLeft: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {challenge.purpose}
        </p>
      </div>
    </React.Fragment>
  );
};

export default ChallengeInfo;
