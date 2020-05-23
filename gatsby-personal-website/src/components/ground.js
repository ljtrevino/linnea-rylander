import React, { Component } from 'react';
import ProjectCard from "../components/projectCard"
import ProjectIcon from "../components/projectIcon"
import { useStaticQuery, graphql } from "gatsby"

export default function Ground () {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            code_for_good {
              date
              text
            }
            fotofix {
              date
              text
            }
            linnear {
              date
              text
            }
            play_it_by_gear {
              date
              text
            }
            slicer {
              date
              text
            }
            street_smarts {
              date
              text
            }
            swe {
              date
              text
            }
            vulture {
              date
              text
            }
            wheel_deal {
              date
              text
            }
          }
        }
      }
    `
  );

  const projects = ["linnear", "wheel-deal", "street-smarts", "vulture-mit", "swe-mit", "slicer", "play-it-by-gear", "fotofix", "code-for-good", "wheel-deal"]

  const createIcons = (start, end) => {
    return projects.map(x => <ProjectIcon name={x} /*callback={switchCard}*//>).slice(start, end);
  };

    return (
      <>
        <div id="road" className="road-light" onMouseOver="onHoverOutRoom(this)">
          <img id="blue-car" className="car" src="images/blue-car.PNG"/>
        </div>

        <div id="road2" className="road-light" onMouseOver="onHoverOutRoom(this)">
          <img id="orange-car" className="car" src="images/orange-car.PNG"/>
        </div>

        <div id="grass" className="grass-light"></div>

        <div id="dirt" className="dirt-light">

          <h1 className="subsubtitle display-4 font-weight-normal">Side Projects</h1>

          <div className="project-icon-container row">
            {createIcons(0,5)}
          </div>

          <ProjectCard name="linnear" arrow="up" title="Linnear" link="https://linnear.info/" text={data.site.siteMetadata.linnear.text} date={data.site.siteMetadata.linnear.date}/>

          <ProjectCard name="wheel-deal" arrow="up" title="Wheel Deal" link="http://a-wheel-deal.herokuapp.com/" text={data.site.siteMetadata.wheel_deal.text} date={data.site.siteMetadata.wheel_deal.date}/>

          <ProjectCard name="street-smarts" arrow="up" title="Street Smarts" link="https://lrylander.github.io/StreetSmarts/" video="https://www.youtube.com/embed/yxqBb4jaiFQ?rel=0&amp;showinfo=0" text={data.site.siteMetadata.street_smarts.text} date={data.site.siteMetadata.street_smarts.date}/>

          <ProjectCard name="vulture-mit" arrow="up" title="Vulture" link="https://github.com/lrylander/vulture" text={data.site.siteMetadata.vulture.text} date={data.site.siteMetadata.vulture.date}/>

          <ProjectCard name="swe-mit" arrow="up" title="MIT SWE Website" link="https://swe.mit.edu/" text={data.site.siteMetadata.swe.text} date={data.site.siteMetadata.swe.date}/>

          <ProjectCard name="slicer" arrow="down" title="Real Time Slicer" link="https://hcie.csail.mit.edu/" text={data.site.siteMetadata.slicer.text} date={data.site.siteMetadata.slicer.date}/>

          <ProjectCard name="play-it-by-gear" arrow="down" title="Play It By Gear" link="https://github.com/lrylander/play-it-by-gear" video="https://www.youtube.com/embed/FjHYyH7d4Fw?rel=0&amp;showinfo=0" text={data.site.siteMetadata.play_it_by_gear.text} date={data.site.siteMetadata.play_it_by_gear.date}/>

          <ProjectCard name="fotofix" arrow="down" title="Fotofix" link="https://github.com/lrylander/fotofix" video="https://www.youtube.com/embed/QwWX7u6ZztQ?rel=0&amp;showinfo=0" text={data.site.siteMetadata.fotofix.text} date={data.site.siteMetadata.fotofix.date}/>

          <ProjectCard name="code-for-good" arrow="down" title="Code For Good" link="https://github.com/lrylander/AFH-Timesheet-App" text={data.site.siteMetadata.code_for_good.text} date={data.site.siteMetadata.code_for_good.date}/>

          <div className="project-icon-container row">
              {createIcons(5,10)}
          </div>

        </div>
      </>
    )
}
