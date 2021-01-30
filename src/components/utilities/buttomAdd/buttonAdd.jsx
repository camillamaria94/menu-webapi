import React from 'react'
import { FaBeer } from 'react-icons/fa';


const buttonAdd = (props) =>{
  return (
    <div>
      <button onClick={props.onClick}> {props.label}</button>
    </div>
    
  )

}

export default buttonAdd