import React from "react";
import { configure, mount } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { ResetFilters } from "./ResetFilters";

configure({ adapter: new Adapter() });

describe("Reset filters", () => {
  const resetFilters = mount(
    <Provider store={store}>
      <ResetFilters />
    </Provider>
  );

  it("snap Reset filters", () => {
    expect(shallowToJson(resetFilters)).toMatchSnapshot();
  });
});
