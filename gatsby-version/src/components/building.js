import React from "react"
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
            socialIcons {
              type
              class
              icon
              link
            }
            cars
          }
        }
      }
    `
  )

  const generateSocialIcons = () => {
    return data.site.siteMetadata.socialIcons.map(x => (
      <SocialIcon
        type={x.type}
        className={x.class}
        icon={x.icon}
        link={x.link}
        key={x.type}
        darkMode={props.darkMode}
      />
    ))
  }

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
        <div id={"area" + i.toString()} className="area" key={i}></div>
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

  const generateCars = () => {
    return data.site.siteMetadata.cars.map(car => (
      <div key={car} className={props.darkMode ? "road-dark" : "road-light"}>
        <img id={car} className="car" src={"images/" + car + ".PNG"} />
      </div>
    ))
  }

  return (
    <>
      <div
        id="intro"
        className={
          (props.darkMode ? "night-intro" : "day-intro") +
          " position-relative overflow-hidden text-center"
        }
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
          <div className="area-container">{generateAreas()}</div>
          <div>
            <img
              id="building"
              className="building"
              src={
                props.darkMode
                  ? "images/rooms/b-dark.png"
                  : "images/rooms/b-light.png"
              }
            />
          </div>
          {generateStars()}
        </div>
      </div>
      <a className="mail" href="mailto:linnearylander@gmail.com" />
      {generateCars()}
    </>
  )
}
