import React from "react"
import { Social } from ".."
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

describe("Social", () => {
  it("to be truthy", () => {
    expect(Social).toBeTruthy()
  })

  it("to contain twitter attributes when type is twitter", () => {
    const wrapper = shallow(
      <Social type='twitter' href='https://twitter.com/miguelprieto' />
    )
    const link = wrapper.find("a")
    expect(link).toHaveLength(1)
    expect(link.prop("href")).toBe("https://twitter.com/miguelprieto")

    const image = link.find("img")
    expect(image).toHaveLength(1)
    expect(image.prop("src")).toBe("twitter.svg")
    expect(image.prop("alt")).toBe("Twitter")
  })

  it("to contain github attributes when type is github", () => {
    const wrapper = shallow(
      <Social type='github' href='https://twitter.com/miguelprieto' />
    )
    const link = wrapper.find("a")
    expect(link).toHaveLength(1)
    expect(link.prop("href")).toBe("https://twitter.com/miguelprieto")

    const image = link.find("img")
    expect(image).toHaveLength(1)
    expect(image.prop("src")).toBe("github.svg")
    expect(image.prop("alt")).toBe("Github")
  })
})
