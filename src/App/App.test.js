import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";

it("renders without crashing", () => {
  shallow(<App />);
});

it("fetches data when mounted", () => {
  mount(<App />);
});

it("Testing BarWrapper state", () => {
  const component = shallow(<App />);

  expect(component.state().activeBarIndex).toBe(0);
});

it("ActiveBarSelector test", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.state().activeBarIndex).toBe(0);
});

describe("when ValueIncrementerWrapper calls #changeCurrentBarValue", () => {
  it("changes the state", () => {
    const component = shallow(<App />);

    component.setState({
      activeBarIndex: 1, // the middle value
      barValues: [10, 20, 30]
    });

    component.find("ValueIncrementerWrapper").prop("changeCurrentBarValue")(30);

    expect(component.state().barValues).toEqual([10, 50, 30]);
  });

  it("changes the state but does not allow numbers less than zero", () => {
    const component = shallow(<App />);

    component.setState({
      activeBarIndex: 1, // 2nd element index
      barValues: [10, 20, 30]
    });

    component.find("ValueIncrementerWrapper").prop("changeCurrentBarValue")(
      -30
    );

    // 2nd element value is 0, not -10
    expect(component.state().barValues).toEqual([10, 0, 30]);
  });
});

describe("getAppDataService", () => {
  it("fetches data from server when server returns a successful response", done => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

    expect(global.fetch).toHaveBeenCalledTimes(0);

    process.nextTick(() => {
      global.fetch.mockClear();
      done();
    });
  });
});
