import React, { useState } from "react"
import ProjectCard from "../components/projectCard"
import ProjectIcon from "../components/projectIcon"
import { useStaticQuery, graphql } from "gatsby"

export default function Ground(props) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            projects {
              title
              name
              date
              text
              link
              video
            }
          }
        }
      }
    `
  )

  const projects = data.site.siteMetadata.projects
  const [cardState, setCardState] = useState({})
  const [collapsed, setCollapsed] = useState(false)
  const card = <ProjectCard
        title={cardState.title}
        name={cardState.name}
        arrow={cardState.i < 5 ? "up" : "down"}
        link={cardState.link}
        text={cardState.text}
        date={cardState.date}
        video={cardState.video}
        collapsed={collapsed ? "" : "collapsed"}
      />


  const createIcons = (start, end) => {
    return data.site.siteMetadata.projects
      .map((p, i) => (
        <ProjectIcon
          name={p.name}
          onClick={() => {
            if (projects[i].title === cardState.title){
              setCollapsed(false);
              setTimeout(function(){
                  setCardState({});
              }, 350);
            } else {
              setCardState({
                title: projects[i].title,
                name: projects[i].name,
                i: i,
                link: projects[i].link,
                text: projects[i].text,
                date: projects[i].date,
                video: projects[i].video
              });
              setCollapsed(true);
            }
          }}
          key={i}
        />
      ))
      .slice(start, end)
  }

  return (
    <>
      <div
        id="grass"
        className={props.darkMode ? "grass-dark" : "grass-light"}
      ></div>
      <div id="dirt" className={props.darkMode ? "dirt-dark" : "dirt-light"}>
        <h1 className="subsubtitle display-4 font-weight-normal">
          Side Projects
        </h1>

        <div className="project-icon-container row">{createIcons(0, 5)}</div>

        {card}

        <div className="project-icon-container row">{createIcons(5, 10)}</div>
      </div>
    </>
  )
}
