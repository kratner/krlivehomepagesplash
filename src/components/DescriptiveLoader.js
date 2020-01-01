import React from "react";

export default props => {
  const injectStyle = style => {
    const styleElement = document.createElement("style");
    let styleSheet = null;

    document.head.appendChild(styleElement);

    styleSheet = styleElement.sheet;

    styleSheet.insertRule(style, styleSheet.cssRules.length);
  };

  const keyframesStyle = `
    @-webkit-keyframes pulse {
        0%   { opacity: 0; }
        50%  { opacity: 1; }
    }
    `;
  injectStyle(keyframesStyle);
  const animation = {
    WebkitAnimation: "pulse 1s linear infinite"
  };
  const messageStyle = {
    color: props.messageColor
  };
  return (
    <div style={messageStyle}>
      <span>{props.message}</span>
      <span style={animation}>{props.animatedMessage}</span>
    </div>
  );
};
