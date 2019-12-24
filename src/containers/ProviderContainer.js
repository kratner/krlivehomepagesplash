import React from "react";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import SplashBackground from "../components/SplashBackground";
import reducer from "../reducers/index";
//import VHyveLogo from "../components/VHyveLogo";
//import VideoScreen from "../components/VideoScreen";
//import SetupWindow from "../components/SetupWindow";

const store = createStore(reducer, applyMiddleware(thunk));

/*

const closeSetupWindow = () => {
  const setupwindow = document.getElementById("setupwindow");
  if (setupwindow.classList.contains("open")) {
    setupwindow.classList.remove("open");
  }
};

*/

const ProviderContainer = () => (
  <Provider store={store}>
    <SplashBackground id="splashbackground"></SplashBackground>
  </Provider>
);

export default ProviderContainer;
