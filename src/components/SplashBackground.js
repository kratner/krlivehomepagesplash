import React from "react";
import styled from "styled-components";

const SplashBackgroundContainer = styled.div`
  background-color: #cccccc;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export default props => {
  return <SplashBackgroundContainer id={props.id} />;
};
