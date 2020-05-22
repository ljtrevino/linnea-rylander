import React, { Component } from 'react';

class Building extends Component {

  state = {

  };

  handleClick = () => {

  };

  render() {
    return (
      <div id="outer-sky" className="">
        <div id="sky" className="day-sky">
          <a id="arealeft" className="area" onMouseOver="onHoverOutRoom(this)"></a>
          <a id="arearight" className="area" onMouseOver="onHoverOutRoom(this)"></a>
          <a id="area1" className="area" onMouseOver="onHoverRoom(this)"></a>
          <a id="area2" className="area" onMouseOver="onHoverRoom(this)"></a>
          <a id="area3" className="area" onMouseOver="onHoverRoom(this)"></a>
          <a id="area4" className="area" onMouseOver="onHoverRoom(this)"></a>
          <a id="area5" className="area" onMouseOver="onHoverRoom(this)"></a>
          <img id="building" src="images/building/building-day.png" />
          <div id="stars-container" className="areastars-off">
            <div className="stars small"></div>
            <div className="stars medium"></div>
            <div className="stars large"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Building;
