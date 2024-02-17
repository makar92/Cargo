import React from 'react'

const Line = (props) => {

  let color;

  if (props.color1) {
    color = "#E58D35"
  } 

  if (props.color2) {
    color = "#89C249"
  }

  return (
    <div
      className={props.className}
      style={{
        width: "85px",
        height: "2px",
        backgroundColor: color,
      }}
    ></div>
  )
}

export default Line