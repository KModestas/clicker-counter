import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

// enzyme gives you ultilies to work with react such as shallowing rendering and jQuery like DOM manipulation
// jest gives you the testing and assertion capabilities

// adapts enzyme to work with correct react version
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  // use setState to set state of component being tested
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test("renders without error", () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, "component-app");
  expect(app.length).toBe(1);
});
test("renders increment button", () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  expect(incrementButton.length).toBe(1);
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
test("clicking button increments counter in display", () => {
  // pass in counter varaible (makes this test completely isolated)
  const counter = 50;
  const wrapper = setup(null, { counter });
  // find button and click
  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate("click");
  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  // toContain instead of toBe makes sure that it is not dependant on the exact text to pass
  expect(counterDisplay.text()).toContain(counter + 1);
});
