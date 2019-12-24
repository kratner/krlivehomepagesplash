// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

//import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
//import "jest-canvas-mock";
//import "./__mocks__/client";
//import { canvas } from "jsdom";

configure({ adapter: new Adapter() });

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn()
};

global.navigator.geolocation = mockGeolocation;

HTMLCanvasElement.prototype.getContext = () => {
  // return whatever getContext has to return
};

HTMLDocument.prototype.getElementById = selector => {
  return HTMLElement;
};

//HTMLCanvasElement.prototype = JSDOM.canvas;
