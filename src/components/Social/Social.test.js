import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FacebookIcon from "./Icons/FacebookIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import Social from "./Social";
import ContactIcon from "./Icons/ContactIcon";
import GithubIcon from "./Icons/GithubIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";

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

  //TODO refactor. Extract function to avoid repeated code
  it("to render components correctly for type facebook", () => {
    const wrapper = shallow(<Social type="facebook" href="fake_url" />);
    const link = wrapper.find("a");
    expect(link).toHaveLength(1);
    expect(link.prop("href")).toBe("fake_url");

    const icon = link.find(FacebookIcon);
    expect(icon).toHaveLength(1);
  });

  it("to render components correctly for type contact", () => {
    const wrapper = shallow(<Social type="contact" href="fake_url" />);
    const link = wrapper.find("a");
    expect(link).toHaveLength(1);
    expect(link.prop("href")).toBe("fake_url");

    const icon = link.find(ContactIcon);
    expect(icon).toHaveLength(1);
  });

  it("to render components correctly for type github", () => {
    const wrapper = shallow(<Social type="github" href="fake_url" />);
    const link = wrapper.find("a");
    expect(link).toHaveLength(1);
    expect(link.prop("href")).toBe("fake_url");

    const icon = link.find(GithubIcon);
    expect(icon).toHaveLength(1);
  });

  it("to render components correctly for type instagram", () => {
    const wrapper = shallow(<Social type="instagram" href="fake_url" />);
    const link = wrapper.find("a");
    expect(link).toHaveLength(1);
    expect(link.prop("href")).toBe("fake_url");

    const icon = link.find(InstagramIcon);
    expect(icon).toHaveLength(1);
  });

  it("to render components correctly for type linkedin", () => {
    const wrapper = shallow(<Social type="linkedin" href="fake_url" />);
    const link = wrapper.find("a");
    expect(link).toHaveLength(1);
    expect(link.prop("href")).toBe("fake_url");

    const icon = link.find(LinkedinIcon);
    expect(icon).toHaveLength(1);
  });

  it("to render components correctly for type twitter", () => {
    const wrapper = shallow(<Social type="twitter" href="fake_url" />);
    const link = wrapper.find("a");
    expect(link).toHaveLength(1);
    expect(link.prop("href")).toBe("fake_url");

    const icon = link.find(TwitterIcon);
    expect(icon).toHaveLength(1);
  });
});
