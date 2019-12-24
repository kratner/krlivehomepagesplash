import React from "react";
import { shallow } from "enzyme";
import { KeithRatnerLogo } from "../components/KeithRatnerLogo";

describe("KeithRatnerLogo", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<KeithRatnerLogo />);
    expect(wrapper).toMatchSnapshot();
  });
});
