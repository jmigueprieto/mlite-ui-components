import React from "react";
import Autocomplete from "./Autocomplete";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Autocomplete", () => {
  jest.useFakeTimers();

  it("to be truthy", () => {
    expect(Autocomplete).toBeTruthy();
  });

  it("to render an input and no suggestions by default", () => {
    const wrapper = shallow(<Autocomplete />);
    const input = wrapper.find("input");
    expect(input.length).toBe(1);
    const suggestions = wrapper.find("ul");
    expect(suggestions.length).toBe(0);
  });

  it("to render suggestions when input gets focus", () => {
    const wrapper = shallow(
      <Autocomplete items={["A", "AA", "AAA", "AAAA"]} />
    );
    const input = wrapper.find("input");
    expect(input.length).toBe(1);
    //no suggestions at first
    let suggestions = wrapper.find("ul");
    expect(suggestions.length).toBe(0);
    // once the input gains focus we show suggestions
    input.simulate("focus", {});
    suggestions = wrapper.find("ul");
    expect(suggestions.length).toBe(1);
    // the suggestions should match the items props
    const list = suggestions.find("li");
    expect(list.length).toBe(4);
    expect(list.at(0).text()).toBe("A");
    expect(list.at(1).text()).toBe("AA");
    expect(list.at(2).text()).toBe("AAA");
    expect(list.at(3).text()).toBe("AAAA");
  });

  it("to hide suggestions when input loses focus", () => {
    const wrapper = shallow(
      <Autocomplete items={["A", "AA", "AAA", "AAAA"]} />
    );
    const input = wrapper.find("input");
    expect(input.length).toBe(1);
    input.simulate("focus", {});
    let suggestions = wrapper.find("ul");
    expect(suggestions.length).toBe(1);
    input.simulate("blur", {});
    // There's 200 ms timeout before hiding the suggestions, that's why we need this
    jest.runAllTimers();
    suggestions = wrapper.find("ul");
    expect(suggestions.length).toBe(0);
  });

  it("to hide suggestions when ESC is pressed", () => {
    const wrapper = shallow(
      <Autocomplete items={["A", "AA", "AAA", "AAAA"]} />
    );
    const input = wrapper.find("input");
    expect(input.length).toBe(1);
    input.simulate("focus", {});
    let suggestions = wrapper.find("ul");
    expect(suggestions.length).toBe(1);
    input.simulate("keyDown", { keyCode: 27 });
    suggestions = wrapper.find("ul");
    expect(suggestions.length).toBe(0);
  });
});
