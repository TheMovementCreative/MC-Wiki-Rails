import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import ChallengeInfo from "./ChallengeInfo";
import ChallengeFrame from "./ChallengeFrame";
import LessonFrame from "./LessonFrame";

const LessonFrameListItem = ({ challenge, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <React.Fragment>
      <ChallengeInfo challenge={challenge} index={index} listed={true} />

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
          <ChallengeFrame challenge={challenge} index={index} />
        </div>
      )}
    </React.Fragment>
  );
};

export default LessonFrameListItem;
