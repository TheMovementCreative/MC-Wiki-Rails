import React, { useState } from "react";
import PropTypes, { string } from "prop-types";


const MovementDiceCard = ({challenge}) => {


    return(
<React.Fragment>
    <div className="col" style={{}}>
        <div>
    <h3>{challenge.activity_title}</h3>
    </div>
    <hr/>
    <p>{challenge.purpose}</p>

    <a href={'/challenges/'+challenge.id} className="btn btn-primary">
            View Full Challenge <small>&#x25B6;</small>
          </a>
    </div>
    <div className="embed-responsive embed-responsive-16by9 col">
          <iframe
            className="embed-responsive-item"
            src={
              !challenge.video_url
                ? "https://www.youtube.com/embed/JVN7OeOLMvM"
                : challenge.video_url
            }
          ></iframe>
        </div>
</React.Fragment>
    );

}

export default MovementDiceCard;