import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

// enzyme gives you ultilies to work with react such as shallowing rendering and jQuery like DOM manipulation
// jest gives you the testing and assertion capabilities

// adapts enzyme to work with correct react version
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => shallow(<App {...props} />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test("renders without error", () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, "component-app");
  expect(app.length).toBe(1);
});
test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});
test("renders counter display", () => {
  const wrapper = setup();
  const counter = findByTestAttr(wrapper, "counter-display");
  expect(counter.length).toBe(1);
});
test("counter starts at 0", () => {});
test("clicking button increments counter in display", () => {});
