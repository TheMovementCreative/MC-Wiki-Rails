import React, { useState } from "react"
import PropTypes from "prop-types"
import Select from 'react-select'
import Zep from './Zep'



const HelloWorld = ({challenges}) => {
  const [peter, setPeter ] = useState("PJ")

  const options = [
    { value: 'chalk', label: 'chalk' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div>
      {peter}
      <Zep />
      <button onClick={() => setPeter("ZEP")}>Click </button> 
      <Select options={options} />
    </div>
  )
}

HelloWorld.propTypes = {
  challenges: PropTypes.Array
};
export default HelloWorld