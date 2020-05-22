import React, { Component } from 'react';

class ProjectCard extends Component {

  render() {
    return (
        <div id={this.props.name + '-card'} className="project-card">
          {this.props.arrow === 'up' ? <div id={this.props.name + "-arrow"} className={"arrow-" + this.props.arrow}></div> : <></>}
          <div className={this.props.name + "-color card"}>
            <div className="card-row row no-gutters">
              <div className="col">
                <div className="card-body">
                  <h1 className="card-title">{this.props.title} &nbsp;<a href={this.props.link}><i
                        className="card-icon fas fa-external-link-alt"></i></a></h1>
                  {this.props.children}
                </div>
              </div>
              <div className="col">
              { this.props.video ?
                <iframe class="card-iframe" src={this.props.video} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
                : <img className="card-image-border" src={"./images/" + this.props.name + "-screenshot.PNG"}/>
              }
              </div>
            </div>
          </div>
          {this.props.arrow === 'down' ? <div id={this.props.name + "-arrow"} className={"arrow-" + this.props.arrow}></div> : <></>}
      </div>
    )
  }
}

export default ProjectCard;
