import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import axios from 'axios';



const AxiosTest = () => {

    const getChallenges = () => {
        axios.get('api/challenges').then(res => console.log(res)).catch(err => console.log(err)).finally(finale => console.log(finale))
    }

    return (
        <div><button onClick={getChallenges}>AXIOS</button></div>
    )
}

export default AxiosTest;