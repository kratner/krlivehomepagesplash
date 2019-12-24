import React from "react";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import SplashBackground from "../components/SplashBackground";
import reducer from "../reducers/index";
import { KeithRatnerLogo } from "../components/KeithRatnerLogo";
import SplashLinksMenu from "../components/SplashLinksMenu";
//import { getData } from "../dataaccess/SplashLinksData";

const store = createStore(reducer, applyMiddleware(thunk));

console.log(store.getState());

/*

const handleData = data => {
  debugger;
};

getData(handleData);

*/

const ProviderContainer = () => (
  <Provider store={store}>
    <SplashBackground id="splashbackground" className="splashbackground" />
    <KeithRatnerLogo
      id="krlogo"
      svgid="krlogosvg"
      delayF="1000"
      delayL="1500"
    />
    <SplashLinksMenu id="splashlinksmenu" />
  </Provider>
);

export default ProviderContainer;
