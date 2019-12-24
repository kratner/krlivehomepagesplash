import React from "react";
import { shallow } from "enzyme";
import SplashBackground from "../components/SplashBackground";

describe("SplashBackground", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SplashBackground />);
    expect(wrapper).toMatchSnapshot();
  });
});
