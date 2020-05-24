import React, { useState } from "react"
import ProjectCard from "../components/projectCard"
import ProjectIcon from "../components/projectIcon"
import { useStaticQuery, graphql } from "gatsby"

export default function Ground() {
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

  const [cards, setCards] = useState(null)
  const [prevName, setprevName] = useState(null)
  const allCards = data.site.siteMetadata.projects.map((p, i) => (
    <ProjectCard
      title={p.title}
      name={p.name}
      arrow={i < 5 ? "up" : "down"}
      link={p.link}
      text={p.text}
      date={p.date}
      video={p.video}
      key={i}
    />
  ))

  const createIcons = (start, end) => {
    return data.site.siteMetadata.projects
      .map((p, i) => (
        <ProjectIcon
          name={p.name}
          onClick={() => {
            setCards(
              allCards.filter(
                x => x.props.name === p.name && prevName !== p.name
              )
            )
            setprevName(prevName === p.name ? null : p.name)
          }}
          key={i}
        />
      ))
      .slice(start, end)
  }

  return (
    <>
      <div id="grass" className="grass-light"></div>
      <div id="dirt" className="dirt-light">
        <h1 className="subsubtitle display-4 font-weight-normal">
          Side Projects
        </h1>

        <div className="project-icon-container row">{createIcons(0, 5)}</div>

        {cards}

        <div className="project-icon-container row">{createIcons(5, 10)}</div>
      </div>
    </>
  )
}
