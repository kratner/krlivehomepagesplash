import React from "react";
import { shallow } from "enzyme";
import AnimatedOverlay from "../components/AnimatedOverlay";

describe("AnimatedOverlay", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<AnimatedOverlay />);
    expect(wrapper).toMatchSnapshot();
  });
});
