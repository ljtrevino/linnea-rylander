import React from "react"
import { IconContext } from "react-icons"
import {
  FaGithubSquare,
  FaLinkedin,
  FaEnvelopeSquare,
  FaFileAlt,
} from "react-icons/fa"

export default function SocialIcon(props) {
  const iconComponents = {
    "fa-github-square": FaGithubSquare,
    "fa-linkedin": FaLinkedin,
    "fa-envelope-square": FaEnvelopeSquare,
    "fa-file-alt": FaFileAlt,
  }
  const IconComponent = iconComponents[props.icon]

  return (
    <a
      id={props.type + "-icon"}
      className={
        "intro-btn " + (props.darkMode ? "intro-btn-dark" : "intro-btn-light")
      }
      href={props.link}
    >
      <IconContext.Provider value={{ className: props.className }}>
        <IconComponent />
      </IconContext.Provider>
    </a>
  )
}
