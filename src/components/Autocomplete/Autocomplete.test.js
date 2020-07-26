import React from "react";
import Autocomplete from "./Autocomplete";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Autocomplete", () => {
  it("to be truthy", () => {
    expect(Autocomplete).toBeTruthy();
  });
});
