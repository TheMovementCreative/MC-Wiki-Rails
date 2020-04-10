import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import dice from "../../assets/images/dice.png";
import MovementDiceCard from "./MovementDiceCard"

const MovementDice = ({challenges}) => {

    const [randomChallenge,setRandomChallenge] = useState(0)

    let filteredChallenges = challenges.filter((challenge) => {
        return (challenge.video_url)
    });

    let challenge = filteredChallenges[randomChallenge];


    return(





        <div className="container-fluid row" >
            <div className="col">
            <h3>Feeling Lucky?</h3><hr/>
            <p>Roll the dice for a random activity!</p>
       
            <br/>
            <div className="text-center">
            <button><img src={dice} style={{width:'50px', height:'50px',}} onClick={()=>setRandomChallenge(Math.floor(Math.random() * filteredChallenges.length)) }/></button>
            </div>
        </div>
        
        
        <MovementDiceCard challenge={challenge}/>
        
        </div>

    );

}

export default MovementDice;