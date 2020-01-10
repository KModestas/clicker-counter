import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

// enzyme gives you ultilies to work with react such as shallow rendering and jQuery like DOM manipulation
// jest gives you the testing and assertion capabilities

// adapts enzyme to work with correct react version
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

// you can console.log(wrapper.debug()) to get a stringified version of your wrapper

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

// can be 'it' or 'test'
test("renders without error", () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, "component-app");
  expect(app.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

describe("Increment", () => {
  // now we have enough tests to organize by function
  test("renders increment button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "increment-button");
    expect(button.length).toBe(1);
  });

  test("clicking increment button increments counter display", () => {
    const counter = 50;
    const wrapper = setup(null, { counter });

    // find button and click
    const button = findByTestAttr(wrapper, "increment-button");
    button.simulate("click");
    wrapper.update();

    // find display and test value
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.text()).toContain(counter + 1);
  });
});

describe("Decrement", () => {
  test("renders decrement button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "decrement-button");
    expect(button.length).toBe(1);
  });
  test("clicking decrement button decrements counter display when state counter value is greater than 0", () => {
    const counter = 50;
    const wrapper = setup(null, { counter });

    // find button and click
    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");
    wrapper.update();

    // find display and test value
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.text()).toContain(counter - 1);
  });
  // make sure error doesn't show by default
  test("error does not show when not needed", () => {
    const wrapper = setup();
    const errorMsg = findByTestAttr(wrapper, "error-message");
    expect(errorMsg.length).toBe(0);
  });

  describe("counter is 0 and decrement is clicked", () => {
    // using a describe here so I can use a "beforeEach" for shared setup

    // scoping wrapper to the describe, so it can be used in beforeEach and the tests
    let wrapper;

    beforeEach(() => {
      // no need to set counter value here; default value of 0 is good
      wrapper = setup();
      // find button and click
      const button = findByTestAttr(wrapper, "decrement-button");
      button.simulate("click");
      wrapper.update();
    });
    test("error shows", () => {
      // check the class of the error message
      const errorMsg = findByTestAttr(wrapper, "error-message");
      expect(errorMsg.length).toBe(1);
    });
    test("counter still displays 0", () => {
      const counterDisplay = findByTestAttr(wrapper, "counter-display");
      expect(counterDisplay.text()).toContain(0);
    });
    test("clicking increment clears the error", () => {
      // find and click the increment button
      const button = findByTestAttr(wrapper, "increment-button");
      button.simulate("click");

      // check the class of the error message
      const errorMsg = findByTestAttr(wrapper, "error-message");
      expect(errorMsg.length).toBe(0);
    });
  });
});
