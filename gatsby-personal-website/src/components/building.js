import React, { useState, useEffect } from "react"
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
  const [prevBuilding, setPrevBuilding] = useState(buildings[0])

  const onHoverOut = () => {
    setPrevBuilding(building)
    setBuilding(props.darkMode ? buildings[buildings.length - 1] : buildings[0])
  }

  const onHoverIn = areaNumber => {
    setPrevBuilding(building)
    /* opacity of prevBuilding is 1 */
    setBuilding(buildings[areaNumber])
    /* opacity of prevBuilding becomes 0 */
  }

  const generateSocialIcons = () =>
    data.site.siteMetadata.socialIcons.map(x => (
      <SocialIcon
        type={x.type}
        icon={x.icon}
        link={x.link}
        key={x.type}
        darkMode={props.darkMode}
      />
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
      <div className={props.darkMode ? "areastars" : "areastars-off"}>
        <div className="stars small"></div>
        <div className="stars medium"></div>
        <div className="stars large"></div>
      </div>
    )
  }

  return (
    <>
      <div
        id="intro"
        className={
          (props.darkMode ? "night-intro" : "day-intro") +
          " position-relative overflow-hidden text-center"
        }
        onMouseOver={() => onHoverOut()}
      >
        {generateStars()}

        <Switch darkMode={props.darkMode} setMode={props.setMode} />

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
            id="area-left"
            className="area"
            onMouseOver={() => onHoverOut()}
          ></a>
          <a
            id="area-right"
            className="area"
            onMouseOver={() => onHoverOut()}
          ></a>
          {generateAreas()}
          <img
            className="building-alt"
            src={prevBuilding}
            style={{ opacity: prevBuilding === building ? 1 : 0 }}
          />
          <img id="building" src={building} />
          {generateStars()}
        </div>
      </div>

      <div
        id="road"
        className={props.darkMode ? "road-dark" : "road-light"}
        onMouseOver={() => onHoverOut()}
      >
        <img id="blue-car" className="car" src="images/blue-car.PNG" />
      </div>
      <div
        id="road2"
        className={props.darkMode ? "road-dark" : "road-light"}
        onMouseOver={() => onHoverOut()}
      >
        <img id="orange-car" className="car" src="images/orange-car.PNG" />
      </div>
    </>
  )
}
