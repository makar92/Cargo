import React from 'react'

const Checkbox = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        name={props.name}
        id={props.name}
      />
      <label htmlFor={props.name}>{props.text}</label>
    </div>
  )
}

export default Checkbox