import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import axios from 'axios';



const AxiosTest = () => {

    const getChallenges = () => {
        axios.get('/challenges/index').then(res => console.log(res))
    }

    return (
        <div><button onClick={getChallenges}>AXIOS</button></div>
    )
}

export default AxiosTest;