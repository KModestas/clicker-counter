import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

// adapts enzyme to work with correct react version
Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {});
test("renders increment button", () => {});
test("renders counter display", () => {});
test("counter starts at 0", () => {});
test("clicking button increments counter in display", () => {});
