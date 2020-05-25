import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Cloud from "./cloud"
import SocialIcon from "./socialIcon"
import Switch from "./switch"

export default function Building(props) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            buildings
            socialIcons {
              type
              icon
              link
            }
          }
        }
      }
    `
  )

  const buildings = data.site.siteMetadata.buildings
  const [building, setBuilding] = useState(buildings[0])

  const onHoverOut = () => {
    setBuilding(props.darkMode ? buildings[buildings.length - 1] : buildings[0])
  }

  const onHoverIn = areaNumber => {
    setBuilding(buildings[areaNumber])
  }

  const generateSocialIcons = () =>
    data.site.siteMetadata.socialIcons.map(x => (
      <SocialIcon type={x.type} icon={x.icon} link={x.link} key={x.type} darkMode={props.darkMode}/>
    ))

  const generateClouds = () => {
    let clouds = []
    for (let i = 1; i <= 3; i++) {
      clouds.push(<Cloud className={"cloud" + i.toString()} key={i} />)
    }
    return clouds
  }

  const generateAreas = () => {
    let areas = []
    for (let i = 1; i <= 5; i++) {
      areas.push(
        <a
          id={"area" + i.toString()}
          className="area"
          onMouseOver={() => onHoverIn(i)}
          key={i}
        ></a>
      )
    }
    return areas
  }

  const generateStars = () => {
    return (
      <div class={ props.darkMode ? "areastars" : "areastars-off"}>
        <div class="stars small"></div>
        <div class="stars medium"></div>
        <div class="stars large"></div>
      </div>
    );
  }

  return (
    <>
      <div
        id="intro"
        className={ (props.darkMode ? "night-intro" : "day-intro") + " position-relative overflow-hidden text-center"}
        onMouseOver={() => onHoverOut()}
      >
        {generateStars()}

        <Switch darkMode={props.darkMode} setMode={props.setMode}/>

        <div id="intro-header" className="col-md-12 pb-lg-5 mx-auto my-5">
          <h1 className="title">Linnea Rylander</h1>
          <h2 className="subtitle">DEVELOPER • DESIGNER • ENGINEER</h2>

          {generateSocialIcons()}
        </div>
      </div>

      {generateClouds()}

      <div id="outer-sky" className={props.darkMode ? "outer-night-sky" : ""}>
        <div id="sky" className={props.darkMode ? "night-sky" : "day-sky"}>
          <a
            id="arealeft"
            className="area"
            onMouseOver={() => onHoverOut()}
          ></a>
          <a
            id="arearight"
            className="area"
            onMouseOver={() => onHoverOut()}
          ></a>
          {generateAreas()}
          <img id="building" src={building} />
          {generateStars()}
        </div>
      </div>

      <div id="road" className={props.darkMode ? "road-dark" : "road-light"} onMouseOver={() => onHoverOut()}>
        <img id="blue-car" className="car" src="images/blue-car.PNG" />
      </div>
      <div id="road2" className={props.darkMode ? "road-dark" : "road-light"} onMouseOver={() => onHoverOut()}>
        <img id="orange-car" className="car" src="images/orange-car.PNG" />
      </div>
    </>
  )
}
