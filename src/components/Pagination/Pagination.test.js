import React from "react";
import { configure, mount } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Pagination } from "./Pagination";

configure({ adapter: new Adapter() });

jest.mock();

describe("Pagination", () => {
  const pagination = mount(
    <Provider store={store}>
      <Pagination />
    </Provider>
  );
  const buttonPrev = pagination.find("button.btn").first();
  const buttonNext = pagination.find("button.btn").last();

  it("first render snap", () => {
    expect(shallowToJson(pagination)).toMatchSnapshot();
  });

  it("button click", () => {
    expect(buttonPrev.props().disabled).toEqual(true);

    expect(pagination.props().store.getState().filters.page).toEqual(1);

    for (let i = 1; i < 10; i++) {
      buttonNext.simulate("click");

      expect(pagination.props().store.getState().filters.page).toEqual(i + 1);
    }

    console.log(pagination.props());
  });

  it("last render snap", () => {
    expect(shallowToJson(pagination)).toMatchSnapshot();
  });
});
