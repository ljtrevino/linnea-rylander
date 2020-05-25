import React from "react"

export default function ProjectCard(props) {
  return (
    <div id={props.name + "-card"} className="project-card">
      {props.arrow === "up" ? (
        <div
          id={props.name + "-arrow"}
          className={"arrow-" + props.arrow}
        ></div>
      ) : (
        <></>
      )}
      <div className={props.name + "-color card"}>
        <div className="card-row row no-gutters">
          <div className="col">
            <div className="card-body">
              <h1 className="card-title">
                {props.title}
                &nbsp;
                <a href={props.link}>
                  <i className="card-icon fas fa-external-link-alt"></i>
                </a>
              </h1>
              <p className="card-text">{props.text}</p>
              <p className="card-text text-muted">{props.date}</p>
            </div>
          </div>
          <div className="col">
            {props.video ? (
              <iframe
                className="card-iframe"
                src={props.video}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen=""
              ></iframe>
            ) : (
              <img
                className="card-image-border"
                src={"./images/" + props.name + "-screenshot.PNG"}
              />
            )}
          </div>
        </div>
      </div>
      {props.arrow === "down" ? (
        <div
          id={props.name + "-arrow"}
          className={"arrow-" + props.arrow}
        ></div>
      ) : (
        <></>
      )}
    </div>
  )
}
