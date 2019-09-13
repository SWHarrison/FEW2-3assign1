import React from 'react'

function Project(props) {
  return (
    <div>
      <img src={props.image} width="600" height="400" />
      <h3>{props.title}</h3>
      <a href={props.link}>Link to project</a>
    </div>
  )
}

export default Project
