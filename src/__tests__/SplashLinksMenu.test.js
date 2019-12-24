import React from "react";
import { shallow } from "enzyme";
import SplashLinksMenu from "../components/SplashLinksMenu";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers/index";

const store = createStore(reducer, applyMiddleware(thunk));

describe("SplashLinksMenu", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SplashLinksMenu />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
