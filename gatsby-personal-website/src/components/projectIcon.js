import React, { Component } from 'react';

class ProjectCard extends Component {

  render() {
    return (
      <div className="col">
        <img src={"./images/" + this.props.name + "-icon.png"} className="project-icon" onClick={"toggleCard('" + this.props.name + "-card')"}/>
      </div>
    )
  }
}

export default ProjectCard;
