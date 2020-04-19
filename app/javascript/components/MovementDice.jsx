import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import dice from "../../assets/images/dice.png";
import MovementDiceCard from "./MovementDiceCard";

const MovementDice = ({ challenges }) => {
  const [randomChallenge, setRandomChallenge] = useState(0);
  const[isCollapsed, setIsCollpased] = useState(true);

  let filteredChallenges = challenges.filter((challenge) => {
    return challenge.video_url;
  });

  let challenge = filteredChallenges[randomChallenge];

  const diceRoll = () => {

    if(isCollapsed){setIsCollpased(false)}

    setRandomChallenge(
      Math.floor(Math.random() * filteredChallenges.length)
    )

  }


  return (
    <div className="nested-row row  container-fluid">
      <div className="col-12 col-md-12" style={{display: 'flex', justifyContent:'center',alignItems:'center'}}>
        
        
        <div className="text-center">
          <button>
            <img
              src={dice}
              style={{ width: "50px", height: "50px" }}
              onClick={() => diceRoll()
                
              }
            />
          </button>
        </div>
      </div>

      {!isCollapsed&&<MovementDiceCard challenge={challenge} />}
    </div>
  );
};

export default MovementDice;
