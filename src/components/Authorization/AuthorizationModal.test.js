import React from "react";
import { configure, shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { AuthorizationModal } from "./AuthorizationModal";

configure({ adapter: new Adapter() });

describe("Authorization modal", () => {
  it("snap Authorization modal", () => {
    const authorizationModal = shallow(
      <Provider store={store}>
        <AuthorizationModal modal={false} toggleModal={jest.fn()} />
      </Provider>
    );
    expect(shallowToJson(authorizationModal)).toMatchSnapshot();
  });
});
