import React from "react";
import { shallow } from "enzyme";
import SplashLinksMenu from "../components/SplashLinksMenu";

describe("SplashLinksMenu", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SplashLinksMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
