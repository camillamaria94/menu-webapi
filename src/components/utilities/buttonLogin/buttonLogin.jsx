import React from 'react'

const button = (props) =>{
  return (
    <div>
      <button onClick={props.onClick}> {props.label}</button>
    </div>
    
  )

}

export default button