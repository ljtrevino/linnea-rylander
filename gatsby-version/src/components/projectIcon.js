import React from "react"

export default function ProjectCard(props) {
  return (
    <div className="col">
      <img
        src={"./images/" + props.name + "-icon.png"}
        className="project-icon"
        onClick={props.onClick}
      />
    </div>
  )
}
