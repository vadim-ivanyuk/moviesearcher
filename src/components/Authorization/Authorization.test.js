import React from "react";
import { render } from "react-dom";
import { configure, shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import { Authorization } from "./Authorization";

configure({ adapter: new Adapter() });

describe("Authorization", () => {
  it("snap", () => {
    const authorization = shallow(<Authorization />);

    expect(shallowToJson(authorization)).toMatchSnapshot();
  });
});
