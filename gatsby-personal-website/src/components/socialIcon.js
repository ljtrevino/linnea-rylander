import React from "react"

export default function SocialIcon(props) {
  return (
    <a
      id={props.type + "-icon"}
      className={
        "intro-btn " + (props.darkMode ? "intro-btn-dark" : "intro-btn-light")
      }
      href={props.link}
    >
      <i className={props.icon}></i>
    </a>
  )
}
