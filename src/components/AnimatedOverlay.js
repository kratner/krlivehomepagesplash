import React, { Component } from "react";

import styled from "styled-components";

const NightContainer = styled.div`
  position: absolute;
  width: 150%;
  height: 150%;
  transform: rotateZ(45deg);
  left: -25%;
  top: -25%;
`;

class AnimatedOverlay extends Component {
  constructor(props) {
    super(props);
    this.stars = [];
  }
  render() {
    for (let i = 0; i < this.props.numStars; i++) {
      this.stars.push(<div className="shooting_star" key={i}></div>);
    }
    return <NightContainer>{this.stars}</NightContainer>;
  }
}

export default AnimatedOverlay;
