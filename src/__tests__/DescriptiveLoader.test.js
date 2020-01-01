import React from "react";
import { shallow } from "enzyme";
import DescriptiveLoader from "../components/DescriptiveLoader";

describe("DescriptiveLoader", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<DescriptiveLoader message="Loading Message..." />);
    expect(wrapper).toMatchSnapshot();
  });
});
