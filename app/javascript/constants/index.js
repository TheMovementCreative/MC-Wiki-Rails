import { array, string } from "prop-types"
import axios from 'axios'

export const BASEURL = (window.location.hostname !== "localhost") ? window.location.protocol + "//" + window.location.hostname : "http://localhost:3000"

export const RECORDGET = async (recordTable, planType) =>{

    var returnQuery;
    

    if(planType == "admin"){
    
        returnQuery = BASEURL+"/api/"+recordTable+"/?publish=true";
       
      }
      
    else if(planType == "champion"){
      const fetchTable = async () => {
          const resultChallenges = await axios(`${Constants.BASEURL}/api/${recordTable}/?publish=true`);
          returnTable = resultChallenges.data;
        };
        
  
      }
      else if(planType == "warrior"){
          
        const fetchTable = async () => {
            const resultChallenges = await axios(`${Constants.BASEURL}/api/${recordTable}/?publish=true&sub=${planType}`);
            returnTable = resultChallenges.data;
          };
          

      }
      else if(planType == "challenger"){
        const fetchTable = async () => {
          const resultChallenges = await axios(`${Constants.BASEURL}/api/${recordTable}/?publish=true&sub=${planType}`);
          returnTable = resultChallenges.data;
        };
      }
      else{
          returnTable = null;
          
      }

    return returnQuery;
}
//comment