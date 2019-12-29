import React from "react";
import { shallow } from "enzyme";
import ParticleField from "../webgl/ParticleField";

describe("ParticleField", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ParticleField />);
    expect(wrapper).toMatchSnapshot();
  });
});
