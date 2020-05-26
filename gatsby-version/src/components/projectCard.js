import React from "react"

export default function ProjectCard(props) {
  return (
    <div
      id={props.name + "-card"}
      className={"project-card " + props.collapsed}
    >
        <div
          id={props.name + "-arrow"}
          style={{visibility: props.arrow === "up" ? "visible" : "hidden"}}
          className={"transition arrow-" + props.arrow}
        ></div>

      <div className={props.name + "-color card transition"}>
        <div className="card-row row no-gutters">
          <div className="col-md">
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
          <div className="col-md photo-video">
            {props.video ? (
              <div className="resp-container">
                <iframe
                  className="resp-iframe" /* card-iframe */
                  src={props.video}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen=""
                ></iframe>
              </div>
            ) : (
              <img
                className="card-image"
                src={"images/" + props.name + "-screenshot.PNG"}
              />
            )}
          </div>
        </div>
      </div>
        <div
          id={props.name + "-arrow"}
          style={{visibility: props.arrow === "down" ? "visible" : "hidden"}}
          className={"transition arrow-" + props.arrow}
        ></div>
    </div>
  )
}
