import React from "react";
import styled from "styled-components";

const SplashBackgroundContainer = styled.div``;

export default props => {
  return (
    <SplashBackgroundContainer id={props.id} className={props.className} />
  );
};
