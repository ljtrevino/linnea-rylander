import React, { Component } from 'react';
import Cloud from "../components/cloud"
import SocialIcon from "../components/socialIcon"

class Intro extends Component {

  state = {

  };

  handleClick = () => {

  };

  render() {
    return (
      <>
      <div id="intro" className="day-intro position-relative overflow-hidden text-center" onMouseOver="onHoverOutRoom(this)">

        <div id="wrap" className="switcher-wrap wrap-sun">
          <div id="sunMoon" className="sun-moon sun"> </div>
        </div>

        <div id="intro-header" className="col-md-12 pb-lg-5 mx-auto my-5">
          <h1 className="title">Linnea Rylander</h1>
          <h2 className="subtitle">DEVELOPER • DESIGNER • ENGINEER</h2>

          <SocialIcon type='github' icon='icon fab fa-github-square' link="https://github.com/lrylander"/>
          <SocialIcon type='linkedin' icon='icon fab fa-linkedin' link="https://www.linkedin.com/in/linnearylander"/>
          <SocialIcon type='envelope' icon='icon fas fa-envelope-square' link="mailto:linnearylander@gmail.com"/>
          <SocialIcon type='resume' icon='icon-rect fas fa-file-alt' link="Linnea_Rylander_Resume.pdf"/>

        </div>
      </div>

      <Cloud className="cloud1"/>
      <Cloud className="cloud2"/>
      <Cloud className="cloud3"/>


    </>
    )
  }
}

export default Intro;
