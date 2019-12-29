import React from "react";
import styled from "styled-components";

export default props => {
  const CreditsContainer = styled.div`
    position: absolute;
    bottom: 0.5em;
    right: 1em;
    font-size: 0.5em;
    text-align: ${props.textAlign};
    & ul {
      list-style: none;
    }
    & a {
      transition: 0.25s;
      text-decoration: none;
      color: #00ffff;
      &:hover {
        color: #fff200;
      }
    }
  `;
  const credits = [
    {
      href: "https://github.com/tim-soft/react-particles-webgl#readme",
      title: "Tim Soft React WebGL Particle Generator",
      linkText: "WebGL Particles",
      target: "_blank"
    },
    {
      href: "https://codepen.io/YusukeNakaya/pen/XyOaBj",
      title: "CSS Shooting Stars",
      linkText: "Shooting Stars",
      target: "_blank"
    }
  ];
  const creditLinks = credits.map((node, index) => {
    return (
      <li key={index}>
        <a href={node.href} title={node.title} target={node.target}>
          {node.linkText}
        </a>
      </li>
    );
  });
  return (
    <CreditsContainer id={props.id}>
      <ul>{creditLinks}</ul>
    </CreditsContainer>
  );
};
