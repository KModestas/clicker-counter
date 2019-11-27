import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

// enzyme gives you ultilies to work with react such as shallowing rendering and jQuery like DOM manipulation
// jest gives you the testing and assertion capabilities

// adapts enzyme to work with correct react version
Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
test("renders increment button", () => {});
test("renders counter display", () => {});
test("counter starts at 0", () => {});
test("clicking button increments counter in display", () => {});
