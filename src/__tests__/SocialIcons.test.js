import React from "react";
import { shallow } from "enzyme";
import SocialIcons from "../components/SocialIcons";

describe("SocialIcons", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SocialIcons iconName="twitter" />);
    expect(wrapper).toMatchSnapshot();
  });
});
