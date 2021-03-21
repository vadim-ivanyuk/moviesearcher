import React from "react";
import { configure, render } from "enzyme";
import EnzymeToJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Sort } from "./Sort";

configure({ adapter: new Adapter() });

describe("Sort", () => {
  it("snap Sort", () => {
    const sortRender = render(
      <Provider store={store}>
        <Sort />
      </Provider>
    );
    expect(EnzymeToJSON(sortRender)).toMatchSnapshot();
  });
});
