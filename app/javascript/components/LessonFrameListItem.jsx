import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import ChallengeInfo from "./ChallengeInfo";
import ChallengeFrame from "./ChallengeFrame";


const LessonFrameListItem = ({ challengeID, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <React.Fragment>
      <ChallengeInfo key={'info'+index} challengeID={challengeID} index={index} listed={true} />

      <button
        className="btn tmc-bg-dk-blu tmc-white  btn-sm"
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div style={{whiteSpace: 'pre'}}>
          <sub>
            <small> &#x25bc;</small>
          </sub>
          {"     "}
          See Activity{"     "}
          <sub>
            <small>&#x25bc;</small>
          </sub>
        </div>
      </button>
      {isExpanded && (
        <div className="container-fluid">
          <br />
          <ChallengeFrame key={'frame' + index} challengeID={challengeID} index={index} />
        </div>
      )}
    </React.Fragment>
  );
};

export default LessonFrameListItem;
