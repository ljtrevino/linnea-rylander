import React, { useState } from "react"

export default function Switch(props) {
  return (
    <div id="wrap" className={"switcher-wrap " + (props.darkMode ? "wrap-moon" : "wrap-sun")} onClick={() => props.setMode(!props.darkMode)}>
      <div id="sunMoon" className={"sun-moon " + (props.darkMode ? "moon" : "sun") }>
      </div>
    </div>
  )
}
