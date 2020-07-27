import React from "react";
import renderer from "react-test-renderer";
import Social from "./Social";

describe("<Layout />", () => {
  it("renders correctly with type contact", () => {
    const tree = renderer
      .create(<Social type="contact" href="mailto:test@mprieto.me" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with type facebook", () => {
    const tree = renderer
      .create(
        <Social type="facebook" href="https://facebook.com/jmigueprieto" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with type github", () => {
    const tree = renderer
      .create(<Social type="github" href="https://github.com/jmigueprieto" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with type instagram", () => {
    const tree = renderer
      .create(
        <Social type="instagram" href="https://instagram.com/jmigueprieto" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with type linkedin", () => {
    const tree = renderer
      .create(
        <Social type="linkedin" href="https://linkedin.com/in/jmigueprieto" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with type twitter", () => {
    const tree = renderer
      .create(
        <Social type="twitter" href="https://twitter.com/in/miguelprieto" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
