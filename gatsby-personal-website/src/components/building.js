import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Cloud from "../components/cloud"
import SocialIcon from "../components/socialIcon"

export default function Building() {
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
  );

  const buildings = data.site.siteMetadata.buildings
  const [building, setBuilding] = useState(buildings[0]);

  const onHoverOut = () => {
    setBuilding(buildings[0])
  };

  const onHoverIn = (areaNumber) => {
    setBuilding(buildings[areaNumber])
  };

  const generateSocialIcons = () => data.site.siteMetadata.socialIcons.map(x => <SocialIcon type={x.type} icon={x.icon} link={x.link} key={x.type}/>);

  const generateClouds = () => {
    let clouds = []
    for (let i = 1; i <= 3; i++) {
      clouds.push(<Cloud className={"cloud" + i.toString()} key={i}/>)
    }
    return clouds
  };

  const generateAreas = () => {
    let areas = []
    for (let i = 1; i <= 5; i++) {
      areas.push(<a id={"area" + i.toString()} className="area" onMouseOver={() => onHoverIn(i)} key={i}></a>)
    }
    return areas
  };

  return (
    <>
    <div id="intro" className="day-intro position-relative overflow-hidden text-center" onMouseOver={() => onHoverOut()}>

      <div id="wrap" className="switcher-wrap wrap-sun">
        <div id="sunMoon" className="sun-moon sun"> </div>
      </div>

      <div id="intro-header" className="col-md-12 pb-lg-5 mx-auto my-5">
        <h1 className="title">Linnea Rylander</h1>
        <h2 className="subtitle">DEVELOPER • DESIGNER • ENGINEER</h2>

        {generateSocialIcons()}

      </div>
    </div>

    {generateClouds()}

    <div id="outer-sky" className="">
      <div id="sky" className="day-sky">
        <a id="arealeft" className="area" onMouseOver={() => onHoverOut()}></a>
        <a id="arearight" className="area" onMouseOver={() => onHoverOut()}></a>
        {generateAreas()}
        <img id="building" src={building} />
        <div id="stars-container" className="areastars-off">
          <div className="stars small"></div>
          <div className="stars medium"></div>
          <div className="stars large"></div>
        </div>
      </div>
    </div>

    <div id="road" className="road-light" onMouseOver={() => onHoverOut()}>
      <img id="blue-car" className="car" src="images/blue-car.PNG"/>
    </div>
    <div id="road2" className="road-light" onMouseOver={() => onHoverOut()}>
      <img id="orange-car" className="car" src="images/orange-car.PNG"/>
    </div>
    </>
  );
}
