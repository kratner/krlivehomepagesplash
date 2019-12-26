import { keyframes } from "styled-components";

export const flyInFromLeft = keyframes`
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(150%);
  }
`;
