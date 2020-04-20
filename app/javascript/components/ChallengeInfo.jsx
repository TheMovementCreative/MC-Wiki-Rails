import React, { useState, useEffect } from "react";
import PropTypes, { string } from "prop-types";
import * as Constants from '../constants';
import axios from 'axios';

const ChallengeInfo = ({ challengeID, index, listed }) => {

  const [challenge, setChallenge] = useState();


  const fetchChallenge = async () => {
    const resultChallenge = await axios(Constants.BASEURL+"/api/challenges/"+ challengeID);
    setChallenge(resultChallenge.data);
  };

  
  useEffect(() => {

    fetchChallenge();
  
  }, []);




  if(challenge){
  return(
    <React.Fragment>
       <h3>
  {listed && <React.Fragment>Activity {index + 1} : </React.Fragment>}{challenge.name}
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
  );}
  else{return null}
};

export default ChallengeInfo;
