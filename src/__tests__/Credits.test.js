import React from "react";
import { shallow } from "enzyme";
import Credits from "../components/Credits";

describe("Credits", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Credits id="credits" />);
    expect(wrapper).toMatchSnapshot();
  });
});
