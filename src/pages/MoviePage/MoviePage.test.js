import React from "react";
import { configure, shallow } from "enzyme";
import EnzymeToJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import { MoviePage } from "./MoviePage";

configure({ adapter: new Adapter() });

jest.mock("react-redux", () => ({
  useSelector: () => jest.fn(),
  useDispatch: () => jest.fn(),
}));

jest.mock("redux-form", () => ({
  formReducer: () => jest.fn(),
}));

describe("MoviePage", () => {
  const mockProps = {
    match: {
      params: 587807,
    },
  };

  it("first render snapshot", () => {
    const moviePage = shallow(<MoviePage {...mockProps} />);

    expect(EnzymeToJSON(moviePage)).toMatchSnapshot();
  });
});
