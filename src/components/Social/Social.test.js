import React from "react";
import Social from "./Social";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Social", () => {
  it("to be truthy", () => {
    expect(Social).toBeTruthy();
  });

  it("to throw an Error if type is unkown", () => {
    expect(() =>
      shallow(<Social type="tumblr" href="https://www.tumblr.com/" />)
    ).toThrow(Error("Unknown type 'tumblr' of social icon"));
  });

  it("to throw an Error href is not defined", () => {
    expect(() => shallow(<Social type="github" />)).toThrow(
      Error("href must be a valid URL")
    );
  });

  it("to contain correct attributes", () => {
    const props = [
      { type: "contact", href: "mailto:hello@mprieto.me" },
      {
        type: "facebook",
        href: "https://facebook.com/jmigueprieto",
        target: "_self"
      },
      {
        type: "github",
        href: "https://github.com/jmigueprieto",
        target: "_blank"
      },
      {
        type: "instagram",
        href: "https://www.instagram.com/jmigueprieto",
        target: "_blank"
      },
      { type: "linkedin", href: "https://www.linkedin.com/in/jmigueprieto" },
      {
        type: "twitter",
        href: "https://twitter.com/miguelprieto"
      }
    ];

    const wrapper = shallow(
      <Social type="twitter" href="https://twitter.com/miguelprieto" />
    );
    const link = wrapper.find("a");
    expect(link).toHaveLength(1);
    expect(link.prop("href")).toBe("https://twitter.com/miguelprieto");

    const image = link.find("img");
    expect(image).toHaveLength(1);
    expect(image.prop("src")).toBe("twitter.svg");
    expect(image.prop("alt")).toBe("Twitter");
  });
});
