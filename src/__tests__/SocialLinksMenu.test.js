import React from "react";
import { shallow } from "enzyme";
import SocialLinksMenu from "../components/SocialLinksMenu";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers/index";

const store = createStore(reducer, applyMiddleware(thunk));

describe("SocialLinksMenu", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SocialLinksMenu />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
